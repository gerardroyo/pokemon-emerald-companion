/**
 * PokemonDetailModal.js
 * Premium modal component for detailed Pokemon information
 */

import {
  getCompletePokemonInfo,
  getMoveDetails,
  formatMoveName,
  typeTranslationsES,
  damageClassTranslationsES,
  VERSION_GROUPS,
  getEvolutionItemES,
  getHeldItemES,
  getLocationES,
  getTriggerES,
  getAbilityNameES,
  getMoveNameES,
  getSpecialEvolution
} from '../data/pokeApiService.js';
import { getSelectedGame, GAMES } from '../data/gameManager.js';

let currentPokemonId = null;
let isModalOpen = false;

/**
 * Initialize the modal container in the DOM
 */
export function initPokemonModal() {
  if (document.getElementById('pokemon-detail-modal')) return;

  const modalContainer = document.createElement('div');
  modalContainer.id = 'pokemon-detail-modal';
  modalContainer.className = 'pokemon-modal-container hidden';
  modalContainer.innerHTML = `
    <div class="pokemon-modal-backdrop"></div>
    <div class="pokemon-modal">
      <button class="pokemon-modal-close" aria-label="Cerrar">✕</button>
      <div class="pokemon-modal-content">
        <!-- Content loaded dynamically -->
      </div>
    </div>
  `;
  document.body.appendChild(modalContainer);

  // Event listeners
  const backdrop = modalContainer.querySelector('.pokemon-modal-backdrop');
  const closeBtn = modalContainer.querySelector('.pokemon-modal-close');

  backdrop.addEventListener('click', closePokemonModal);
  closeBtn.addEventListener('click', closePokemonModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen) {
      closePokemonModal();
    }
  });
}

/**
 * Open the modal for a specific Pokemon
 */
export async function openPokemonModal(pokemonId) {
  if (!pokemonId) return;

  const container = document.getElementById('pokemon-detail-modal');
  if (!container) {
    initPokemonModal();
  }

  const modal = document.getElementById('pokemon-detail-modal');
  const content = modal.querySelector('.pokemon-modal-content');

  currentPokemonId = pokemonId;
  isModalOpen = true;

  // Show modal with loading state
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  content.innerHTML = renderLoadingSkeleton();

  // Get version group based on selected game
  const game = getSelectedGame();
  const versionGroup = game === GAMES.PLATINUM ? VERSION_GROUPS.platinum : VERSION_GROUPS.emerald;

  try {
    const pokemon = await getCompletePokemonInfo(pokemonId, versionGroup);
    content.innerHTML = await renderPokemonContent(pokemon, versionGroup);

    // Attach handlers for learnset accordion
    attachLearnsetHandlers();
  } catch (error) {
    console.error('Error loading Pokemon details:', error);
    content.innerHTML = renderErrorState();
  }
}

/**
 * Close the modal
 */
export function closePokemonModal() {
  const modal = document.getElementById('pokemon-detail-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    isModalOpen = false;
    currentPokemonId = null;
  }
}

/**
 * Render loading skeleton
 */
function renderLoadingSkeleton() {
  return `
    <div class="pokemon-modal-loading">
      <div class="skeleton-header">
        <div class="skeleton skeleton-sprite"></div>
        <div class="skeleton-info">
          <div class="skeleton skeleton-title"></div>
          <div class="skeleton skeleton-types"></div>
        </div>
      </div>
      <div class="skeleton skeleton-stats"></div>
      <div class="skeleton skeleton-evolution"></div>
      <div class="skeleton skeleton-learnset"></div>
    </div>
  `;
}

/**
 * Render error state
 */
function renderErrorState() {
  return `
    <div class="pokemon-modal-error">
      <span class="error-icon">⚠️</span>
      <h3>Error al cargar datos</h3>
      <p>No se pudo obtener la información del Pokémon. Verifica tu conexión a internet.</p>
      <button onclick="closePokemonModal()" class="retry-btn">Cerrar</button>
    </div>
  `;
}

/**
 * Render Pokemon content
 */
async function renderPokemonContent(pokemon, versionGroup) {
  const versionLabel = versionGroup === 'platinum' ? 'Platino' : 'Esmeralda';
  const sprite = pokemon.spriteAnimated || pokemon.sprite;

  return `
    <div class="pokemon-modal-header">
      <div class="pokemon-sprite-container">
        <img src="${sprite}" alt="${pokemon.name}" class="pokemon-sprite-large">
        <span class="pokemon-id">#${String(pokemon.id).padStart(3, '0')}</span>
      </div>
      <div class="pokemon-header-info">
        <h2 class="pokemon-modal-name">${pokemon.name}</h2>
        <div class="pokemon-modal-types">
          ${pokemon.types.map(type => `
            <span class="type-pill type-${type}">${typeTranslationsES[type] || type}</span>
          `).join('')}
        </div>
        <p class="pokemon-flavor-text">${pokemon.flavorText || 'Sin descripción disponible.'}</p>
      </div>
    </div>
    
    <div class="pokemon-modal-section">
      <h3 class="section-title">📊 Estadísticas Base</h3>
      <div class="pokemon-stats-grid">
        ${renderStatBar('PS', pokemon.stats.hp, '#ff5555')}
        ${renderStatBar('Ataque', pokemon.stats.attack, '#f5ac78')}
        ${renderStatBar('Defensa', pokemon.stats.defense, '#fae078')}
        ${renderStatBar('At. Esp.', pokemon.stats.spAttack, '#9db7f5')}
        ${renderStatBar('Def. Esp.', pokemon.stats.spDefense, '#a7db8d')}
        ${renderStatBar('Velocidad', pokemon.stats.speed, '#fa92b2')}
      </div>
      <div class="stats-total">
        <span>Total:</span>
        <strong>${Object.values(pokemon.stats).reduce((a, b) => a + b, 0)}</strong>
      </div>
    </div>
    
    <div class="pokemon-modal-section">
      <h3 class="section-title">🔄 Cadena Evolutiva</h3>
      <div class="evolution-chain-container">
        ${renderEvolutionChain(pokemon.evolutionChain, pokemon.id)}
      </div>
    </div>
    
    <div class="pokemon-modal-section">
      <h3 class="section-title">📖 Movimientos por Nivel <span class="version-badge">${versionLabel}</span></h3>
      <div class="learnset-container">
        ${await renderLearnsetTable(pokemon.learnset)}
      </div>
    </div>
    
    <div class="pokemon-modal-section pokemon-details-extra">
      <div class="detail-item">
        <span class="detail-label">Altura</span>
        <span class="detail-value">${pokemon.height} m</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Peso</span>
        <span class="detail-value">${pokemon.weight} kg</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Habilidades</span>
        <span class="detail-value">${pokemon.abilities
      .map(a => getAbilityNameES(a.name) + (a.isHidden ? ' (oculta)' : ''))
      .join(', ')}</span>
      </div>
    </div>
  `;
}

/**
 * Render stat bar
 */
function renderStatBar(label, value, color) {
  const maxStat = 255;
  const percentage = Math.min((value / maxStat) * 100, 100);

  return `
    <div class="stat-row">
      <span class="stat-label">${label}</span>
      <div class="stat-bar-container">
        <div class="stat-bar" style="width: ${percentage}%; background: ${color};"></div>
      </div>
      <span class="stat-value">${value}</span>
    </div>
  `;
}

/**
 * Render evolution chain
 */
function renderEvolutionChain(chain, currentId) {
  if (!chain || chain.length === 0) {
    return '<p class="no-evolution">Este Pokémon no evoluciona.</p>';
  }

  if (chain.length === 1) {
    return '<p class="no-evolution">Este Pokémon no tiene evoluciones.</p>';
  }

  return `
    <div class="evolution-chain">
      ${chain.map((evo, index) => {
    const isActive = evo.id === currentId;
    const specialEvo = getSpecialEvolution(evo.id);
    const evolutionText = specialEvo ? specialEvo.method : getEvolutionText(evo.evolutionDetails);
    const tooltipText = specialEvo ? specialEvo.explanation : '';

    return `
          ${index > 0 ? `
            <div class="evolution-arrow" ${tooltipText ? `title="${tooltipText}"` : ''}>
              <span class="arrow-icon">→</span>
              <span class="evolution-method">${evolutionText}</span>
            </div>
          ` : ''}
          <div class="evolution-pokemon ${isActive ? 'active' : ''}" 
               onclick="openPokemonModal(${evo.id})"
               data-pokemon-id="${evo.id}"
               ${tooltipText ? `title="${tooltipText}"` : ''}>
            <img src="${evo.sprite}" alt="${evo.name}" class="evolution-sprite">
            <span class="evolution-name">${formatMoveName(evo.name)}</span>
          </div>
        `;
  }).join('')}
    </div>
  `;
}

/**
 * Get evolution method text - with full Spanish translations
 */
function getEvolutionText(details) {
  if (!details) return '';

  const parts = [];

  // Trigger base (level-up, trade, use-item)
  if (details.trigger === 'trade') {
    parts.push('🔄 Intercambio');
    if (details.heldItem) {
      parts.push(`+ ${getHeldItemES(details.heldItem)}`);
    }
  } else if (details.trigger === 'use-item' && details.item) {
    parts.push(`💎 ${getEvolutionItemES(details.item)}`);
  } else {
    // Level up or other
    if (details.minLevel) {
      parts.push(`Nv. ${details.minLevel}`);
    }
  }

  // Additional conditions
  if (details.minHappiness) {
    parts.push('❤️ Felicidad alta');
  }
  if (details.timeOfDay === 'day') {
    parts.push('☀️ De día');
  } else if (details.timeOfDay === 'night') {
    parts.push('🌙 De noche');
  }
  if (details.location) {
    parts.push(`📍 ${getLocationES(details.location)}`);
  }
  if (details.knownMove) {
    parts.push(`Saber ${formatMoveName(details.knownMove)}`);
  }
  if (details.knownMoveType) {
    const typeES = typeTranslationsES[details.knownMoveType] || details.knownMoveType;
    parts.push(`Mov. tipo ${typeES}`);
  }
  if (details.minAffection) {
    parts.push('💕 Afecto alto');
  }

  // If no parts, just return a generic text
  if (parts.length === 0) {
    if (details.trigger) {
      return getTriggerES(details.trigger);
    }
    return 'Evoluciona';
  }

  return parts.join(' ');
}

/**
 * Render learnset table
 */
async function renderLearnsetTable(learnset) {
  if (!learnset || learnset.length === 0) {
    return '<p class="no-moves">No hay movimientos disponibles para esta versión.</p>';
  }

  // Get move details for first 15 moves initially, lazy load the rest
  const initialMoves = learnset.slice(0, 15);
  const remainingMoves = learnset.slice(15);

  const movesWithDetails = await Promise.all(
    initialMoves.map(async (move) => {
      const details = await getMoveDetails(move.name);
      return { ...move, details };
    })
  );

  return `
    <table class="learnset-table">
      <thead>
        <tr>
          <th>Nv.</th>
          <th>Movimiento</th>
          <th>Tipo</th>
          <th>Cat.</th>
          <th>Poder</th>
          <th>Prec.</th>
        </tr>
      </thead>
      <tbody>
        ${movesWithDetails.map(move => renderMoveRow(move)).join('')}
        ${remainingMoves.length > 0 ? `
          <tr class="load-more-row">
            <td colspan="6">
              <button class="load-more-btn" data-remaining='${JSON.stringify(remainingMoves.map(m => m.name))}'>
                Cargar ${remainingMoves.length} movimientos más...
              </button>
            </td>
          </tr>
        ` : ''}
      </tbody>
    </table>
  `;
}

/**
 * Render a single move row
 */
function renderMoveRow(move) {
  // Use Spanish move name
  const moveNameSpanish = getMoveNameES(move.name);

  if (!move.details) {
    return `
      <tr>
        <td>${move.level}</td>
        <td>${moveNameSpanish}</td>
        <td colspan="4">-</td>
      </tr>
    `;
  }

  const { details } = move;
  const typeClass = `type-${details.type}`;
  const categoryIcon = getCategoryIcon(details.damageClass);

  return `
    <tr class="move-row" title="${details.description}">
      <td class="move-level">${move.level}</td>
      <td class="move-name">${moveNameSpanish}</td>
      <td><span class="type-mini ${typeClass}">${typeTranslationsES[details.type] || details.type}</span></td>
      <td class="move-category">${categoryIcon}</td>
      <td class="move-power">${details.power || '—'}</td>
      <td class="move-accuracy">${details.accuracy ? details.accuracy + '%' : '—'}</td>
    </tr>
  `;
}

/**
 * Get category icon
 */
function getCategoryIcon(damageClass) {
  const icons = {
    physical: '💥',
    special: '✨',
    status: '📊'
  };
  return `<span title="${damageClassTranslationsES[damageClass] || damageClass}">${icons[damageClass] || '?'}</span>`;
}

/**
 * Attach handlers for loading more moves
 */
function attachLearnsetHandlers() {
  const loadMoreBtn = document.querySelector('.load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', async (e) => {
      const btn = e.target;
      const remaining = JSON.parse(btn.dataset.remaining);
      btn.textContent = 'Cargando...';
      btn.disabled = true;

      try {
        const movesWithDetails = await Promise.all(
          remaining.map(async (moveName) => {
            const details = await getMoveDetails(moveName);
            // Find level from original learnset
            const learnsetEntry = { name: moveName, level: '?', details };
            return learnsetEntry;
          })
        );

        // Get the current pokemon's learnset to find levels
        const game = getSelectedGame();
        const versionGroup = game === GAMES.PLATINUM ? VERSION_GROUPS.platinum : VERSION_GROUPS.emerald;
        const pokemon = await getCompletePokemonInfo(currentPokemonId, versionGroup);

        const rowsHtml = movesWithDetails.map(move => {
          const originalMove = pokemon.learnset.find(m => m.name === move.name);
          move.level = originalMove?.level || '?';
          return renderMoveRow(move);
        }).join('');

        const loadMoreRow = document.querySelector('.load-more-row');
        loadMoreRow.insertAdjacentHTML('beforebegin', rowsHtml);
        loadMoreRow.remove();
      } catch (error) {
        console.error('Error loading more moves:', error);
        btn.textContent = 'Error - Reintentar';
        btn.disabled = false;
      }
    });
  }
}

// Expose globally for onclick handlers
window.openPokemonModal = openPokemonModal;
window.closePokemonModal = closePokemonModal;
