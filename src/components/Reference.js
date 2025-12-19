import { naturesLocalized } from '../data/natures.js';

export function renderReference() {
  const container = document.getElementById('reference');
  if (!container) return;

  container.innerHTML = `
    <h2>Referencia de Mecánicas</h2>
    
    <div class="calculator-container">
      <div style="margin-bottom:1.5rem; position:relative;">
        <input type="text" id="ref-search" class="search-input" placeholder="Buscar naturaleza (ej. Firme, Miedosa...)" style="padding-left: 3rem;">
        <span style="position:absolute; left:1rem; top:50%; transform:translateY(-50%); font-size:1.2rem; opacity:0.7;">🔍</span>
      </div>

      <div class="emulator-box" style="background: transparent; border: none; padding: 0;">
        <div id="natures-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 1rem;">
          <!-- JS Populated -->
        </div>
      </div>

      <div class="guide-card" style="margin-top: 2rem;">
        <h3>Ratios de Captura (Fórmula Simplificada)</h3>
        <p style="margin-top: 1rem; color: #ccc; font-size: 0.9rem; line-height: 1.6;">
          1. <strong style="color:var(--ray-green)">Baja la vida:</strong> Cuanto menos HP tenga, mejor (Rojo es x3).<br>
          2. <strong style="color:var(--ray-green)">Estado:</strong> Dormir (Sleep) o Congelar (Freeze) multiplica x2. Parálisis/Veneno/Quemado x1.5.<br>
          3. <strong style="color:var(--ray-green)">Pokéball:</strong> Ultra Ball es x2. Net Ball (Agua/Bicho) es x3.
          <br><br>
          <em style="color:var(--ray-green-glow)">Tip: Usa a Breloom con Espora (Spore) para dormir al 100% de precisión y Falsotortazo (False Swipe).</em>
        </p>
      </div>
    </div>
  `;

  const grid = document.getElementById('natures-grid');
  const input = document.getElementById('ref-search');

  function renderGrid(filter = "") {
    const f = filter.toLowerCase();
    const filtered = naturesLocalized.filter(n => n.name.toLowerCase().includes(f));

    if (filtered.length === 0) {
      grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666;">No se encontraron naturalezas.</p>`;
      return;
    }

    grid.innerHTML = filtered.map(nat => {
      const isNeutral = nat.plus === '-' && nat.minus === '-';
      return `
            <div style="
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                transition: transform 0.2s;
                position: relative;
                overflow: hidden;
            " onmouseover="this.style.transform='translateY(-2px)'; this.style.borderColor='var(--ray-green)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255, 255, 255, 0.1)'">
               
               ${isNeutral ? '<div style="position:absolute; inset:0; background:rgba(255,255,255,0.02); pointer-events:none;"></div>' : ''}

               <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: #fff;">${nat.name.split(' (')[0]}</h4>
               <span style="font-size: 0.75rem; color: #666; margin-bottom: 0.5rem;">${nat.name.split(' (')[1].replace(')', '')}</span>
               
               <div style="width: 100%; border-top: 1px solid rgba(255,255,255,0.1); margin: 0.5rem 0;"></div>

               ${isNeutral
          ? '<span style="color: #888; font-size: 0.85rem;">Neutra</span>'
          : `
                   <div style="display:flex; width:100%; justify-content:space-between; font-size:0.8rem;">
                     <span style="color: #4cd137;">▲ ${nat.plus}</span>
                     <span style="color: #e84118;">▼ ${nat.minus}</span>
                   </div>
                 `
        }
            </div>
        `;
    }).join('');
  }

  renderGrid();

  input.addEventListener('input', (e) => {
    renderGrid(e.target.value);
  });
}
