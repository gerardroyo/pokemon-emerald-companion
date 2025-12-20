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
         <div class="recommendation-card" style="border-left: 3px solid ${getCategoryColor(item.category)}">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.img}.png" 
                 onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'"
                 style="width:48px; height:48px; image-rendering:pixelated; flex-shrink:0;">
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <h4 style="color:var(--text-main); margin-bottom:0.15rem; font-size:1rem;">${item.name}</h4>
                  <span class="type-pill" style="font-size:0.65rem; background:rgba(255,255,255,0.1); padding:2px 8px;">${item.category}</span>
              </div>
              <p style="font-size:0.85rem; color:var(--primary-color); margin-bottom:0.25rem;">📍 ${item.loc}</p>
              <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.4;">${item.desc}</p>
            </div>
         </div>
      `).join('');

    if (items.length === 0) {
      container.innerHTML = `<p style="text-align:center; color:var(--text-muted); width:100%; padding:2rem;">No se encontraron objetos.</p>`;
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

  // Badge images
  const badgeImages = {
    // Emerald
    "Medalla Piedra": "/pokemon-emerald-companion/badges/stone_badge.png",
    "Medalla Puño": "/pokemon-emerald-companion/badges/knuckle_badge.png",
    "Medalla Dinamo": "/pokemon-emerald-companion/badges/dynamo_badge.png",
    "Medalla Calor": "/pokemon-emerald-companion/badges/heat_badge.png",
    "Medalla Equilibrio": "/pokemon-emerald-companion/badges/balance_badge.png",
    "Medalla Pluma": "/pokemon-emerald-companion/badges/feather_badge.png",
    "Medalla Mente": "/pokemon-emerald-companion/badges/mind_badge.png",
    "Medalla Lluvia": "/pokemon-emerald-companion/badges/rain_badge.png",
    // Platinum
    "Medalla Lignito": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/25.png",
    "Medalla Bosque": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/26.png",
    "Medalla Cobalto": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/27.png",
    "Medalla Ciénaga": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/28.png",
    "Medalla Reliquia": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/29.png",
    "Medalla Mina": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/30.png",
    "Medalla Glaciar": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/31.png",
    "Medalla Faro": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/badges/32.png"
  };

  const renderPokemonTeam = (pokemon) => {
    return `
      <div class="leader-team">
        ${pokemon.map(p => `
          <div class="leader-poke-card">
            <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom: 0.75rem;">
                <img src="${pokeSpriteBase}${p.id}.png" class="leader-poke-img" alt="${p.name}">
                <div style="flex:1;">
                    <div class="leader-poke-name">${p.name}</div>
                    <div class="leader-poke-lvl">Nv. ${p.level}</div>
                    <div style="display:flex; gap:0.25rem; flex-wrap:wrap; margin-top:0.25rem;">
                      ${p.types.map(t => `<span class="type-pill type-${t.toLowerCase()}" style="font-size:0.6rem; padding:2px 6px;">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="moves-section">
              <div class="moves-label">⚔️ Movimientos</div>
              <div class="leader-moves">
                ${p.moves.map(m => {
      const data = moveData[m] || { type: 'Normal', category: 'Físico', desc: 'Ataque normal.', power: null, accuracy: 100 };
      const categoryIcon = getCategoryIcon(data.category);
      const isStab = p.types.includes(data.type);

      return `
                    <div class="move-wrapper">
                      <span class="leader-move-tag" style="${isStab ? 'border-color:var(--primary-color); background:rgba(var(--primary-rgb),0.15);' : ''}">
                         ${m}
                      </span>
                      <div class="move-tooltip">
                        <div class="tooltip-header">
                          <span class="tooltip-name">${m}</span>
                          <span class="type-pill type-${data.type.toLowerCase()}">${data.type}</span>
                        </div>
                        <div class="tooltip-category">${categoryIcon} ${data.category} · Pot: ${data.power || '-'} · Pre: ${data.accuracy || '-'}%</div>
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
    // Esmeralda
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
    "Nívea": "glacia-gen3.png",
    "Dracón": "drake-gen3.png",
    "Plubio": "wallace-gen3.png",
    // Platino
    "Roco": "roark.png",
    "Gardenia": "gardenia.png",
    "Fantina": "fantina.png",
    "Brega": "maylene.png",
    "Mananti": "crasherwake.png",
    "Acerón": "byron.png",
    "Inverna": "candice.png",
    "Lectro": "volkner.png",
    "Alecrán": "aaron.png",
    "Gaia": "bertha.png",
    "Fausto": "flint.png",
    "Delos": "lucian.png",
    "Cintia": "cynthia.png"
  };

  // Update HTML Container
  container.innerHTML = `
    <h2>Guía de Aventura</h2>
    
    <div class="guide-tabs">
      <div class="guide-tab active" data-tab="gyms">Líderes</div>
      <div class="guide-tab" data-tab="e4">Alto Mando</div>
      <div class="guide-tab" data-tab="items">MOs y MTs</div>
      <div class="guide-tab" data-tab="held">Objetos</div>
      <div class="guide-tab" id="scanner-btn" style="border-color:var(--primary-glow); color:var(--primary-glow);">💾 Scanner</div>
    </div>

    <!-- GYMS GRID LAYOUT -->
    <div id="tab-gyms" class="tab-content" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap:2rem;">
       ${currentGymLeaders.map((g, i) => `
         <div class="emulator-box" style="display:flex; flex-direction:column; height:100%;">
             <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--glass-border); position: relative; z-index: 2;">
              <div style="position:relative;">
                 <img src="${spriteBase}${trainerImages[g.name]}" style="height:100px; filter:drop-shadow(0 4px 10px rgba(0,0,0,0.5)); transform: scale(1.1);">
              </div>
              <div style="flex:1;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h3 style="margin:0; font-size: 1.5rem; text-align:left;">${g.name}</h3>
                    <span style="font-size:3rem; font-weight:800; color:rgba(255,255,255,0.03); line-height:0;">${i + 1}</span>
                </div>
                <div style="color:var(--text-secondary); font-size:0.9rem; margin-bottom:0.5rem;">${g.city}</div>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                  <span class="type-pill type-${g.type.toLowerCase()}">${g.type}</span>
                  ${g.badge ? `
                  <div style="display:flex; align-items:center; gap:0.4rem; background:rgba(0,0,0,0.2); padding:2px 8px; border-radius:100px;">
                    <img src="${badgeImages[g.badge]}" alt="${g.badge}" style="width:24px; height:24px;">
                    <span style="color:var(--ray-yellow); font-size:0.8rem; font-weight:600;">${g.badge}</span>
                  </div>` : ''}
                </div>
              </div>
            </div>
            
            <!-- Strategy Popover/Text -->
            <div style="background:rgba(var(--primary-rgb), 0.05); border:1px solid rgba(var(--primary-rgb), 0.1); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
                <p style="font-size:0.9rem; color:var(--text-main); line-height: 1.5; font-style:italic;">"${g.strategy}"</p>
            </div>

            ${renderPokemonTeam(g.pokemon)}
         </div>
       `).join('')}
    </div>

    <!-- ELITE FOUR LAYOUT -->
    <div id="tab-e4" class="tab-content hidden" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); gap:2rem;">
       ${currentEliteFour.map((e, i) => `
         <div class="emulator-box" style="border-color:${i === currentEliteFour.length - 1 ? 'var(--ray-yellow)' : 'var(--glass-border)'};">
             <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid var(--glass-border); position: relative; z-index: 2;">
              <img src="${spriteBase}${trainerImages[e.name]}" style="height:100px; filter:drop-shadow(0 4px 10px rgba(0,0,0,0.5));">
              <div>
                <h3 style="margin:0; font-size: 1.5rem; text-align:left; color:${i === currentEliteFour.length - 1 ? 'var(--ray-yellow)' : 'white'};">
                    ${i === currentEliteFour.length - 1 ? 'CAMPEÓN ' : ''}${e.name}
                </h3>
                <span class="type-pill type-${e.type.toLowerCase().includes('/') ? 'water' : e.type.toLowerCase()}" style="margin-top:0.5rem; display:inline-block;">${e.type}</span>
              </div>
            </div>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:1.5rem; padding:1rem; background:rgba(255,255,255,0.03); border-radius:12px; font-style:italic; position: relative; z-index: 2;">
                ${e.strategy}
            </p>
            ${renderPokemonTeam(e.pokemon)}
         </div>
       `).join('')}
    </div>

    <!-- MOs / MTs -->
    <div id="tab-items" class="tab-content hidden">
       <div class="emulator-box" style="margin-bottom:2rem;">
        <h3 style="margin-bottom:1.5rem;">💿 Máquinas Ocultas (MO)</h3>
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:1rem;">
          ${hms.map(hm => `
            <div class="recommendation-card" style="margin:0; cursor:default; border-left:3px solid var(--primary-color);">
              <div style="background:var(--primary-color); color:black; font-weight:bold; width:32px; height:32px; display:flex; align-items:center; justify-content:center; border-radius:8px;">HM</div>
              <div>
                  <div style="color:var(--text-main); font-weight:700; font-size:1rem;">${hm.name}</div>
                  <div style="font-size:0.85rem; color:var(--text-muted);">📍 ${hm.location}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="emulator-box">
        <h3 style="margin-bottom:1.5rem;">💿 Máquinas Técnicas (MT) Importantes</h3>
         <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:1rem;">
          ${tms.map(tm => `
            <div class="recommendation-card" style="margin:0; cursor:default; border-left:3px solid var(--ray-yellow);">
              <div style="background:var(--ray-yellow); color:black; font-weight:bold; width:32px; height:32px; display:flex; align-items:center; justify-content:center; border-radius:8px;">TM</div>
              <div>
                  <div style="color:var(--text-main); font-weight:700; font-size:1rem;">${tm.name}</div>
                  <div style="font-size:0.85rem; color:var(--text-muted);">📍 ${tm.location}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- ITEM DEX (SEARCHABLE) -->
    <div id="tab-held" class="tab-content hidden">
       <div style="max-width:600px; margin:0 auto 2rem auto; position:relative;">
          <input type="text" id="item-search" class="search-input" placeholder="Buscar objeto..." style="padding-left: 3.5rem; height:3.5rem; font-size:1.2rem;">
          <span style="position:absolute; left:1.2rem; top:50%; transform:translateY(-50%); font-size:1.4rem; opacity:0.5;">🔍</span>
       </div>
       <div id="item-dex-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:1rem; padding-bottom:2rem;">
           <!-- Items Injected Here -->
       </div>
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
