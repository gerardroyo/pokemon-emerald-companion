import { getPokemonData, getLearnsetByVersion, getMoveDetails, getAllLearnableMoves, typeTranslationsES } from '../data/pokeApiService.js';
import { getSelectedGame } from '../data/gameManager.js';
import { getActiveTeam, updateActiveTeamSlots, createNewTeam, getAllTeams, setActiveTeamId, updateTeamName, deleteTeam } from '../data/teamManager.js';
import { emeraldItemsList } from '../data/emerald_items.js';
import { natures } from '../data/natures.js';
// We'll dynamic import or fetch moves as needed, or use a cached list if available

// Cache
let allPokemonCache = [];
let filteredPokemon = [];
let isFetching = false;
let currentSearchTerm = '';

const GAME_POKEDEX_LIMITS = {
    emerald: 386,
    platinum: 493
};

// Helpers
const capitalize = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : '';

// Consolidated Event Handler
function handleBuilderClick(e) {
    const target = e.target;
    // const container = e.currentTarget; // Not needed if we use global functions or well-scoped logic

    // --- MODALS & ACTIONS ---

    // 1. Remove Pokemon
    const removeBtn = target.closest('.slot-remove-btn');
    if (removeBtn) {
        const slot = removeBtn.closest('.team-slot');
        if (slot) {
            // Stop propagation handled by inline, but good to be safe here if not inline
            // But we kept inline for safety. This delegation is a backup/cleaner alternative way.
            // Since we possess inline handlers with stopPropagation, this might not even be reached for those buttons!
            // Wait, standardizing: The user wanted refactor. 
            // If we rely on delegation, we should REMOVE inline handlers.
            // But for now, let's support both or just Delegation for the TABS which are the issue.
        }
    }

    // 2. Tab Selection (Fixing the bug)
    // 2. Tab Selection (Fixing the bug)
    const tab = target.closest('.team-tab');
    if (tab) {
        console.log("Tab Clicked:", tab);
        let id = tab.dataset.id;

        // Try to parse if it looks like a number, otherwise keep as string
        if (!isNaN(id) && !id.includes('-') && !id.includes('_')) {
            const parsed = parseInt(id);
            if (String(parsed) === id) id = parsed;
        } else {
            // If activeTeam.id is a number but we have a string from dataset, 
            // we might need coercion. 
            // Best strategy: Check against the raw string or let setActiveTeamId handle coercion?
            // Let's coerce to number if it IS a number, else string.
            const num = Number(id);
            if (!isNaN(num)) id = num;
        }

        console.log("Switching to team ID:", id);
        setActiveTeamId(id);
        renderTeamBuilderImpl();
        return;
    }

    // 3. New Team
    if (target.closest('#btn-new-team')) {
        openPromptModal('create');
        return;
    }

    // 4. Rename Team
    if (target.closest('#btn-rename-team')) {
        const activeTeam = getActiveTeam();
        openPromptModal('rename', activeTeam.name);
        return;
    }

    // 5. Delete Team
    if (target.closest('#btn-delete-team')) {
        openConfirmationModal('team');
        return;
    }

    // 6. Retry Fetch
    if (target.matches('.btn-retry')) {
        isFetching = false;
        initPokemonList();
        return;
    }
}

export function hydrateTeamBuilder() {
    const container = document.querySelector('.builder-container');
    if (!container) return;

    console.log("Hydrating Team Builder Events...");

    // SINGLE ASSIGNMENT: Prevents listener stacking
    container.onclick = handleBuilderClick;

    // Search Input binding (Idempotent check?)
    // This element is re-created on render, so re-binding is correct.
    const searchInput = document.getElementById('builder-search');
    if (searchInput) {
        searchInput.oninput = (e) => {
            handleSearch(e.target.value);
        };
    }

    // Drag & Drop needs re-binding because elements are new
    setupDragAndDrop();
}

function setupDragAndDrop() {
    const sourceList = document.getElementById('pokemon-source-list');
    const teamSlotsContainer = document.querySelector('.team-slots-container');

    // Source List
    if (sourceList) {
        sourceList.addEventListener('dragstart', (e) => {
            const card = e.target.closest('.source-pokemon-card');
            if (!card) return;
            const id = card.dataset.id;
            console.log("Drag Start Source:", id);
            e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'new', id: id }));
            e.dataTransfer.effectAllowed = 'copyMove';
        });
    }

    // Team Slots
    if (teamSlotsContainer) {
        teamSlotsContainer.addEventListener('dragstart', (e) => {
            const slot = e.target.closest('.team-slot');
            if (!slot || !slot.classList.contains('filled')) return;
            const index = slot.dataset.index;
            console.log("Drag Start Team:", index);
            e.dataTransfer.setData('text/plain', JSON.stringify({ type: 'move', index: index }));
            e.dataTransfer.effectAllowed = 'copyMove';
        });

        teamSlotsContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            const slot = e.target.closest('.team-slot');
            if (slot) slot.classList.add('drag-over');
        });

        teamSlotsContainer.addEventListener('dragleave', (e) => {
            const slot = e.target.closest('.team-slot');
            if (slot) slot.classList.remove('drag-over');
        });

        teamSlotsContainer.addEventListener('drop', async (e) => {
            e.preventDefault();
            const slot = e.target.closest('.team-slot');
            if (!slot) return;
            slot.classList.remove('drag-over');

            const slotIndex = parseInt(slot.dataset.index);
            const dataStr = e.dataTransfer.getData('text/plain');
            if (!dataStr) return;

            try {
                const data = JSON.parse(dataStr);
                if (data.type === 'new') {
                    await addPokemonToSlot(data.id, slotIndex);
                } else if (data.type === 'move') {
                    movePokemon(data.index, slotIndex);
                }
            } catch (err) {
                console.error("Drop Error:", err);
            }
        });
    }
}

// --- CORE RENDERER ---

export function renderTeamBuilder() {
    // We defer actual rendering slightly to ensure modules are loaded? 
    // No, standard execution is fine.

    // Trigger background fetch if needed
    if (allPokemonCache.length === 0) setTimeout(initPokemonList, 0);

    return renderTeamBuilderHTML();
}

// Wrapper to re-render locally by updating the DOM in place
function renderTeamBuilderImpl() {
    const container = document.querySelector('.builder-container');
    if (container) {
        container.innerHTML = renderInnerBuilderHTML();
        hydrateTeamBuilder(); // Re-attach events
        // Re-render source list if needed or keep it?
        // simple re-render of list
        renderPokemonList();
    }
}

function renderTeamBuilderHTML() {
    return `
        <div class="builder-container" style="display: block; opacity: 1; visibility: visible; min-height: 500px;">
           ${renderInnerBuilderHTML()}
        </div>
    `;
}

function renderInnerBuilderHTML() {
    const activeTeam = getActiveTeam();
    const allTeams = getAllTeams();

    return `
    <div class="builder-header" style="flex-direction: column; gap:1.5rem; align-items: flex-start;">
        <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
             <h2 style="margin:0; font-size:1.5rem; background: linear-gradient(to right, #4ade80, #3b82f6); -webkit-background-clip: text; color: transparent;">Constructor de Equipos</h2>
             <div class="team-summary" style="font-size:0.9rem; color:var(--text-muted); background:rgba(255,255,255,0.05); padding:0.3rem 0.8rem; border-radius:100px;">
                ${activeTeam.slots.filter(s => s).length}/6 Pokémon
            </div>
        </div>

        <div class="team-selector-wrapper-fix">
            <div class="team-tabs-container-fix">
                ${allTeams.map(t => `
                    <div class="team-tab ${t.id === activeTeam.id ? 'active' : ''}" data-id="${t.id}">
                        <span class="tab-name">${t.name}</span>
                        ${t.id === activeTeam.id ? '<span class="tab-indicator"></span>' : ''}
                    </div>
                `).join('')}
                <button id="btn-new-team" class="new-team-tab" title="Nuevo Equipo">+</button>
            </div>
            
            <div class="team-actions-fix">
                 <button id="btn-rename-team" class="action-btn-icon" title="Renombrar Equipo">✏️</button>
                 <button id="btn-delete-team" class="action-btn-icon danger" title="Borrar Equipo">🗑️</button>
            </div>
        </div>
    </div>

    <!-- Custom Confirmation Modal -->
    <div id="confirm-modal-overlay" class="modal-overlay hidden" style="z-index: 10000;">
        <div class="confirm-modal">
            <div class="confirm-modal-icon">⚠️</div>
            <h3>¿Estás seguro?</h3>
            <p id="confirm-modal-text">¿Quieres eliminar este Pokémon del equipo?</p>
            <div class="confirm-actions">
                <button class="btn-cancel" onclick="closeConfirmationModal()">Cancelar</button>
                <button class="btn-confirm-delete" onclick="confirmDelete()">Eliminar</button>
            </div>
        </div>
    </div>

    <!-- Custom Prompt Modal -->
    <div id="prompt-modal-overlay" class="modal-overlay hidden" style="z-index: 10000;">
        <div class="confirm-modal">
            <h3 id="prompt-modal-title">Título</h3>
            <div style="width:100%; display:flex; justify-content:center;">
                <input type="text" id="prompt-modal-input" class="prompt-input" placeholder="Nombre..." onkeydown="handlePromptKeydown(event)">
            </div>
            <div class="confirm-actions">
                <button class="btn-cancel" onclick="closePromptModal()">Cancelar</button>
                <button class="btn-confirm-delete" onclick="confirmPrompt()" id="btn-confirm-prompt">Guardar</button>
            </div>
        </div>
    </div>

    <!-- Edit Modal Placeholder -->
    <div id="edit-modal-overlay" class="modal-overlay hidden">
        <div class="edit-modal">
            <!-- Content injected via JS -->
        </div>
    </div>

    <div class="builder-workspace">
        <div class="team-slots-container">
            ${activeTeam.slots.map((slot, index) => renderTeamSlot(slot, index)).join('')}
        </div>

        <div class="pokemon-source-panel" style="margin-top: 1.1rem;">
            <div class="search-box-container-fix">
                    <input type="text" id="builder-search" class="search-input-fix" placeholder="Buscar por nombre...">
            </div>
            <div id="pokemon-source-list" class="pokemon-source-list">
                ${allPokemonCache.length === 0 ? '<div class="loading-spinner">Cargando Pokémon...</div>' : ''}
            </div>
        </div>
    </div>
    `;
}

// --- SLOT RENDERING (Updated for Detailed Card) ---

function renderTeamSlot(pokemon, index) {
    if (!pokemon) {
        return `
            <div class="team-slot empty" data-index="${index}">
                <div class="slot-empty-content">
                    <span class="slot-number">${index + 1}</span>
                    <span class="plus-icon">+</span>
                    <span class="drag-hint">Añadir</span>
                </div>
            </div>
        `;
    }

    // Determine info
    const nature = pokemon.nature ? pokemon.nature.name.split('(')[0].trim() : '-';
    // const item = pokemon.item ? pokemon.item.name : 'Sin Objeto';
    const item = pokemon.item ? pokemon.item.name : '-';

    // Stylish Type Badges - with fallback translation for old data
    const typeBadges = pokemon.types.map(t => {
        const typeKey = t.english ? t.english.toLowerCase() : (t.spanish || '').toLowerCase();
        const spanishName = typeTranslationsES[typeKey] || t.spanish || t.english || '???';
        return `<span class="type-badge-modern type-${typeKey}" title="${spanishName}">
            ${spanishName.substring(0, 3).toUpperCase()}
         </span>`;
    }).join('');

    // Visual Move Pills with hover tooltip - like TeamView
    const movePills = pokemon.moves ? pokemon.moves.map(m => {
        if (!m) return '';
        const typeClass = m.type ? `type-${m.type.toLowerCase()}` : '';
        const moveName = m.displayName || m.name || '???';
        const typeLabel = m.typeTranslated || m.type || '???';
        const power = m.power || '-';
        const accuracy = m.accuracy || '-';
        const category = m.damageClassTranslated || m.damageClass || '-';
        const desc = m.description || '';

        return `<div class="move-wrapper">
            <div class="move-pill ${typeClass}">
                <span class="move-type-label">${typeLabel.substring(0, 3).toUpperCase()}</span>
                <span class="move-name-text">${moveName}</span>
            </div>
            <div class="move-tooltip">
                <div class="tooltip-header">
                    <span class="tooltip-name">${moveName}</span>
                    <span class="tooltip-type type-pill ${typeClass}">${typeLabel}</span>
                </div>
                <div class="tooltip-category">${category} · Pot: ${power} · Pre: ${accuracy}%</div>
                <p class="tooltip-desc">${desc || 'Sin descripción disponible.'}</p>
            </div>
        </div>`;
    }).filter(m => m).join('') : '<span class="no-moves">Sin ataques</span>';

    return `
        <div class="team-slot filled slot-card-premium" draggable="true" data-index="${index}" onclick="handleSlotClick(event, ${pokemon.id})">
            <button class="slot-remove-btn" type="button" title="Eliminar" style="z-index: 10;" onclick="event.stopPropagation(); window.openConfirmationModal('pokemon', ${index})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <button class="slot-edit-btn-ghost" type="button" title="Editar" style="z-index: 10;" onclick="event.stopPropagation(); window.openEditModal(${index})">✏️</button>
            
            <div class="slot-premium-content">
                <!-- Background Gradient/Effect derived from primary type? -->
                <div class="slot-bg-effect"></div>

                <div class="slot-visual-container">
                    <img src="${pokemon.sprite}" alt="${pokemon.name}" class="slot-sprite-premium" draggable="false">
                </div>

                <div class="slot-info-premium">
                    <div class="slot-header-premium">
                        <span class="slot-name-premium">${pokemon.nickname || pokemon.name}</span>
                        <div class="slot-types-premium">${typeBadges}</div>
                    </div>

                    <div class="slot-stats-row">
                        <div class="stat-pill" title="Naturaleza">
                            <span class="stat-icon">🧬</span>
                            <span class="stat-val">${nature}</span>
                        </div>
                        <div class="stat-pill" title="Objeto">
                            <span class="stat-icon">🎒</span>
                            <span class="stat-val">${item}</span>
                        </div>
                    </div>
                    
                    <div class="slot-moves-row">
                        ${movePills}
                    </div>
                </div>
            </div>
        </div>
    `;
}


// --- EDIT MODAL LOGIC ---

async function openEditModal(slotIndex) {
    const activeTeam = getActiveTeam();
    const pokemon = activeTeam.slots[slotIndex];
    if (!pokemon) return;

    // We might need to fetch full details if not present (moves, abilities)
    // For now, we assume we have basic check, but ideally we fetch species data here

    // Render Modal UI
    const overlay = document.getElementById('edit-modal-overlay');
    const modalContent = overlay.querySelector('.edit-modal');

    modalContent.innerHTML = `
        <div class="modal-header">
            <h3>Editar ${pokemon.name}</h3>
            <button class="btn-close-modal">✕</button>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label>Mote</label>
                <input type="text" id="edit-nickname" value="${pokemon.nickname || ''}" placeholder="${pokemon.name}">
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label>Naturaleza</label>
                    <select id="edit-nature">
                         <option value="">Neutro</option>
                         ${natures.map(n => `<option value="${n.name}" ${pokemon.nature?.name === n.name ? 'selected' : ''}>${n.name} (+${n.up}/-${n.down})</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Objeto</label>
                    <select id="edit-item">
                        <option value="">Ninguno</option>
                        ${emeraldItemsList.map(i => `<option value="${i.name}" ${pokemon.item?.name === i.name ? 'selected' : ''}>${i.name}</option>`).join('')}
                    </select>
                </div>
            </div>

            <div class="form-group">
                <label>Movimientos (Escribe para buscar - Simulado por ahora)</label>
                <div class="moves-grid">
                    ${[0, 1, 2, 3].map(i => `
                        <input type="text" class="move-input" data-index="${i}" 
                               value="${pokemon.moves?.[i]?.name || ''}" 
                               placeholder="Movimiento ${i + 1}">
                    `).join('')}
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button class="btn-save-modal">Guardar Cambios</button>
        </div>
    `;

    overlay.classList.remove('hidden');

    // Event Listeners for Modal

    // Close
    modalContent.querySelector('.btn-close-modal').onclick = closeEditModal;

    // Save
    modalContent.querySelector('.btn-save-modal').onclick = () => {
        saveEditModal(slotIndex);
    };
}

function closeEditModal() {
    const overlay = document.getElementById('edit-modal-overlay');
    overlay.classList.add('hidden');
}

function saveEditModal(slotIndex) {
    const activeTeam = getActiveTeam();
    const pokemon = activeTeam.slots[slotIndex];
    if (!pokemon) return;

    // Capture Values
    const nickname = document.getElementById('edit-nickname').value;
    const natureName = document.getElementById('edit-nature').value;
    const itemName = document.getElementById('edit-item').value;

    // Update Objects
    pokemon.nickname = nickname;

    const natureObj = natures.find(n => n.name === natureName);
    pokemon.nature = natureObj || null;

    const itemObj = emeraldItemsList.find(i => i.name === itemName);
    pokemon.item = itemObj || null;

    // Moves (Simple text capture for now, ideally strictly validated)
    const moveInputs = document.querySelectorAll('.move-input');
    pokemon.moves = Array.from(moveInputs).map(input => {
        const val = input.value.trim();
        // Here we really should look up the type of the move to store it correctly for the calculator
        // For this iteration, we might just store the name and let calculator do best guess or specific lookup
        // We will default to Normal if unknown for now to prevent crashes
        if (!val) return null;
        return { name: val, type: 'Normal', category: 'Physical' }; // Placeholder Type
    });

    updateActiveTeamSlots(activeTeam.slots);
    renderTeamBuilderImpl();
    closeEditModal();
}


// --- DATA LOGIC ---

// Fetch Logic (Copied/Adapted)
async function initPokemonList() {
    if (allPokemonCache.length > 0) {
        applyGameFilter();
        return;
    }
    if (isFetching) return;
    isFetching = true;

    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=493');
        const data = await res.json();
        allPokemonCache = data.results.map((p, index) => ({
            id: index + 1,
            name: p.name,
            url: p.url,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
        }));
        applyGameFilter();
    } catch (e) {
        console.error("Fetch error", e);
    } finally {
        isFetching = false;
    }
}

function renderPokemonList() {
    const container = document.getElementById('pokemon-source-list');
    if (!container) return;

    if (filteredPokemon.length === 0 && !isFetching) {
        container.innerHTML = '<div class="no-results">No se encontraron</div>';
        return;
    }

    const slice = filteredPokemon.slice(0, 100);
    container.innerHTML = slice.map(p => `
        <div class="source-pokemon-card" draggable="true" data-id="${p.id}">
            <img src="${p.sprite}" class="source-sprite" loading="lazy" draggable="false">
            <span class="source-name">${capitalize(p.name)}</span>
        </div>
    `).join('') + (filteredPokemon.length > 100 ? '<div style="opacity:0.5; text-align:center;">...</div>' : '');
}

function handleSearch(query) {
    currentSearchTerm = query.toLowerCase();
    applyGameFilter();
}

function applyGameFilter() {
    const selectedGame = getSelectedGame();
    const maxDex = GAME_POKEDEX_LIMITS[selectedGame] || GAME_POKEDEX_LIMITS.emerald;
    filteredPokemon = allPokemonCache.filter(p => p.id <= maxDex);

    if (currentSearchTerm) {
        filteredPokemon = filteredPokemon.filter(p =>
            p.name.includes(currentSearchTerm) || String(p.id).includes(currentSearchTerm)
        );
    }

    renderPokemonList();
}

// Logic Helpers
async function addPokemonToSlot(id, index) {
    try {
        const details = await getPokemonData(id);

        // Helper to translate/format types using the translation map
        const typesFormatted = details.types.map(t => ({
            english: t.type.name,
            spanish: typeTranslationsES[t.type.name] || capitalize(t.type.name)
        }));

        // --- Auto-Suggest Moves Logic ---
        // Fetch learnset for current game to find best moves
        let recommendedMoves = [null, null, null, null];
        try {
            const game = getSelectedGame(); // 'emerald' or 'platinum'
            // Map game to version group if needed, but 'emerald' and 'platinum' match API
            const learnset = await getLearnsetByVersion(id, game);

            if (learnset.length > 0) {
                // Take the 4 highest-level moves (last 4)
                const topMoves = learnset.slice(-4).reverse();

                // Fetch full details for these moves to populate the UI (Type, etc)
                const movePromises = topMoves.map(m => getMoveDetails(m.name));
                const moveObjects = await Promise.all(movePromises);

                // Fill the slots
                recommendedMoves = [
                    ...moveObjects,
                    null, null, null, null // Ensure padding
                ].slice(0, 4);
            }
        } catch (moveErr) {
            console.warn("Auto-suggest moves failed:", moveErr);
        }

        const newMember = {
            id: details.id,
            name: capitalize(details.name),
            nickname: "",
            sprite: details.sprites.other['official-artwork'].front_default || details.sprites.front_default,
            types: typesFormatted,
            nature: null, // Could defaults to Neutral?
            item: null,
            moves: recommendedMoves,
            image: details.sprites.other['official-artwork'].front_default
        };

        const activeTeam = getActiveTeam();
        activeTeam.slots[index] = newMember;
        updateActiveTeamSlots(activeTeam.slots);

        renderTeamBuilderImpl();

    } catch (e) {
        console.error("Add Pokemon Error", e);
        // alert("Error al añadir Pokémon"); // Suppressed for smoother UX, log is enough
    }
}

// --- Edit Modal Logic ---

function handleSlotClick(e, id) {
    // Only trigger if not dragging
    if (e.target.closest('.slot-remove-btn') || e.target.closest('.slot-edit-btn')) return;
    if (window.openPokemonModal) window.openPokemonModal(id);
};
// Expose for HTML onclick
window.handleSlotClick = handleSlotClick;

function removePokemon(index) {
    console.log("Function removePokemon called for index:", index);
    // Trigger Custom Modal instead of window.confirm
    openConfirmationModal('pokemon', index);
};
// Expose if needed elsewhere
window.removePokemon = removePokemon;

function movePokemon(fromIndex, toIndex) {
    const activeTeam = getActiveTeam();
    if (fromIndex === toIndex) return;

    const temp = activeTeam.slots[toIndex];
    activeTeam.slots[toIndex] = activeTeam.slots[fromIndex];
    activeTeam.slots[fromIndex] = temp;

    updateActiveTeamSlots(activeTeam.slots);
    renderTeamBuilderImpl();
}
window.movePokemon = movePokemon;

// --- Custom Confirmation Modal Logic ---

function openConfirmationModal(type, indexOrId) {
    pendingDeleteType = type;
    pendingDeleteIndex = indexOrId;

    const overlay = document.getElementById('confirm-modal-overlay');
    const textEl = document.getElementById('confirm-modal-text');
    const activeTeam = getActiveTeam();

    if (type === 'pokemon') {
        if (!activeTeam.slots[indexOrId]) return;
        const pokemonName = activeTeam.slots[indexOrId].nickname || activeTeam.slots[indexOrId].name;
        if (textEl) textEl.textContent = `¿Quieres eliminar a ${pokemonName} del equipo?`;
    } else if (type === 'team') {
        if (textEl) textEl.textContent = `¿Quieres borrar el equipo "${activeTeam.name}"? Esta acción no se puede deshacer.`;
    }

    if (overlay) overlay.classList.remove('hidden');
}
window.openConfirmationModal = openConfirmationModal;

function closeConfirmationModal() {
    pendingDeleteIndex = null;
    pendingDeleteType = null;
    const overlay = document.getElementById('confirm-modal-overlay');
    if (overlay) overlay.classList.add('hidden');
}
window.closeConfirmationModal = closeConfirmationModal;

function confirmDelete() {
    const activeTeam = getActiveTeam();

    if (pendingDeleteType === 'pokemon') {
        const index = pendingDeleteIndex;
        if (index !== null && activeTeam.slots[index]) {
            activeTeam.slots[index] = null;
            updateActiveTeamSlots(activeTeam.slots);
            renderTeamBuilderImpl();
        }
    } else if (pendingDeleteType === 'team') {
        deleteTeam(activeTeam.id);
        renderTeamBuilderImpl();
    }

    closeConfirmationModal();
}
window.confirmDelete = confirmDelete;

// --- Custom Prompt Modal Logic ---

let pendingPromptAction = null; // 'create' | 'rename'

function openPromptModal(action, initialValue = '') {
    pendingPromptAction = action;
    const overlay = document.getElementById('prompt-modal-overlay');
    const titleEl = document.getElementById('prompt-modal-title');
    const inputEl = document.getElementById('prompt-modal-input');
    const confirmBtn = document.getElementById('btn-confirm-prompt');

    if (action === 'create') {
        titleEl.textContent = 'Nuevo Equipo';
        confirmBtn.textContent = 'Crear';
    } else {
        titleEl.textContent = 'Renombrar Equipo';
        confirmBtn.textContent = 'Guardar';
    }

    inputEl.value = initialValue;
    if (overlay) overlay.classList.remove('hidden');
    inputEl.focus();
}
window.openPromptModal = openPromptModal;

function closePromptModal() {
    pendingPromptAction = null;
    const overlay = document.getElementById('prompt-modal-overlay');
    if (overlay) overlay.classList.add('hidden');
}
window.closePromptModal = closePromptModal;

function confirmPrompt() {
    const inputEl = document.getElementById('prompt-modal-input');
    const value = inputEl.value.trim();

    if (!value) return; // Validate empty

    if (pendingPromptAction === 'create') {
        const createdTeam = createNewTeam(value);
        if (!createdTeam) return;
        renderTeamBuilderImpl();
    } else if (pendingPromptAction === 'rename') {
        const activeTeam = getActiveTeam();
        const renamed = updateTeamName(activeTeam.id, value);
        if (!renamed) return;
        renderTeamBuilderImpl();
    }

    closePromptModal();
}
window.confirmPrompt = confirmPrompt;

function handlePromptKeydown(e) {
    if (e.key === 'Enter') confirmPrompt();
    if (e.key === 'Escape') closePromptModal();
}
window.handlePromptKeydown = handlePromptKeydown;

// Global for Edit Modal
let currentEditIndex = -1;
let pendingDeleteIndex = null; // Track deletion
let pendingDeleteType = null; // 'pokemon' or 'team'

let currentEditMoves = [];
let currentEditNature = null; // New
let currentEditItem = null;   // New
let availableMovesCache = [];

window.openEditModal = async (index) => {
    const activeTeam = getActiveTeam();
    const member = activeTeam.slots[index];
    if (!member) return;

    currentEditIndex = index;
    currentEditMoves = [...member.moves];
    currentEditNature = member.nature; // Load
    currentEditItem = member.item;     // Load

    // Create modal if not exists
    let modal = document.getElementById('edit-team-modal');
    if (!modal) {
        document.body.insertAdjacentHTML('beforeend', `
            <div id="edit-team-modal" class="pokemon-modal-container" style="z-index: 2000; display: none;">
                <div class="pokemon-modal-backdrop" onclick="closeEditModal()"></div>
                <div class="pokemon-modal" style="max-width: 600px;">
                    <button class="pokemon-modal-close" onclick="closeEditModal()">✕</button>
                    <div class="pokemon-modal-content" id="edit-modal-content">
                        <!-- Content -->
                    </div>
                </div>
            </div>
        `);
        modal = document.getElementById('edit-team-modal');
    }

    // Render Loading State
    const content = document.getElementById('edit-modal-content');
    content.innerHTML = '<div style="text-align:center; padding:2rem;">Cargando movimientos...</div>';
    modal.style.display = 'flex'; // Show modal

    // Fetch Moves
    const game = getSelectedGame();
    const learnset = await getAllLearnableMoves(member.id, game || 'emerald');
    availableMovesCache = learnset;

    renderEditModalContent(member);
};

window.closeEditModal = () => {
    document.getElementById('edit-team-modal').classList.add('hidden');
    currentEditIndex = -1;
};

function renderEditModalContent(member) {
    const content = document.getElementById('edit-modal-content');

    // Move Inputs HTML
    const moveInputs = currentEditMoves.map((m, i) => {
        // Use Spanish Name if available (it might be in m.details or m.name)
        // m.displayName should be set by getAllLearnableMoves
        const moveName = m ? m.displayName || capitalize(m.name) : 'Vacío';
        const moveType = m ? m.type : 'normal';
        const moveTypeSpanish = m && m.typeTranslated ? m.typeTranslated : capitalize(moveType);
        // Badge style for type - show Spanish name (abbreviated to 3 chars for compactness)
        const typeBadge = m ? `<span class="type-badge-modern type-${moveType}" style="font-size:0.7rem; padding: 2px 6px;">${moveTypeSpanish.substring(0, 3).toUpperCase()}</span>` : '';

        return `
        <div class="edit-move-slot" onclick="openMoveSelector(${i})">
            <div class="edit-move-label">Movimiento ${i + 1}</div>
            <div class="edit-move-card ${m ? 'filled' : 'empty'}">
                ${typeBadge}
                <span class="move-name-display" style="margin-left:8px;">${moveName}</span>
                ${m ? `<span class="move-power-badge">${m.power || '-'}</span>` : '<span class="move-chevron">▼</span>'}
            </div>
        </div>
        `;
    }).join('');

    // Nature Options formatted
    const natureOptions = natures.map(n => {
        const label = formatNatureDisplay(n);
        return `<option value="${n.name}" ${currentEditNature && currentEditNature.name === n.name ? 'selected' : ''}>${label}</option>`;
    }).join('');

    // Item Display with Image
    const itemName = currentEditItem ? currentEditItem.name : 'Sin Objeto';
    // Construct Image URL
    const itemImgUrl = currentEditItem ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${currentEditItem.img}.png` : null;
    const itemContent = currentEditItem
        ? `<img src="${itemImgUrl}" style="width:24px; margin-right:8px;"> <span>${itemName}</span>`
        : `<span>${itemName}</span>`;

    content.innerHTML = `
        <div class="edit-modal-header">
            <img src="${member.sprite}" class="edit-sprite">
            <div class="edit-info">
                <h3>${member.name}</h3>
                <input type="text" class="edit-nickname" value="${member.nickname}" placeholder="Apodo" onchange="updateMemberNickname(this.value)">
            </div>
        </div>

        <!-- Info Section (Nature / Item) -->
        <div class="edit-section-row">
            <div class="edit-field-group">
                <label>Naturaleza</label>
                <select class="edit-select" onchange="updateMemberNature(this.value)">
                    <option value="">Neutro</option>
                    ${natureOptions}
                </select>
            </div>
            <div class="edit-field-group">
                <label>Objeto</label>
                <div class="edit-item-trigger" onclick="openItemSelector()">
                    ${itemContent}
                    <span class="move-chevron">▼</span>
                </div>
            </div>
        </div>

        <div class="edit-section">
            <h4>Movimientos</h4>
            <div class="edit-moves-grid">
                ${moveInputs}
            </div>
        </div>
        
        <div class="edit-actions">
           <button class="save-btn" onclick="saveEditChanges(); document.getElementById('edit-team-modal').style.display='none';" style="font-family: inherit;">Guardar Cambios</button>
        </div>
    `;
}

window.updateMemberNature = (natureName) => {
    if (!natureName) {
        currentEditNature = null;
        return;
    }
    const n = natures.find(x => x.name === natureName);
    currentEditNature = n;
}

window.openItemSelector = () => {
    // Reusing Overlay Logic but for Items
    const existing = document.getElementById('item-selector-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'item-selector-overlay';
    overlay.className = 'move-selector-overlay'; // Reuse style

    overlay.innerHTML = `
        <div class="move-selector-modal">
            <div class="move-search-header">
                <input type="text" id="item-search-input" placeholder="Buscar objeto..." autofocus>
                <button onclick="document.getElementById('item-selector-overlay').remove()" class="close-overlay-btn">✕</button>
            </div>
            <div class="move-list-container" id="item-list-container">
                <!-- Items injected here -->
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    const input = document.getElementById('item-search-input');
    const list = document.getElementById('item-list-container');

    renderItemList(emeraldItemsList, list);

    input.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = emeraldItemsList.filter(i => i.name.toLowerCase().includes(term));
        renderItemList(filtered, list);
    });

    input.focus();
}

function renderItemList(items, container) {
    if (items.length === 0) {
        container.innerHTML = '<div class="no-moves">No se encontraron objetos.</div>';
        return;
    }
    container.innerHTML = items.map(item => {
        // Construct Image URL (assuming item.img is slug)
        // Some items might have different slug format, but emerald_items.js seems to use standard slug
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.img}.png`;

        return `
        <div class="move-option-item" style="border-left-color: #ffd700;" onclick="selectItem('${item.name}')">
            <div class="move-opt-header" style="align-items: center; justify-content: flex-start; gap: 10px;">
                <img src="${imgUrl}" style="width: 30px; height: 30px; object-fit: contain;" onerror="this.style.display='none'">
                <span class="move-opt-name">${item.name}</span>
                <span class="move-opt-power" style="font-size:0.7rem; opacity:0.8; margin-left: auto;">${item.category}</span>
            </div>
            <div class="move-opt-details">
                <span class="move-opt-acc" style="width:100%">${item.desc}</span>
            </div>
        </div>
        `;
    }).join('');
}

window.selectItem = (itemName) => {
    const item = emeraldItemsList.find(i => i.name === itemName);
    if (item) {
        currentEditItem = item;
        // Refresh UI partial
        const member = getActiveTeam().slots[currentEditIndex];
        renderEditModalContent({ ...member, nickname: document.querySelector('.edit-nickname').value });
    }
    document.getElementById('item-selector-overlay').remove();
}

window.openMoveSelector = (slotIndex) => {
    // Create a temporary overlay for move selection
    const existing = document.getElementById('move-selector-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'move-selector-overlay';
    overlay.className = 'move-selector-overlay';

    overlay.innerHTML = `
        <div class="move-selector-modal">
            <div class="move-search-header">
                <input type="text" id="move-search-input" placeholder="Buscar movimiento..." autofocus>
                <button onclick="document.getElementById('move-selector-overlay').remove()" class="close-overlay-btn">✕</button>
            </div>
            <div class="move-list-container" id="move-list-container">
                <!-- Moves injected here -->
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    const input = document.getElementById('move-search-input');
    const list = document.getElementById('move-list-container');

    // Render initial list (Top 50 or categories?)
    renderMoveList(availableMovesCache, list, slotIndex);

    input.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = availableMovesCache.filter(m =>
            m.name.includes(term) || m.displayName.toLowerCase().includes(term)
        );
        renderMoveList(filtered, list, slotIndex);
    });

    // Focus
    input.focus();
};

function renderMoveList(moves, container, slotIndex) {
    if (moves.length === 0) {
        container.innerHTML = '<div class="no-moves">No se encontraron movimientos.</div>';
        return;
    }

    container.innerHTML = moves.map(m => `
        <div class="move-option-item type-${m.type}" onclick="selectMoveForSlot(${slotIndex}, '${m.name}')">
            <div class="move-opt-header">
                <span class="move-opt-name">${m.displayName || capitalize(m.name)}</span>
                <span class="move-opt-power">Pot: ${m.power || '-'}</span>
            </div>
            <div class="move-opt-details">
                <span class="type-badge-modern type-${m.type}" style="font-size:0.7rem; padding: 2px 6px; margin-right: 0.5rem;">${(m.typeTranslated || capitalize(m.type)).substring(0, 3).toUpperCase()}</span>
                <img src="https://play.pokemonshowdown.com/sprites/categories/${m.damageClassTranslated === 'Físico' ? 'Physical' : m.damageClassTranslated === 'Especial' ? 'Special' : 'Status'}.png" alt="${m.damageClassTranslated}" title="${m.damageClassTranslated}" style="width: 32px; height: 14px; object-fit: contain;">
                <span class="move-opt-acc" style="margin-left:auto">Pre: ${m.accuracy || '-'}%</span>
            </div>
        </div>
    `).join('');
}

window.selectMoveForSlot = (slotIndex, moveName) => {
    // Check for duplicate
    const isDuplicate = currentEditMoves.some(m => m && m.name === moveName);
    const isSelf = currentEditMoves[slotIndex] && currentEditMoves[slotIndex].name === moveName;

    if (isDuplicate && !isSelf) {
        alert("¡Este movimiento ya está seleccionado!");
        return;
    }

    const moveData = availableMovesCache.find(m => m.name === moveName);
    if (moveData) {
        currentEditMoves[slotIndex] = moveData;
        const member = getActiveTeam().slots[currentEditIndex];
        renderEditModalContent({ ...member, nickname: document.querySelector('.edit-nickname').value });
    }
    document.getElementById('move-selector-overlay').remove();
};

// Helper: Format Nature
function formatNatureDisplay(n) {
    if (n.up === '---') return n.name.split(' (')[0]; // Neutral
    const statMap = { 'Atk': 'Ataque', 'Def': 'Defensa', 'SpA': 'At. Esp', 'SpD': 'Def. Esp', 'Spe': 'Velocidad' };
    const name = n.name.split(' (')[0]; // Take Spanish Part "Firme"
    return `${name} (+${statMap[n.up]} / -${statMap[n.down]})`;
}

window.updateMemberNickname = (val) => {
    // Only local state update if we had full local state, but here we update activeTeam directly?
    // Better to wait for save? User requested "Save Changes" usually implies batch.
    // We do nothing here, read from input on save
};

window.saveEditChanges = () => {
    try {
        const activeTeam = getActiveTeam();
        const member = activeTeam.slots[currentEditIndex];
        if (!member) {
            console.error('No member found at index', currentEditIndex);
            closeEditModal();
            return;
        }

        // Save Nickname
        const nickInput = document.querySelector('.edit-nickname');
        if (nickInput) member.nickname = nickInput.value;

        // Save Moves
        member.moves = currentEditMoves;

        // Save Nature & Item
        member.nature = currentEditNature;
        member.item = currentEditItem;

        // Persist
        updateActiveTeamSlots(activeTeam.slots);

        // Refresh UI
        renderTeamBuilderImpl();
    } catch (err) {
        console.error('Error saving changes:', err);
    }

    // ALWAYS close modal at the end
    closeEditModal();
};

window.closeEditModal = () => {
    const modal = document.getElementById('edit-team-modal');
    if (modal) {
        modal.style.display = 'none';
    }
};
