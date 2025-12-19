import { hms, tms } from '../data/locations.js';
import { emeraldItemsList } from '../data/emerald_items.js';
import { renderSaveScanner } from './SaveScanner.js';
import { gymLeaders, eliteFour } from '../data/gym_leaders.js';
import { platino_gymLeaders, platino_eliteFour } from '../data/platino_gym_leaders.js';
import { moveData, getCategoryIcon } from '../data/move_types.js';
import { getSelectedGame, GAMES } from '../data/gameManager.js';

export function renderGuide() {
  const container = document.getElementById('guide');
  if (!container) return;

  // Get the correct gym leaders based on game version
  const game = getSelectedGame();
  const currentGymLeaders = game === GAMES.PLATINUM ? platino_gymLeaders : gymLeaders;
  const currentEliteFour = game === GAMES.PLATINUM ? platino_eliteFour : eliteFour;

  const spriteBase = "https://play.pokemonshowdown.com/sprites/trainers/";
  const pokeSpriteBase = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  /* Full Item Dex Logic */
  const renderItemDex = (items) => {
    const container = document.getElementById('item-dex-container');
    if (!container) return;

    container.innerHTML = items.map(item => `
         <div class="recommendation-card" style="display:flex; gap:1rem; align-items:center; background:rgba(255,255,255,0.03); border-left: 3px solid ${getCategoryColor(item.category)}">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.img}.png" 
                 onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'"
                 style="width:48px; height:48px; image-rendering:pixelated; flex-shrink:0;">
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <h4 style="color:#fff; margin-bottom:0.15rem; font-size:1rem;">${item.name}</h4>
                  <span class="type-pill" style="font-size:0.65rem; background:rgba(255,255,255,0.1); padding:2px 6px;">${item.category}</span>
              </div>
              <p style="font-size:0.85rem; color:var(--ray-green); margin-bottom:0.25rem;">📍 ${item.loc}</p>
              <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.3;"><em>${item.desc}</em></p>
            </div>
         </div>
      `).join('');

    if (items.length === 0) {
      container.innerHTML = `<p style="text-align:center; color:#666; width:100%; padding:2rem;">No se encontraron objetos.</p>`;
    }
  };

  function getCategoryColor(cat) {
    if (cat === 'Evolución') return '#f0932b';
    if (cat === 'Combate') return '#eb4d4b';
    if (cat === 'Utilidad') return '#48dbfb';
    if (cat === 'Clave') return '#f1c40f';
    if (cat === 'Baya') return '#7bed9f';
    if (cat === 'Concurso') return '#ff6b81';
    return '#ccc';
  }

  // Badge images from local files (downloaded from Bulbagarden Archives)
  const badgeImages = {
    "Medalla Piedra": "/pokemon-emerald-companion/badges/stone_badge.png",
    "Medalla Puño": "/pokemon-emerald-companion/badges/knuckle_badge.png",
    "Medalla Dinamo": "/pokemon-emerald-companion/badges/dynamo_badge.png",
    "Medalla Calor": "/pokemon-emerald-companion/badges/heat_badge.png",
    "Medalla Equilibrio": "/pokemon-emerald-companion/badges/balance_badge.png",
    "Medalla Pluma": "/pokemon-emerald-companion/badges/feather_badge.png",
    "Medalla Mente": "/pokemon-emerald-companion/badges/mind_badge.png",
    "Medalla Lluvia": "/pokemon-emerald-companion/badges/rain_badge.png"
  };

  const renderPokemonTeam = (pokemon) => {
    return `
      <div class="leader-team">
        ${pokemon.map(p => `
          <div class="leader-poke-card">
            <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom: 0.75rem;">
                <img src="${pokeSpriteBase}${p.id}.png" class="leader-poke-img" alt="${p.name}" style="width:80px; height:80px;">
                <div style="text-align:left; flex:1;">
                    <div class="leader-poke-name">${p.name}</div>
                    <div class="leader-poke-lvl">Nv. ${p.level}</div>
                    <div style="display:flex; gap:0.25rem; flex-wrap:wrap; margin-top:0.25rem;">
                      ${p.types.map(t => `<span class="type-pill type-${t.toLowerCase()}" style="font-size:0.6rem; padding:2px 6px;">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            <div class="moves-section">
              <div class="moves-label">⚔️ Movimientos:</div>
              <div class="leader-moves">
                ${p.moves.map(m => {
      const data = moveData[m] || { type: 'Normal', category: 'Físico', desc: 'Ataque normal.', power: null, accuracy: 100 };
      const categoryIcon = getCategoryIcon(data.category);
      const powerText = data.power ? `Potencia: ${data.power}` : 'Sin potencia';
      const accuracyText = data.accuracy ? `Precisión: ${data.accuracy}%` : 'Precisión: 100%';
      return `
                    <div class="move-wrapper">
                      <span class="leader-move-tag">
                        <span class="move-type-indicator type-${data.type.toLowerCase()}">${data.type.substring(0, 3).toUpperCase()}</span>
                        ${m}
                      </span>
                      <div class="move-tooltip">
                        <div class="tooltip-header">
                          <span class="tooltip-name">${m}</span>
                          <span class="tooltip-type type-pill type-${data.type.toLowerCase()}">${data.type}</span>
                        </div>
                        <div class="tooltip-category">${categoryIcon} ${data.category} · ${powerText} · ${accuracyText}</div>
                        <p class="tooltip-desc">${data.desc}</p>
                      </div>
                    </div>
                  `;
    }).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  };


  const trainerImages = {
    "Petra": "roxanne-gen3.png",
    "Marcial": "brawly-gen3.png",
    "Erico": "wattson-gen3.png",
    "Candela": "flannery-gen3.png",
    "Norman": "norman-gen3.png",
    "Alana": "winona-gen3.png",
    "Vito y Leti": "tateandliza-gen3.png",
    "Juan": "juan-gen3.png",
    "Sixto": "sidney-gen3.png",
    "Fátima": "phoebe-gen3.png",
    "Glacia": "glacia-gen3.png",
    "Dracón": "drake-gen3.png",
    "Plubio": "wallace-gen3.png"
  };

  // Initial Render for Search Tab
  const searchHtml = `
    <div style="margin-bottom: 1.5rem; position:relative;">
        <input type="text" id="item-search" class="search-input" placeholder="Buscar objeto (ej: Restos, Fuego...)" 
               style="padding-left: 3rem;">
        <span style="position:absolute; left:1rem; top:50%; transform:translateY(-50%); font-size:1.2rem; opacity:0.7;">🔍</span>
    </div>
    <div id="item-dex-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1rem; max-height:60vh; overflow-y:auto; padding-right:0.5rem;">
        <!-- Items Injected Here -->
    </div>
  `;

  // Update HTML Container
  container.innerHTML = `
    <h2>Guía de Aventura</h2>
    
    <div class="guide-tabs">
      <div class="guide-tab active" data-tab="gyms">Líderes</div>
      <div class="guide-tab" data-tab="e4">Alto Mando</div>
      <div class="guide-tab" data-tab="items">MOs y MTs</div>
      <div class="guide-tab" data-tab="held">Objetos</div>
      <div class="guide-tab" id="scanner-btn" style="background:linear-gradient(135deg, #8e44ad, #2c3e50); color:#fff; border:1px solid rgba(255,255,255,0.3);">💾 Scanner .sav</div>
    </div>

    <!-- GYMS -->
    <div id="tab-gyms" class="tab-content" style="display:grid; grid-template-columns: 1fr; gap:1.5rem;">
       ${currentGymLeaders.map((g, i) => `
         <div class="emulator-box" style="display:block;">
            <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem;">
              <img src="${spriteBase}${trainerImages[g.name]}" style="height:90px; filter:drop-shadow(0 4px 4px rgba(0,0,0,0.5));">
              <div>
                <h3 style="margin-bottom:0.25rem; font-size: 1.4rem;">${i + 1}. ${g.name} <span style="font-size:0.7em; opacity:0.7;">(${g.city})</span></h3>
                <div style="display:flex; gap:0.8rem; align-items:center; margin-bottom:0.5rem;">
                  <span class="type-pill type-${g.type.toLowerCase()}">${g.type}</span>
                  <div style="display:flex; align-items:center; gap:0.4rem;">
                    <img src="${badgeImages[g.badge]}" alt="${g.badge}" style="width:36px; height:36px; image-rendering:auto; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.4));">
                    <span style="color:var(--ray-yellow); font-size:0.9rem; font-weight:bold;">${g.badge}</span>
                  </div>
                </div>
                <p style="font-size:0.85rem; color:var(--ray-green-glow); line-height: 1.4;"><em>Estrategia:</em> ${g.strategy}</p>
              </div>
            </div>
            ${renderPokemonTeam(g.pokemon)}
         </div>
       `).join('')}
    </div>

    <!-- ELITE FOUR -->
    <div id="tab-e4" class="tab-content hidden" style="display:grid; grid-template-columns: 1fr; gap:1.5rem;">
       ${currentEliteFour.map((e, i) => `
         <div class="emulator-box" style="display:block; border-color:${i === currentEliteFour.length - 1 ? 'var(--ray-yellow)' : 'var(--glass-border)'};">
            <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem;">
              <img src="${spriteBase}${trainerImages[e.name]}" style="height:90px; filter:drop-shadow(0 4px 4px rgba(0,0,0,0.5));">
              <div>
                <h3 style="margin-bottom:0.25rem; font-size: 1.4rem; color:${i === currentEliteFour.length - 1 ? 'var(--ray-yellow)' : 'white'};">${i === currentEliteFour.length - 1 ? 'CAMPEÓN: ' : ''}${e.name}</h3>
                <div style="display:flex; gap:0.5rem; align-items:center; margin-bottom:0.5rem;">
                  <span class="type-pill type-${e.type.toLowerCase().includes('/') ? 'water' : e.type.toLowerCase()}">${e.type}</span>
                </div>
                <p style="font-size:0.85rem; color:var(--ray-green-glow); line-height: 1.4;"><em>Estrategia:</em> ${e.strategy}</p>
              </div>
            </div>
            ${renderPokemonTeam(e.pokemon)}
         </div>
       `).join('')}
    </div>

    <!-- MOs / MTs -->
    <div id="tab-items" class="tab-content hidden">
       <div class="emulator-box">
        <h3>Ubicación de MOs</h3>
        <ul style="list-style: none; margin-top: 1rem; display:grid; gap:0.75rem;">
          ${hms.map(hm => {
    const safeItemUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hm-normal.png";
    return `
            <li style="padding: 0.75rem; background:rgba(255,255,255,0.03); border-radius:12px; display:flex; align-items:center; gap:1rem;">
              <img src="${safeItemUrl}" style="width:32px; height:32px; image-rendering:pixelated;">
              <div>
                  <span style="color: var(--ray-green); font-weight: bold; font-size:1rem;">${hm.name}</span><br>
                  <span style="font-size: 0.85em; color: #aaa;">📍 ${hm.location}</span>
              </div>
            </li>
          `}).join('')}
        </ul>
      </div>
      <div class="emulator-box" style="margin-top:1rem;">
        <h3>MTs Importantes</h3>
        <ul style="list-style: none; margin-top: 1rem; display:grid; gap:0.75rem;">
          ${tms.map(tm => {
      const tmUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-normal.png";
      return `
            <li style="padding: 0.75rem; background:rgba(255,255,255,0.03); border-radius:12px; display:flex; align-items:center; gap:1rem;">
              <img src="${tmUrl}" style="width:32px; height:32px; image-rendering:pixelated;">
              <div>
                  <span style="color: #f7cf52; font-weight: bold; font-size:1rem;">${tm.name}</span><br>
                  <span style="font-size: 0.85em; color: #aaa;">📍 ${tm.location}</span>
              </div>
            </li>
          `}).join('')}
        </ul>
      </div>
    </div>

    <!-- ITEM DEX (SEARCHABLE) -->
    <div id="tab-held" class="tab-content hidden">
       ${searchHtml}
    </div>

    <!-- SAVE SCANNER -->
    <div id="tab-scanner" class="tab-content hidden">
        <div id="save-scanner-root"></div>
    </div>
  `;

  // Initialize Search Listener
  const searchInput = document.getElementById('item-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = emeraldItemsList.filter(i =>
        i.name.toLowerCase().includes(term) ||
        i.category.toLowerCase().includes(term) ||
        i.desc.toLowerCase().includes(term) ||
        i.loc.toLowerCase().includes(term)
      );
      renderItemDex(filtered);
    });
    renderItemDex(emeraldItemsList);
  }

  // Tabs Logic
  const tabs = document.querySelectorAll('.guide-tab');
  const content = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.id === 'scanner-btn') {
        tabs.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));
        tab.classList.add('active');
        document.getElementById('tab-scanner').classList.remove('hidden');
        renderSaveScanner();
        return;
      }

      tabs.forEach(t => t.classList.remove('active'));
      content.forEach(c => c.classList.add('hidden'));

      tab.classList.add('active');
      document.getElementById(`tab-${tab.dataset.tab}`).classList.remove('hidden');
    });
  });
}
