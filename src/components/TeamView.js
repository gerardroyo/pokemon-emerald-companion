import { team } from '../data/team.js';
import { teams, teamCategories } from '../data/teams_data.js';
import { platino_teams, platino_teamCategories } from '../data/platino_teams_data.js';
import { translateType } from '../data/translations.js';
import { moveData, getCategoryIcon } from '../data/move_types.js';
import { getSelectedGame, GAMES } from '../data/gameManager.js';

// Get the correct teams and categories based on game version
function getCurrentTeamsData() {
  const game = getSelectedGame();
  if (game === GAMES.PLATINUM) {
    return { teams: platino_teams, categories: platino_teamCategories };
  }
  return { teams, categories: teamCategories };
}

// Get saved team selection from localStorage, default to 'competitive'
function getSavedTeamId() {
  return localStorage.getItem('selectedTeamId') || 'competitive';
}

// Save team selection to localStorage
function saveTeamId(teamId) {
  localStorage.setItem('selectedTeamId', teamId);
}

// Get current category from localStorage
function getSavedCategoryId() {
  return localStorage.getItem('selectedCategoryId') || 'difficulty';
}

// Save category selection to localStorage
function saveCategoryId(categoryId) {
  localStorage.setItem('selectedCategoryId', categoryId);
}

function renderTeamSelector() {
  const { teams: currentTeams, categories: currentCategories } = getCurrentTeamsData();
  const currentCategoryId = getSavedCategoryId();
  const currentTeamId = getSavedTeamId();
  let currentTeam = currentTeams[currentTeamId];

  // Fallback if saved team doesn't exist in current game
  if (!currentTeam) {
    const firstTeamId = Object.keys(currentTeams)[0];
    currentTeam = currentTeams[firstTeamId];
    saveTeamId(firstTeamId); // Update storage
  }

  // Get teams for current category
  const teamsByCategory = Object.values(currentTeams).filter(t => t.category === currentCategoryId);

  return `
    <div class="team-selector-container">
      <h2 style="margin-bottom: 1.5rem; text-align: center;">🎮 Elige tu Estilo de Juego</h2>
      
      <!-- Category Tabs -->
      <div class="category-tabs">
        ${currentCategories.map(category => `
          <button 
            class="category-tab ${category.id === currentCategoryId ? 'active' : ''}"
            data-category-id="${category.id}"
            onclick="handleCategoryChange('${category.id}')"
          >
            ${category.icon} ${category.name}
          </button>
        `).join('')}
      </div>

      <!-- Team Selection Pills -->
      <div class="team-pills-container">
        ${teamsByCategory.map(t => `
          <button
            class="team-pill ${t.id === currentTeamId ? 'active' : ''}"
            data-team-id="${t.id}"
            onclick="handleTeamChange('${t.id}')"
            title="${t.description}"
          >
            ${t.name}
          </button>
        `).join('')}
      </div>

      <!-- Team Description -->
      <div class="team-description">
        <p>${currentTeam.description}</p>
      </div>
    </div>
  `;
}

function renderTeamPokemon(currentTeam) {
  return `
    <div class="team-grid">
      ${currentTeam.pokemon.map(pokemon => `
        <div class="pokemon-card">
          <div class="card-header">
            <span class="poke-name">${pokemon.name}</span>
            <div class="poke-types">
              ${pokemon.types.map(type => `<span class="type-${type.toLowerCase()}">${translateType(type)}</span>`).join('')}
            </div>
          </div>
          <div class="poke-img-container">
            <img src="${pokemon.image}" alt="${pokemon.name}" class="poke-img">
          </div>
          <div class="poke-details">
            <div class="detail-row">
              <span class="detail-label">Rol</span>
              <span>${pokemon.role}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Objeto</span>
              <span>${pokemon.item}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Naturaleza</span>
              <span>${pokemon.nature}</span>
            </div>
          </div>
          <div class="moves-list">
            ${pokemon.moves.map(move => {
    const moveInfo = moveData[move.name] || { type: move.type, category: move.category, desc: 'Movimiento desconocido', power: null, accuracy: 100 };
    const categoryIcon = getCategoryIcon(moveInfo.category);
    const powerText = moveInfo.power ? `Potencia: ${moveInfo.power}` : 'Sin potencia';
    const accuracyText = moveInfo.accuracy ? `Precisión: ${moveInfo.accuracy}%` : 'Precisión: 100%';
    return `
                <div class="move-wrapper">
                  <div class="move-tag">
                    <span class="move-type-indicator type-${moveInfo.type.toLowerCase()}">${moveInfo.type.substring(0, 3).toUpperCase()}</span>
                    <span style="font-weight:bold; flex:1;">${move.name}</span>
                  </div>
                  <div class="move-tooltip">
                    <div class="tooltip-header">
                      <span class="tooltip-name">${move.name}</span>
                      <span class="tooltip-type type-pill type-${moveInfo.type.toLowerCase()}">${moveInfo.type}</span>
                    </div>
                    <div class="tooltip-category">${categoryIcon} ${moveInfo.category} · ${powerText} · ${accuracyText}</div>
                    <p class="tooltip-desc">${moveInfo.desc}</p>
                  </div>
                </div>
              `;
  }).join('')}
          </div>
          <div style="margin-top:1rem; font-size:0.85rem; color:var(--text-secondary); text-align:center;">
             📍 ${pokemon.location}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function renderTeamView() {
  const container = document.getElementById('team');
  if (!container) return;

  const { teams: currentTeams } = getCurrentTeamsData();
  const currentTeamId = getSavedTeamId();
  const currentTeam = currentTeams[currentTeamId];

  container.innerHTML = `
    ${renderTeamSelector()}
    <div style="margin-top: 2rem;">
      ${renderTeamPokemon(currentTeam)}
    </div>
  `;

  // Attach event handlers
  attachTeamViewHandlers();
}

function attachTeamViewHandlers() {
  // Expose handlers to global scope for onclick attributes
  window.handleCategoryChange = function (categoryId) {
    saveCategoryId(categoryId);
    renderTeamView();
  };

  window.handleTeamChange = function (teamId) {
    saveTeamId(teamId);
    renderTeamView();
  };
}
