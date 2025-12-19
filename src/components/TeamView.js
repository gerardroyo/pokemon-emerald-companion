import { team } from '../data/team.js';
import { translateType } from '../data/translations.js';

export function renderTeamView() {
  const container = document.getElementById('team');
  if (!container) return;

  container.innerHTML = `
    <h2 style="margin-bottom: 2rem; text-align: center;">Equipo Recomendado</h2>
    <div class="team-grid">
      ${team.map(pokemon => `
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
            ${pokemon.moves.map(move => `
              <div class="move-tag">
                <div style="font-weight:bold;">${move.name}</div>
                <div style="font-size:0.7em; opacity:0.7;">${translateType(move.type)}</div>
              </div>
            `).join('')}
          </div>
          <div style="margin-top:1rem; font-size:0.85rem; color:var(--text-secondary); text-align:center;">
             📍 ${pokemon.location}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
