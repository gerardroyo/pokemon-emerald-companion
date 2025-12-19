import { SaveParser } from '../utils/SaveParser.js';

export function renderSaveScanner() {
    const container = document.getElementById('save-scanner-root');
    if (!container) return;

    container.innerHTML = `
    <div style="text-align:center; padding: 2rem; animation: fadeIn 0.5s;">
      <h2 style="color:var(--ray-yellow); text-shadow:0 0 10px var(--ray-green);">Escáner de Partida (.sav)</h2>
      <p style="color:#ccc; margin-bottom:2rem;">Arrastra tu archivo .sav de Pokémon Esmeralda para ver lo invisible.</p>
      
      <div id="drop-zone" style="
          border: 2px dashed var(--ray-green); 
          border-radius: 16px; 
          padding: 3rem; 
          background: rgba(0, 20, 0, 0.5); 
          cursor: pointer;
          transition: all 0.3s;
          margin-bottom: 2rem;
      ">
        <p style="font-size:1.2rem; color:#fff;">📂 Arrastra tu .sav aquí o haz clic</p>
        <input type="file" id="file-input" accept=".sav" style="display:none;">
      </div>

      <div id="scanner-results" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1rem;"></div>
      <div id="error-msg" style="color:#ff6b81; margin-top:1rem; font-weight:bold;"></div>
    </div>
  `;

    const dropZone = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const resultsDiv = document.getElementById('scanner-results');
    const errorDiv = document.getElementById('error-msg');

    // Drag & Drop Handlers
    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.background = 'rgba(0, 255, 127, 0.2)';
        dropZone.style.borderColor = '#fff';
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.style.background = 'rgba(0, 20, 0, 0.5)';
        dropZone.style.borderColor = 'var(--ray-green)';
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.background = 'rgba(0, 20, 0, 0.5)';
        dropZone.style.borderColor = 'var(--ray-green)';

        if (e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) handleFile(e.target.files[0]);
    });

    function handleFile(file) {
        errorDiv.innerText = "";
        resultsDiv.innerHTML = "<p style='color:var(--ray-green); width:100%; text-align:center;'>Analizando estructura binaria...</p>";

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const buffer = event.target.result;
                const parser = new SaveParser(buffer);
                const data = parser.parse();

                if (data.error) {
                    throw new Error(data.error);
                }

                renderResults(data.team);

            } catch (err) {
                console.error(err);
                errorDiv.innerText = "Error: " + err.message;
                resultsDiv.innerHTML = "";
            }
        };
        reader.readAsArrayBuffer(file);
    }

    function renderResults(team) {
        resultsDiv.innerHTML = team.map(pk => {
            if (pk.speciesId === 0) return ''; // Skip empty slots

            const spriteUrl = pk.isEgg
                ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/egg.png'
                : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pk.isShiny ? 'shiny/' : ''}${pk.nationalId}.png`;

            return `
        <div class="emulator-box" style="text-align:left; position:relative; overflow:hidden; border: 1px solid ${pk.isShiny ? '#ffd700' : 'rgba(255,255,255,0.1)'};">
            ${pk.isShiny ? '<div style="position:absolute; top:5px; right:5px; font-size:1.2rem; animation: pulse 2s infinite;">✨</div>' : ''}
            
            <div style="display:flex; gap:1rem; align-items:center; margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.05);">
                 <div style="width:64px; height:64px; background:rgba(0,0,0,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center;">
                    <img src="${spriteUrl}" style="width:64px; height:64px; image-rendering:pixelated;" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'">
                 </div>
                 <div>
                    <h3 style="margin:0; color:${pk.isShiny ? '#ffd700' : 'var(--ray-yellow)'}; font-size:1.2rem;">
                        ${pk.isEgg ? 'Huevo' : (pk.nickname || 'Pokémon')}
                    </h3>
                    <span class="type-pill" style="font-size:0.75rem; opacity:0.7;">Dex #${pk.nationalId} ${pk.pokerusStatus ? '• 🦠 Pokérus' : ''}</span>
                 </div>
            </div>
            
            ${pk.isEgg ? '<p style="color:#ccc; text-align:center;">Un huevo misterioso...</p>' : `
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem; font-size:0.85rem; color:#ccc;">
                <div>
                    <strong style="color:var(--ray-green);">IVs (Genética):</strong><br>
                    PS: <span style="${getIvStyle(pk.ivs.hp)}">${pk.ivs.hp}</span><br>
                    Ataque: <span style="${getIvStyle(pk.ivs.atk)}">${pk.ivs.atk}</span><br>
                    Defensa: <span style="${getIvStyle(pk.ivs.def)}">${pk.ivs.def}</span><br>
                    Velocid: <span style="${getIvStyle(pk.ivs.spd)}">${pk.ivs.spd}</span><br>
                    At.Esp: <span style="${getIvStyle(pk.ivs.spa)}">${pk.ivs.spa}</span><br>
                    Df.Esp: <span style="${getIvStyle(pk.ivs.spdef)}">${pk.ivs.spdef}</span>
                </div>
                <div>
                    <strong style="color:var(--ray-green);">EVs (Esfuerzo):</strong><br>
                    PS: ${pk.evs.hp}<br>
                    Ataque: ${pk.evs.atk}<br>
                    Defensa: ${pk.evs.def}<br>
                    Velocid: ${pk.evs.spd}<br>
                    At.Esp: ${pk.evs.spa}<br>
                    Df.Esp: ${pk.evs.spdef}
                </div>
            </div>

            <div style="margin-top:0.75rem; padding-top:0.75rem; border-top:1px solid rgba(255,255,255,0.1); display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem;">
                <p style="font-size:0.9rem; margin:0;">
                   🔮 <strong>Poder Oculto:</strong><br> 
                   <span style="color:${getTypeColor(pk.hiddenPower.type)}">${pk.hiddenPower.type}</span> (${pk.hiddenPower.power})
                </p>
                <p style="font-size:0.9rem; margin:0;">
                   ❤️ <strong>Felicidad:</strong><br>
                   ${pk.friendship} / 255
                </p>
            </div>
            `}
        </div>
      `;
        }).join('');
    }

    function getIvStyle(iv) {
        if (iv === 31) return "color:#ffeb3b; font-weight:bold; text-shadow:0 0 5px #ffeb3b;"; // Perfect
        if (iv >= 25) return "color:#4cd137; font-weight:bold;"; // Great
        if (iv <= 5) return "color:#e84118;"; // Bad
        return "color:#fff;";
    }

    function getTypeColor(type) {
        const colors = {
            'Lucha': '#c0392b', 'Volador': '#a29bfe', 'Veneno': '#8e44ad', 'Tierra': '#d35400',
            'Roca': '#7f8c8d', 'Bicho': '#2ecc71', 'Fantasma': '#34495e', 'Acero': '#95a5a6',
            'Fuego': '#e74c3c', 'Agua': '#3498db', 'Planta': '#27ae60', 'Eléctrico': '#f1c40f',
            'Psíquico': '#9b59b6', 'Hielo': '#74b9ff', 'Dragón': '#4834d4', 'Siniestro': '#2c3e50'
        };
        return colors[type] || '#ccc';
    }
}
