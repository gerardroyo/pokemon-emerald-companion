import { types, typeMatrix } from '../data/types.js';
import { team } from '../data/team.js';
import { teams } from '../data/teams_data.js';
import { translateType, typeTranslations } from '../data/translations.js';

let allPokemon = [];

// Get the currently selected team
function getCurrentTeam() {
  const selectedTeamId = localStorage.getItem('selectedTeamId') || 'competitive';
  const selectedTeam = teams[selectedTeamId];
  return selectedTeam ? selectedTeam.pokemon : team;
}

export async function renderCalculator() {
    const container = document.getElementById('calculator');
    if (!container) return;

    container.innerHTML = `
    <h2>Calculadora de Tipos</h2>
    
    <div class="calculator-container">
      
      <!-- Only Search - Compact -->
      <div class="emulator-box" style="margin: 0 auto 1.5rem auto; padding: 1rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <h3>Pokédex</h3>
            <span style="font-size:0.75rem; color:var(--text-muted);">Busca un Pokémon (Gen 1-3)</span>
        </div>

        <div class="search-container" style="position:relative;">
          <input type="text" id="poke-search" class="search-input" placeholder="Ej. Milotic..." autocomplete="off">
          <div id="search-suggestions" style="position:absolute; width:100%; max-height:200px; overflow-y:auto; background:var(--ray-charcoal); border:1px solid var(--glass-border); border-top:none; display:none; z-index:100; border-radius: 0 0 12px 12px;"></div>
        </div>
      </div>

    </div>

    <!-- Results Area - Compact Grid -->
    <div id="calc-results" class="results-panel" style="display:none; animation: slideUpFade 0.5s var(--ease-out);">
      
      <!-- Left Col: Enemy Info + Weaknesses -->
      <div>
        <div id="enemy-header" style="text-align:center; padding-bottom: 1rem; border-bottom: 1px dashed var(--glass-border); margin-bottom:1rem;"></div>
        <div id="weakness-info" style="margin-bottom: 1rem;"></div>
      </div>

      <!-- Right Col: Team Suggestions -->
      <div>
        <h3 style="margin-bottom:1rem; border-bottom:1px solid var(--glass-border); padding-bottom:0.5rem;">Análisis de tu Equipo</h3>
        <div id="team-analysis" style="display:grid; gap:0.5rem;"></div>
      </div>

    </div>
  `;

    // Fetch Logic (Silent)
    if (allPokemon.length === 0) {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000'); // Get enough for Gen 3
            const data = await res.json();
            allPokemon = data.results;
        } catch (e) {
            console.error("Error fetching pokemon", e);
        }
    }

    // Event Listeners
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
                <div class="suggestion-item" data-url="${p.url}" style="padding:0.4rem 0.8rem; cursor:pointer; border-bottom:1px solid var(--glass-border); color:#fff; transition:0.2s; font-size:0.9rem; display:flex; align-items:center; gap:0.5rem;">
                    <img src="${spriteUrl}" alt="${p.name}" style="width:30px; height:30px; object-fit:contain;">
                    <span>${p.name.toUpperCase()}</span>
                </div>
              `;
            }).join('');

            document.querySelectorAll('.suggestion-item').forEach(el => {
                el.addEventListener('click', () => {
                    input.value = el.textContent.trim();
                    suggestions.style.display = 'none';
                    analyzePokemonUrl(el.dataset.url);
                });

                // Hover effect for js populated items
                el.addEventListener('mouseenter', () => el.style.background = 'var(--glass-shine)');
                el.addEventListener('mouseleave', () => el.style.background = 'transparent');
            });
        } else {
            suggestions.style.display = 'none';
        }
    });
}

async function analyzePokemonUrl(url) {
    const container = document.getElementById('calc-results');
    const header = document.getElementById('enemy-header');

    container.style.display = 'grid'; // Ensure grid display from CSS is respected/overridden if needed, but CSS handles it
    header.innerHTML = '<div style="padding:2rem;">Cargando datos...</div>';

    try {
        const res = await fetch(url);
        const data = await res.json();

        const enemyTypes = data.types.map(t => {
            const apiType = t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1);
            return typeTranslations[apiType] || apiType;
        });
        analyzeTypes(enemyTypes, data.name.toUpperCase(), data.sprites.front_default);

    } catch (e) {
        console.error(e);
        header.innerHTML = 'Error cargando detalles.';
    }
}

function analyzeTypes(enemyTypes, name, spriteUrl) {
    const container = document.getElementById('calc-results');
    const header = document.getElementById('enemy-header');
    const weaknessContainer = document.getElementById('weakness-info');
    const teamContainer = document.getElementById('team-analysis');

    // Make sure container is visible
    container.style.display = 'grid'; // CSS media query handles 1 vs 2 cols

    // 1. Header (Image + Types)
    let html = '';
    if (spriteUrl) {
        html += `<img src="${spriteUrl}" style="width:100px; height:100px; animation: float 3s infinite ease-in-out;">`;
    }
    html += `<h2 style="margin:0.25rem 0; color:var(--text-main); font-size:1.4rem; text-shadow:0 0 10px rgba(45,158,109,0.5);">${name}</h2>`;
    html += `<div class="poke-types" style="justify-content:center; gap:0.25rem;">
      ${enemyTypes.map(t => `<span class="type-pill type-${t.toLowerCase()}">${translateType(t)}</span>`).join('')}
    </div>`;
    header.innerHTML = html;

    // 2. Weaknesses
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
        if (mod !== 1) weaknesses[atkType] = mod;
    });

    // Render Weak/Resist
    const weakList = Object.entries(weaknesses).filter(([_, mod]) => mod > 1).sort((a, b) => b[1] - a[1]);
    const resistList = Object.entries(weaknesses).filter(([_, mod]) => mod < 1).sort((a, b) => a[1] - b[1]);

    let weakHtml = `<div style="display:grid; gap:1rem;">`;

    // Weak Column
    if (weakList.length > 0) {
        weakHtml += `<div style="background:rgba(255,107,107,0.05); border:1px solid rgba(255,107,107,0.3); border-radius:12px; padding:1rem; backdrop-filter:blur(10px);">
          <h4 style="color:#ff6b6b; margin:0 0 0.75rem 0; text-align:center; font-size:1rem; font-weight:600;">⚠️ Muy Débil A</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center;">`;
        weakHtml += weakList.map(([t, mod]) => `
            <span class="type-pill type-${t.toLowerCase()}" style="border:1px solid rgba(255,255,255,0.2); font-weight:600;">
                ${translateType(t)} <strong style="color:var(--ray-yellow); margin-left:4px;">x${mod}</strong>
            </span>
        `).join('');
        weakHtml += `</div></div>`;
    } else {
        weakHtml += `<div style="background:rgba(255,255,255,0.03); border:1px solid var(--glass-border); border-radius:12px; padding:1rem; text-align:center;"><span style="color:var(--text-muted); font-size:0.85rem;">Sin debilidades</span></div>`;
    }

    // Resist Column
    if (resistList.length > 0) {
        weakHtml += `<div style="background:rgba(72,219,251,0.05); border:1px solid rgba(72,219,251,0.3); border-radius:12px; padding:1rem; backdrop-filter:blur(10px);">
          <h4 style="color:#48dbfb; margin:0 0 0.75rem 0; text-align:center; font-size:1rem; font-weight:600;">🛡️ Resiste</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center;">`;
        weakHtml += resistList.map(([t, mod]) => `
            <span class="type-pill type-${t.toLowerCase()}" style="border:1px solid rgba(255,255,255,0.2); opacity:1;">
                ${translateType(t)} <strong style="color:var(--ray-yellow); margin-left:4px;">x${mod}</strong>
            </span>
        `).join('');
        weakHtml += `</div></div>`;
    } else {
        weakHtml += `<div style="background:rgba(255,255,255,0.03); border:1px solid var(--glass-border); border-radius:12px; padding:1rem; text-align:center;"><span style="color:var(--text-muted); font-size:0.85rem;">Daño neutro</span></div>`;
    }
    weakHtml += `</div>`;

    weaknessContainer.innerHTML = weakHtml;

    // 3. Team Suggestions - Use the currently selected team
    const currentTeam = getCurrentTeam();
    const analysis = currentTeam.map(member => {
        let bestMove = { name: "Ninguno", mod: 0 };
        member.moves.forEach(move => {
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
        let color = "#a0a0a0";
        if (item.bestMove.mod >= 2) color = "#2d9e6d";
        if (item.maxReceiveMod >= 2) color = "#ff4081";

        return `
        <div class="recommendation-card" style="border-color:${color}; padding:0.5rem; margin-top:0;">
          <img src="${item.member.image}" style="width:40px; height:40px;">
          <div style="flex:1;">
            <div style="font-weight:bold; font-size:0.9rem; color:white;">${item.member.name}</div>
            <div style="font-size:0.75rem; color:#ccc;">
              Ataca con: <span style="color:${item.bestMove.mod >= 1.5 ? 'var(--ray-green-glow)' : 'inherit'};">${item.bestMove.name}</span> 
              (${item.bestMove.mod.toFixed(1)}x)
            </div>
          </div>
          <div style="font-size:0.75rem; text-align:right;">
             <div style="color:${item.maxReceiveMod >= 2 ? '#ff6b6b' : '#a0a0a0'}">Recibe x${item.maxReceiveMod}</div>
          </div>
        </div>
      `;
    }).join('');
}
