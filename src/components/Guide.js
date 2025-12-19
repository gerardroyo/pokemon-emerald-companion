import { hms, tms } from '../data/locations.js';
import { emeraldItemsList } from '../data/emerald_items.js';
import { renderSaveScanner } from './SaveScanner.js';

export function renderGuide() {
  const container = document.getElementById('guide');
  if (!container) return;

  const spriteBase = "https://play.pokemonshowdown.com/sprites/trainers/";

  const gyms = [
    { name: "Petra", type: "Roca", img: "roxanne-gen3.png", team: "Nv 14 Geodude, Nv 15 Nosepass.", strat: "Agua o Planta (Mudkip/Treecko/Lotad/Shroomish)." },
    { name: "Marcial", type: "Lucha", img: "brawly-gen3.png", team: "Nv 16 Machop, Nv 19 Makuhita.", strat: "Volador (Taillow/Wingull) o Psíquico (Ralts)." },
    { name: "Erico", type: "Eléctrico", img: "wattson-gen3.png", team: "Nv 20 Voltorb, Nv 20 Electrike, Nv 22 Magneton, Nv 24 Manectric.", strat: "Tierra (Marshtomp/Geodude). Cuidado con Magneton (Acero)." },
    { name: "Candela", type: "Fuego", img: "flannery-gen3.png", team: "Nv 24 Numel, Nv 24 Slugma, Nv 26 Camerupt, Nv 29 Torkoal.", strat: "Agua (Marshtomp/Tentacool/Gyarados)." },
    { name: "Norman", type: "Normal", img: "norman-gen3.png", team: "Nv 27 Spinda, Nv 27 Vigoroth, Nv 29 Linoone, Nv 31 Slaking.", strat: "Lucha (Breloom). Usa Protección/Excavar contra Slaking." },
    { name: "Alana", type: "Volador", img: "winona-gen3.png", team: "Nv 29 Swablu, Nv 29 Tropius, Nv 30 Pelipper, Nv 31 Skarmory, Nv 33 Altaria.", strat: "Rayo Hielo. Electricidad para todo menos Altaria." },
    { name: "Vito y Leti", type: "Psíquico", img: "tateandliza-gen3.png", team: "Nv 41 Claydol, Nv 41 Xatu, Nv 42 Lunatone, Nv 42 Solrock.", strat: "Surf (Swampert) golpea a ambos. Siniestro o Fantasma." },
    { name: "Galano", type: "Agua", img: "juan-gen3.png", team: "Nv 41 Luvdisc, Nv 41 Whiscash, Nv 43 Sealeo, Nv 43 Crawdaunt, Nv 46 Kingdra.", strat: "Planta y Electricidad. Kingdra necesita daño neutro fuerte." }
  ];

  const eliteFour = [
    { name: "Sixto", type: "Siniestro", img: "sidney-gen3.png", team: "Mightyena (46), Shiftry (48), Cacturne (46), Crawdaunt (48), Absol (49).", strat: "Lucha (Breloom/Hariyama) barre casi todo. Fuego o Volador para Shiftry/Cacturne." },
    { name: "Fátima", type: "Fantasma", img: "phoebe-gen3.png", team: "Dusclops (48), Banette (49), Sableye (50), Banette (49), Dusclops (51).", strat: "Siniestro (Absol/Mightyena) o Fantasma. Sableye solo tiene debilidad a Hada (no existe en Gen 3), usa fuerza bruta." },
    { name: "Nívea", type: "Hielo", img: "glacia-gen3.png", team: "Sealeo (50), Glalie (50), Sealeo (52), Glalie (52), Walrein (53).", strat: "Lucha (Breloom) y Electricidad (Manectric). Walrein es muy tanque, cuidado con Frío Polar." },
    { name: "Dracón", type: "Dragón", img: "drake-gen3.png", team: "Shelgon (52), Altaria (54), Kingdra (53), Flygon (53), Salamence (55).", strat: "Rayo Hielo es obligatorio (x4 a casi todos). Kingdra es débil a Dragón." },
    { name: "Plubio", type: "Campeón (Agua)", img: "wallace-gen3.png", team: "Wailord (57), Tentacruel (55), Ludicolo (56), Whiscash (56), Gyarados (56), Milotic (58).", strat: "Planta para Whiscash/Wailord. Electricidad para Gyarados/Tentacruel/Milotic. Volador para Ludicolo." }
  ];

  /* New Data for Held Items */

  // Placeholder for emeraldItems data. This array should contain all items with name, loc, img, desc, and category.
  // Example structure: { name: "Restos", loc: "S.S. Tidal (Sótano)", img: "leftovers", desc: "Recupera PS cada turno.", category: "Utilidad" }
  // Data imported from ../data/emerald_items.js

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
    if (cat === 'Evolución') return '#f0932b'; // Orange
    if (cat === 'Combate') return '#eb4d4b'; // Red
    if (cat === 'Utilidad') return '#48dbfb'; // Blue
    if (cat === 'Clave') return '#f1c40f'; // Yellow
    if (cat === 'Baya') return '#7bed9f'; // Greenish
    if (cat === 'Concurso') return '#ff6b81'; // Pinkish
    return '#ccc';
  }

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
    <div id="tab-gyms" class="tab-content" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1rem;">
       ${gyms.map((g, i) => `
         <div class="emulator-box" style="display:flex; gap:1rem; align-items:center;">
            <img src="${spriteBase}${g.img}" style="height:90px; filter:drop-shadow(0 4px 4px rgba(0,0,0,0.5));">
            <div>
              <h3 style="margin-bottom:0.25rem;">${i + 1}. ${g.name} <span style="font-size:0.8em; opacity:0.7;">(${g.type})</span></h3>
              <p class="pixel-text" style="font-size:0.85rem; margin-bottom:0.5rem; color:#ccc;">${g.team}</p>
              <p style="font-size:0.85rem; color:var(--ray-green-glow);"><em>Estrategia:</em> ${g.strat}</p>
            </div>
         </div>
       `).join('')}
    </div>

    <!-- ELITE FOUR -->
    <div id="tab-e4" class="tab-content hidden" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1rem;">
       ${eliteFour.map((e, i) => `
         <div class="emulator-box" style="display:flex; gap:1rem; align-items:center; border-color:${i === 4 ? 'var(--ray-yellow)' : 'var(--glass-border)'};">
            <img src="${spriteBase}${e.img}" style="height:90px; filter:drop-shadow(0 4px 4px rgba(0,0,0,0.5));">
            <div>
              <h3 style="margin-bottom:0.25rem; color:${i === 4 ? 'var(--ray-yellow)' : 'white'};">${e.name} <span style="font-size:0.8em; opacity:0.7;">(${e.type})</span></h3>
              <p class="pixel-text" style="font-size:0.85rem; margin-bottom:0.5rem; color:#ccc;">${e.team}</p>
              <p style="font-size:0.85rem; color:var(--ray-green-glow);"><em>Estrategia:</em> ${e.strat}</p>
            </div>
         </div>
       `).join('')}
    </div>

    <!-- MOs / MTs -->
    <div id="tab-items" class="tab-content hidden">
       <div class="emulator-box">
        <h3>Ubicación de MOs</h3>
        <ul style="list-style: none; margin-top: 1rem; display:grid; gap:0.75rem;">
          ${hms.map(hm => {
    // Simple type inference for color/icon
    let type = 'normal';
    if (hm.name.includes('Surf') || hm.name.includes('Cascada') || hm.name.includes('Buceo')) type = 'water';
    if (hm.name.includes('Vuelo')) type = 'flying';
    if (hm.name.includes('Golpe Roca') || hm.name.includes('Fuerza')) type = 'fighting';
    if (hm.name.includes('Corte')) type = 'grass';
    if (hm.name.includes('Destello')) type = 'electric';

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
    // Initial render of all items
    renderItemDex(emeraldItemsList);
  }

  // Tabs Logic
  const tabs = document.querySelectorAll('.guide-tab');
  const content = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Scanner Logic
      if (tab.id === 'scanner-btn') {
        tabs.forEach(t => t.classList.remove('active'));
        content.forEach(c => c.classList.add('hidden'));

        tab.classList.add('active');
        // We reuse the held-items container or create a new one dynamically if needed, 
        // but ideally we should have a dedicated div in the HTML above.
        // Let's modify the HTML injection to include a scanner tab content.
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
