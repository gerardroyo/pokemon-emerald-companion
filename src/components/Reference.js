import { naturesLocalized } from '../data/natures.js';

export function renderReference() {
  const container = document.getElementById('reference');
  if (!container) return;

  container.innerHTML = `
    <h2>Referencia de Mecánicas</h2>
    
    <div class="calculator-container" style="max-width:1200px;">
      
      <!-- Search -->
      <div style="max-width:600px; margin:0 auto 2rem auto; position:relative;">
        <input type="text" id="ref-search" class="search-input" placeholder="Buscar naturaleza..." style="padding-left: 3.5rem; height:3.5rem; font-size:1.2rem;">
        <span style="position:absolute; left:1.2rem; top:50%; transform:translateY(-50%); font-size:1.4rem; opacity:0.5;">🔍</span>
      </div>

      <!-- Natures Grid -->
      <div class="emulator-box" style="margin-bottom:2rem;">
        <h3 style="margin-bottom:1.5rem;">Naturalezas</h3>
        <div id="natures-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 1rem;">
          <!-- JS Populated -->
        </div>
      </div>

      <!-- Catch Rate Info -->
      <div class="guide-card">
        <h3 style="margin-bottom:1.5rem;">Ratios de Captura (Fórmula Simplificada)</h3>
        
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.5rem;">
           <div style="background:rgba(255,255,255,0.03); padding:1rem; border-radius:12px; border:1px solid var(--glass-border);">
              <h4 style="color:var(--ray-red); margin-bottom:0.5rem; font-size:1.1rem;">❤️ 1. Vida (HP)</h4>
              <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5;">Bajar la vida es lo más efectivo. En rojo (1 HP), el ratio de captura se multiplica hasta por <strong>x3</strong>.</p>
           </div>
           
           <div style="background:rgba(255,255,255,0.03); padding:1rem; border-radius:12px; border:1px solid var(--glass-border);">
              <h4 style="color:var(--ray-yellow); margin-bottom:0.5rem; font-size:1.1rem;">💤 2. Estados</h4>
              <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5;">
                <strong style="color:var(--text-main)">Dormir / Congelar:</strong> x2 (Lo mejor)<br>
                <strong style="color:var(--text-main)">Parálisis / Veneno / Quemado:</strong> x1.5
              </p>
           </div>
           
           <div style="background:rgba(255,255,255,0.03); padding:1rem; border-radius:12px; border:1px solid var(--glass-border);">
              <h4 style="color:var(--primary-color); margin-bottom:0.5rem; font-size:1.1rem;">🏐 3. Pokéball</h4>
              <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.5;">
                <strong style="color:var(--text-main)">Ultra Ball:</strong> x2<br>
                <strong style="color:var(--text-main)">Malla Ball / Buceo Ball:</strong> x3 (En condiciones específicas)<br>
                <strong style="color:var(--text-main)">Turno Ball:</strong> x4 (Tras turno 30)
              </p>
           </div>
        </div>

        <div style="margin-top:1.5rem; background:rgba(var(--primary-rgb),0.1); padding:1rem; border-radius:12px; border-left:3px solid var(--primary-color);">
            <p style="font-size:0.95rem; color:var(--text-main); margin:0;">
                <span style="font-size:1.2rem; margin-right:0.5rem;">💡</span>
                <strong>Pro Tip:</strong> Usa a <strong>Breloom</strong> con <em>Espora</em> (100% Sueño) y <em>Falsotortazo</em> (Deja a 1 HP) para garantizar capturas.
            </p>
        </div>
      </div>
    </div>
  `;

  const grid = document.getElementById('natures-grid');
  const input = document.getElementById('ref-search');

  function renderGrid(filter = "") {
    const f = filter.toLowerCase();
    const filtered = naturesLocalized.filter(n => n.name.toLowerCase().includes(f));

    if (filtered.length === 0) {
      grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No se encontraron naturalezas.</p>`;
      return;
    }

    grid.innerHTML = filtered.map(nat => {
      const isNeutral = nat.plus === '-' && nat.minus === '-';
      return `
            <div class="interactive-card" style="
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 16px;
                padding: 1.25rem 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                cursor: default;
            ">
               
               <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: ${isNeutral ? 'var(--text-muted)' : 'var(--text-main)'}; font-weight:700;">${nat.name}</h4>
               
               ${isNeutral
          ? '<span style="color: var(--text-muted); font-size: 0.85rem; padding: 0.25rem 0.75rem; background:rgba(255,255,255,0.05); border-radius:100px;">Neutra</span>'
          : `
                   <div style="width:100%; display:flex; flex-direction:column; gap:0.4rem; font-size:0.85rem;">
                     <div style="color: var(--primary-glow); display:flex; justify-content:space-between; width:100%;">
                        <span>▲ Sube</span> <strong>${nat.plus}</strong>
                     </div>
                     <div style="color: var(--ray-red); display:flex; justify-content:space-between; width:100%;">
                        <span>▼ Baja</span> <strong>${nat.minus}</strong>
                     </div>
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
