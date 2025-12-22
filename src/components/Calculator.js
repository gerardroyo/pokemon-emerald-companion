import { types, typeMatrix } from '../data/types.js';
// import { team } from '../data/team.js'; // REMOVED
// import { teams } from '../data/teams_data.js'; // REMOVED
// import { platino_teams } from '../data/platino_teams_data.js'; // REMOVED
import { translateType, typeTranslations } from '../data/translations.js';
import { getActiveTeam } from '../data/teamManager.js';

let allPokemon = [];

// Get the currently selected team
function getCurrentTeam() {
    // Now centralized in teamManager
    const activeTeam = getActiveTeam();
    // Filter out empty slots
    return activeTeam.slots.filter(s => s !== null);
}

// State
let calcMode = 'search'; // 'search' | 'manual'
let selectedManualTypes = [];

export async function renderCalculator() {
    const container = document.getElementById('calculator');
    if (!container) return;

    container.innerHTML = `
    <h2>Calculadora de Tipos</h2>
    
    <div class="calculator-container" style="max-width:1200px;">
      
      <!-- Mode Tabs -->
      <div class="calc-toggle-container" style="display:flex; justify-content:center; gap:1rem; margin-bottom:2rem;">
         <button id="mode-search" class="calc-tab active" onclick="switchCalcMode('search')">🔍 Por Nombre</button>
         <button id="mode-manual" class="calc-tab" onclick="switchCalcMode('manual')">⚡ Selector de Tipos</button>
      </div>

      <!-- SEARCH MODE -->
      <div id="calc-search-panel" style="max-width:600px; margin:0 auto 2rem auto; position:relative; z-index:50;">
        <div class="calc-search-box" style="position:relative;">
             <input type="text" id="poke-search" class="search-input" placeholder="Buscar Pokémon rival (ej. Milotic...)" autocomplete="off" style="padding-left: 3.5rem; height:3.5rem; font-size:1.2rem;">
             <span style="position:absolute; left:1.2rem; top:50%; transform:translateY(-50%); font-size:1.4rem; opacity:0.5;">🔍</span>
             <div id="search-suggestions" style="position:absolute; width:100%; top:110%; left:0; max-height:300px; overflow-y:auto; background:var(--ray-charcoal); border:1px solid var(--glass-border); display:none; border-radius: 12px; box-shadow:0 10px 40px rgba(0,0,0,0.5);"></div>
        </div>
      </div>

      <!-- MANUAL MODE -->
      <div id="calc-manual-panel" style="display:none; max-width:800px; margin:0 auto 2rem auto;">
         <div class="manual-type-selector" style="background:rgba(0,0,0,0.2); border-radius:16px; padding:1.5rem; border:1px solid var(--glass-border);">
            <h3 style="text-align:center; margin-bottom:1rem; color:var(--text-muted);">Selecciona los tipos del Defensor (Máx 2)</h3>
            <div id="type-grid" style="display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center;">
               ${types.map(t => `
                  <button class="type-pill type-${t.toLowerCase()} manual-type-btn" 
                          onclick="toggleManualType('${t}')"
                          style="opacity:0.6; filter:grayscale(0.4); transition:all 0.2s; border:2px solid transparent;">
                     ${translateType(t)}
                  </button>
               `).join('')}
            </div>
            <div class="manual-actions" style="margin-top:1.5rem; text-align:center;">
               <button onclick="clearManualTypes()" style="background:rgba(255,255,255,0.1); border:none; color:var(--text-muted); padding:0.5rem 1rem; border-radius:8px; cursor:pointer;">Limpiar</button>
            </div>
         </div>
      </div>

      <!-- Results Area -->
      <div id="calc-results" class="results-panel" style="display:none; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap:2rem;">
        
        <!-- Left Col: Weakness Chart -->
        <div class="glass-panel" style="display:flex; flex-direction:column; gap:1.5rem;">
           <div id="enemy-header" style="text-align:center;"></div>
           <div id="weakness-info" style="display:flex; flex-direction:column; gap:1rem;"></div>
        </div>

        <!-- Right Col: Team Suggestions -->
        <div class="glass-panel" style="display:flex; flex-direction:column;">
          <h3 style="margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--glass-border); display:flex; align-items:center; gap:0.5rem;">
             <span>🛡️</span> Análisis de tu Equipo
          </h3>
          <div id="team-analysis" style="display:grid; gap:0.75rem;"></div>
        </div>

      </div>
    </div>
  `;

    // Initialize State
    switchCalcMode(calcMode);

    // Fetch Logic (Silent)
    if (allPokemon.length === 0) {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
            const data = await res.json();
            allPokemon = data.results;
        } catch (e) {
            console.error("Error fetching pokemon", e);
        }
    }

    // Event Listeners for Search
    const input = document.getElementById('poke-search');
    const suggestions = document.getElementById('search-suggestions');

    // Search Listener
    input.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        suggestions.innerHTML = '';

        if (val.length < 2) {
            suggestions.style.display = 'none';
            return;
        }

        const matches = allPokemon.filter(p => p.name.includes(val)).slice(0, 8);

        if (matches.length > 0) {
            suggestions.style.display = 'block';
            suggestions.innerHTML = matches.map(p => {
                const id = p.url.split('/')[6];
                const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

                return `
                <div class="suggestion-item" data-url="${p.url}" style="padding:0.75rem 1rem; cursor:pointer; border-bottom:1px solid var(--glass-border); color:var(--text-main); transition:0.2s; font-size:1rem; display:flex; align-items:center; gap:1rem;">
                    <img src="${spriteUrl}" alt="${p.name}" style="width:40px; height:40px; object-fit:contain;">
                    <span style="font-weight:600;">${p.name.charAt(0).toUpperCase() + p.name.slice(1)}</span>
                </div>
              `;
            }).join('');

            document.querySelectorAll('.suggestion-item').forEach(el => {
                el.addEventListener('click', () => {
                    input.value = el.textContent.trim();
                    suggestions.style.display = 'none';
                    analyzePokemonUrl(el.dataset.url);
                });
                el.addEventListener('mouseenter', () => el.style.background = 'var(--glass-shine)');
                el.addEventListener('mouseleave', () => el.style.background = 'transparent');
            });
        } else {
            suggestions.style.display = 'none';
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.calc-search-box')) {
            suggestions.style.display = 'none';
        }
    });
}

// Global Mode Switcher
window.switchCalcMode = (mode) => {
    calcMode = mode;

    // UI Update
    document.querySelectorAll('.calc-tab').forEach(b => b.classList.remove('active'));
    document.getElementById(`mode-${mode}`).classList.add('active');

    const searchPanel = document.getElementById('calc-search-panel');
    const manualPanel = document.getElementById('calc-manual-panel');
    const results = document.getElementById('calc-results');

    if (mode === 'search') {
        searchPanel.style.display = 'block';
        manualPanel.style.display = 'none';
        results.style.display = 'none'; // Hide until searched
    } else {
        searchPanel.style.display = 'none';
        manualPanel.style.display = 'block';
        results.style.display = 'none'; // Hide until types selected
        clearManualTypes();
    }
}

// Manual Type Logic
window.toggleManualType = (type) => {
    if (selectedManualTypes.includes(type)) {
        selectedManualTypes = selectedManualTypes.filter(t => t !== type);
    } else {
        if (selectedManualTypes.length >= 2) return; // Max 2
        selectedManualTypes.push(type);
    }
    updateManualUI();
}

window.clearManualTypes = () => {
    selectedManualTypes = [];
    updateManualUI();
}

function updateManualUI() {
    // Update button states
    document.querySelectorAll('.manual-type-btn').forEach(btn => {
        // Find which type this button is
        const typeClass = Array.from(btn.classList).find(c => c.startsWith('type-') && c !== 'type-pill');
        const type = types.find(t => `type-${t.toLowerCase()}` === typeClass);

        if (selectedManualTypes.includes(type)) {
            btn.style.opacity = '1';
            btn.style.filter = 'none';
            btn.style.boxShadow = '0 0 15px rgba(255,255,255,0.4)';
            btn.style.transform = 'scale(1.1)';
            btn.style.border = '2px solid white';
        } else {
            btn.style.opacity = '0.5';
            btn.style.filter = 'grayscale(0.6)';
            btn.style.boxShadow = 'none';
            btn.style.transform = 'scale(1)';
            btn.style.border = '2px solid transparent';
        }
    });

    // Trigger Analysis if types selected
    if (selectedManualTypes.length > 0) {
        analyzeTypes(selectedManualTypes, "Manual Selection", null);
    } else {
        document.getElementById('calc-results').style.display = 'none';
    }
}

async function analyzePokemonUrl(url) {
    const container = document.getElementById('calc-results');
    const header = document.getElementById('enemy-header');

    container.style.display = 'grid';
    header.innerHTML = '<div style="padding:2rem;">Cargando datos...</div>';

    try {
        const res = await fetch(url);
        const data = await res.json();

        const pokemonId = data.id;
        const enemyTypes = data.types.map(t => {
            const apiType = t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1);
            return typeTranslations[apiType] || apiType;
        });
        analyzeTypes(enemyTypes, data.name.toUpperCase(), data.sprites.front_default, pokemonId);

    } catch (e) {
        console.error(e);
        header.innerHTML = 'Error cargando detalles.';
    }
}

function analyzeTypes(enemyTypes, name, spriteUrl, pokemonId = null) {
    const container = document.getElementById('calc-results');
    const header = document.getElementById('enemy-header');
    const weaknessContainer = document.getElementById('weakness-info');
    const teamContainer = document.getElementById('team-analysis');

    // Make sure container is visible
    container.style.display = 'grid';

    // 1. Header Logic (Different for Manual vs Search)
    let html = '';
    if (spriteUrl) {
        html += `
          <div style="position:relative; width:120px; height:120px; margin:0 auto; cursor:pointer;" 
               class="clickable"
               onclick="openPokemonModal(${pokemonId})">
             <div style="position:absolute; inset:0; background:var(--primary-glow); filter:blur(40px); opacity:0.2; border-radius:50%;"></div>
             <img src="${spriteUrl}" style="width:100%; height:100%; position:relative; z-index:1; image-rendering:pixelated; transform:scale(1.2);">
          </div>
          <h2 style="margin:0.5rem 0 1rem 0; color:var(--text-main); font-size:1.8rem; height: auto;">${name}</h2>
        `;
    } else {
        html += `<h2 style="margin:0 0 1rem 0; color:var(--text-main); font-size:1.5rem;">Defensor</h2>`;
    }

    html += `<div class="poke-types" style="justify-content:center; gap:0.5rem; margin-bottom:1rem;">
      ${enemyTypes.map(t => `<span class="type-pill type-${t.toLowerCase()}" style="padding:0.3rem 1rem; font-size:1rem;">${translateType(t)}</span>`).join('')}
    </div>`;
    header.innerHTML = html;

    // 2. Weakness Calculation
    const weaknesses = {};
    types.forEach(atkType => {
        let mod = 1;
        enemyTypes.forEach(defType => {
            const atkIdx = types.indexOf(atkType);
            const defIdx = types.indexOf(defType);
            if (atkIdx !== -1 && defIdx !== -1) {
                mod *= typeMatrix[atkIdx][defIdx];
            }
        });
        // We track all mods, not just > 1, to layout the chart
        weaknesses[atkType] = mod;
    });

    // Grouping for Chart (x4, x2, x1, x0.5, x0.25, x0)
    const groups = {
        '4': [], '2': [], '1': [], '0.5': [], '0.25': [], '0': []
    };

    Object.entries(weaknesses).forEach(([t, mod]) => {
        if (mod === 4) groups['4'].push(t);
        else if (mod === 2) groups['2'].push(t);
        else if (mod === 1) groups['1'].push(t);
        else if (mod === 0.5) groups['0.5'].push(t);
        else if (mod === 0.25) groups['0.25'].push(t);
        else if (mod === 0) groups['0'].push(t);
    });

    // Render Clean Effectiveness Chart
    let chartHtml = `
      <div class="eff-grid" style="display:grid; gap:1rem;">
    `;

    // Helper to render a row
    const renderRow = (label, color, group) => {
        if (group.length === 0) return '';
        return `
         <div class="eff-row" style="background:rgba(255,255,255,0.03); border-radius:12px; padding:0.8rem; border-left:4px solid ${color};">
            <div style="font-weight:700; color:${color}; font-size:0.9rem; margin-bottom:0.5rem; text-transform:uppercase;">${label}</div>
            <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
               ${group.map(t => `<span class="type-badge-modern type-${t.toLowerCase()}" style="font-size:0.8rem; padding:4px 8px;">${translateType(t)}</span>`).join('')}
            </div>
         </div>
        `;
    };

    if (groups['4'].length) chartHtml += renderRow('Súper Eficaz (x4)', '#ef4444', groups['4']);
    if (groups['2'].length) chartHtml += renderRow('Eficaz (x2)', '#f97316', groups['2']);
    if (groups['0.5'].length) chartHtml += renderRow('Poco Eficaz (x0.5)', '#3b82f6', groups['0.5']);
    if (groups['0.25'].length) chartHtml += renderRow('Muy Poco Eficaz (x0.25)', '#6366f1', groups['0.25']);
    if (groups['0'].length) chartHtml += renderRow('Inmune (x0)', '#64748b', groups['0']);

    chartHtml += `</div>`;
    weaknessContainer.innerHTML = chartHtml;

    // 3. Team Suggestions
    const currentTeam = getCurrentTeam();
    if (currentTeam.length === 0) {
        teamContainer.innerHTML = `<div style="text-align:center; color:var(--text-muted); padding:2rem;">Añade Pokémon a tu equipo para ver sugerencias.</div>`;
    } else {
        const analysis = currentTeam.map(member => {
            let bestMove = { name: "Ninguno", mod: 0 };
            const validMoves = member.moves ? member.moves.filter(m => m) : [];
            validMoves.forEach(move => {
                if (move.category === 'Status') return;
                let mod = 1;
                enemyTypes.forEach(eType => {
                    const atkIdx = types.indexOf(move.type);
                    const defIdx = types.indexOf(eType);
                    if (atkIdx !== -1 && defIdx !== -1) mod *= typeMatrix[atkIdx][defIdx];
                });
                if (member.types.includes(move.type)) mod *= 1.5;
                if (mod > bestMove.mod) bestMove = { name: move.name, mod: mod, type: move.type };
            });

            let maxReceiveMod = 0;
            enemyTypes.forEach(eType => {
                let mod = 1;
                member.types.forEach(mType => {
                    const atkIdx = types.indexOf(eType);
                    const defIdx = types.indexOf(mType);
                    if (atkIdx !== -1 && defIdx !== -1) mod *= typeMatrix[atkIdx][defIdx];
                });
                if (mod > maxReceiveMod) maxReceiveMod = mod;
            });

            return { member, bestMove, maxReceiveMod };
        });

        analysis.sort((a, b) => b.bestMove.mod - a.bestMove.mod);

        teamContainer.innerHTML = analysis.map(item => {
            let borderColor = 'transparent';
            let bgColor = 'rgba(255,255,255,0.03)';
            if (item.bestMove.mod >= 2) {
                borderColor = 'var(--primary-color)';
                bgColor = 'rgba(var(--primary-rgb), 0.1)';
            } else if (item.maxReceiveMod >= 2) {
                borderColor = 'var(--ray-red)';
                bgColor = 'rgba(244, 63, 94, 0.05)';
            }

            return `
            <div class="recommendation-card clickable" 
                 style="border-left: 3px solid ${borderColor}; background:${bgColor}; padding:0.75rem 1rem; margin:0; display:flex; align-items:center; gap:1rem; cursor:pointer;"
                 onclick="openPokemonModal(${item.member.id})">
              <img src="${item.member.image}" style="width:48px; height:48px; object-fit:contain; filter:drop-shadow(0 2px 5px rgba(0,0,0,0.5)); transform:scale(1.1);">
              
              <div style="flex:1;">
                <div style="font-weight:700; font-size:1rem; color:var(--text-main); margin-bottom:0.2rem;">${item.member.name}</div>
                ${item.bestMove.mod >= 1
                    ? `<div style="font-size:0.85rem; color:var(--text-muted);">Usa <span style="color:var(--primary-glow); font-weight:600;">${item.bestMove.name}</span> <span style="background:rgba(0,0,0,0.3); padding:0 4px; border-radius:4px; font-size:0.75rem;">x${item.bestMove.mod.toFixed(1)}</span></div>`
                    : `<div style="font-size:0.85rem; color:var(--text-muted);">Poco efectivo</div>`
                }
              </div>

              <div style="text-align:right;">
                 ${item.maxReceiveMod >= 2
                    ? `<div style="color:var(--ray-red); font-size:0.8rem; font-weight:600; display:flex; flex-direction:column; align-items:flex-end;"><span>⚠️ Recibe</span><span>x${item.maxReceiveMod}</span></div>`
                    : `<div style="color:var(--primary-color); font-size:0.8rem; font-weight:600;">🛡️ Seguro</div>`
                }
              </div>
            </div>
          `;
        }).join('');
    }
}
