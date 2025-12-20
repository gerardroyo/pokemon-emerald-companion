import { types, typeMatrix } from '../data/types.js';
import { team } from '../data/team.js';
import { teams } from '../data/teams_data.js';
import { platino_teams } from '../data/platino_teams_data.js';
import { translateType, typeTranslations } from '../data/translations.js';
import { getSelectedGame, GAMES } from '../data/gameManager.js';

let allPokemon = [];

// Get the currently selected team
function getCurrentTeam() {
    const selectedTeamId = localStorage.getItem('selectedTeamId') || 'competitive';
    const game = getSelectedGame();
    const currentTeams = game === GAMES.PLATINUM ? platino_teams : teams;
    const selectedTeam = currentTeams[selectedTeamId];
    return selectedTeam ? selectedTeam.pokemon : team;
}

export async function renderCalculator() {
    const container = document.getElementById('calculator');
    if (!container) return;

    container.innerHTML = `
    <h2>Calculadora de Tipos</h2>
    
    <div class="calculator-container" style="max-width:1200px;">
      
      <!-- Search Panel -->
      <div style="max-width:600px; margin:0 auto 2rem auto; position:relative; z-index:50;">
        <div class="emulator-box" style="padding:0; overflow:visible; border-radius:100px; border:none; background:transparent; box-shadow:none;">
             <input type="text" id="poke-search" class="search-input" placeholder="Buscar Pokémon rival (ej. Milotic...)" autocomplete="off" style="padding-left: 3.5rem; height:3.5rem; font-size:1.2rem;">
             <span style="position:absolute; left:1.2rem; top:50%; transform:translateY(-50%); font-size:1.4rem; opacity:0.5;">🔍</span>
             <div id="search-suggestions" style="position:absolute; width:100%; top:110%; left:0; max-height:300px; overflow-y:auto; background:var(--ray-charcoal); border:1px solid var(--glass-border); display:none; border-radius: 12px; box-shadow:0 10px 40px rgba(0,0,0,0.5);"></div>
        </div>
      </div>

      <!-- Results Area -->
      <div id="calc-results" class="results-panel" style="display:none; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap:2rem; background:transparent; border:none; box-shadow:none; backdrop-filter:none; padding:0;">
        
        <!-- Left Col: Enemy Info -->
        <div class="emulator-box" style="display:flex; flex-direction:column; gap:1.5rem; height:fit-content;">
           <div id="enemy-header" style="text-align:center; padding-bottom: 0;"></div>
           <div id="weakness-info" style="display:flex; flex-direction:column; gap:1rem;"></div>
        </div>

        <!-- Right Col: Team Suggestions -->
        <div class="emulator-box" style="display:flex; flex-direction:column; height:fit-content;">
          <h3 style="margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid var(--glass-border); display:flex; align-items:center; gap:0.5rem;">
             <span>🛡️</span> Análisis de tu Equipo
          </h3>
          <div id="team-analysis" style="display:grid; gap:0.75rem;"></div>
        </div>

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
                <div class="suggestion-item" data-url="${p.url}" style="padding:0.75rem 1rem; cursor:pointer; border-bottom:1px solid var(--glass-border); color:var(--text-main); transition:0.2s; font-size:1rem; display:flex; align-items:center; gap:1rem;">
                    <img src="${spriteUrl}" alt="${p.name}" style="width:40px; height:40px; object-fit:contain;">
                    <span style="font-weight:600;">${p.name.charAt(0).toUpperCase() + p.name.slice(1)}</span>
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

    // Close suggestions on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container') && !e.target.closest('#poke-search')) {
            suggestions.style.display = 'none';
        }
    });
}

async function analyzePokemonUrl(url) {
    const container = document.getElementById('calc-results');
    const header = document.getElementById('enemy-header');

    container.style.display = 'grid';
    header.innerHTML = '<div style="padding:2rem;">Cargando datos...</div>';

    try {
        const res = await fetch(url);
        const data = await res.json();

        const pokemonId = data.id;
        const enemyTypes = data.types.map(t => {
            const apiType = t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1);
            return typeTranslations[apiType] || apiType;
        });
        analyzeTypes(enemyTypes, data.name.toUpperCase(), data.sprites.front_default, pokemonId);

    } catch (e) {
        console.error(e);
        header.innerHTML = 'Error cargando detalles.';
    }
}

function analyzeTypes(enemyTypes, name, spriteUrl, pokemonId = null) {
    const container = document.getElementById('calc-results');
    const header = document.getElementById('enemy-header');
    const weaknessContainer = document.getElementById('weakness-info');
    const teamContainer = document.getElementById('team-analysis');

    // Make sure container is visible
    container.style.display = 'grid';

    // 1. Header (Image + Types) - Make clickable
    let html = '';
    if (spriteUrl) {
        html += `
          <div style="position:relative; width:120px; height:120px; margin:0 auto; cursor:pointer;" 
               class="clickable"
               onclick="openPokemonModal(${pokemonId})">
             <div style="position:absolute; inset:0; background:var(--primary-glow); filter:blur(40px); opacity:0.2; border-radius:50%;"></div>
             <img src="${spriteUrl}" style="width:100%; height:100%; position:relative; z-index:1; image-rendering:pixelated; transform:scale(1.2);">
          </div>
        `;
    }
    html += `<h2 style="margin:0.5rem 0 1rem 0; color:var(--text-main); font-size:1.8rem; letter-spacing:-1px; cursor:pointer;" 
                class="clickable" 
                onclick="openPokemonModal(${pokemonId})">${name}</h2>`;
    html += `<div class="poke-types" style="justify-content:center; gap:0.5rem; margin-bottom:1rem;">
      ${enemyTypes.map(t => `<span class="type-pill type-${t.toLowerCase()}" style="padding:0.3rem 1rem; font-size:1rem;">${translateType(t)}</span>`).join('')}
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

    let weakHtml = `<div style="display:grid; gap:1rem; width:100%;">`;

    // Weak Column
    if (weakList.length > 0) {
        weakHtml += `<div style="background:rgba(255, 65, 129, 0.08); border:1px solid rgba(255, 65, 129, 0.2); border-radius:16px; padding:1.25rem;">
          <h4 style="color:var(--ray-red); margin:0 0 1rem 0; text-align:center; font-size:1rem; font-weight:700; text-transform:uppercase; letter-spacing:1px;">⚠️ Muy Débil A</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.6rem; justify-content:center;">`;
        weakHtml += weakList.map(([t, mod]) => `
            <span class="type-pill type-${t.toLowerCase()}" style="border:1px solid rgba(255,255,255,0.1); font-weight:600; font-size:0.9rem;">
                ${translateType(t)} <strong style="color:white; background:rgba(0,0,0,0.3); padding:0 4px; border-radius:4px; margin-left:4px;">x${mod}</strong>
            </span>
        `).join('');
        weakHtml += `</div></div>`;
    } else {
        weakHtml += `<div style="background:rgba(255,255,255,0.03); border:1px solid var(--glass-border); border-radius:12px; padding:1rem; text-align:center;"><span style="color:var(--text-muted); font-size:0.85rem;">Sin debilidades</span></div>`;
    }

    // Resist Column
    if (resistList.length > 0) {
        weakHtml += `<div style="background:rgba(72, 219, 251, 0.08); border:1px solid rgba(72, 219, 251, 0.2); border-radius:16px; padding:1.25rem;">
          <h4 style="color:#48dbfb; margin:0 0 1rem 0; text-align:center; font-size:1rem; font-weight:700; text-transform:uppercase; letter-spacing:1px;">🛡️ Resiste</h4>
          <div style="display:flex; flex-wrap:wrap; gap:0.6rem; justify-content:center;">`;
        weakHtml += resistList.map(([t, mod]) => `
            <span class="type-pill type-${t.toLowerCase()}" style="border:1px solid rgba(255,255,255,0.1); opacity:0.9; font-size:0.9rem;">
                ${translateType(t)} <strong style="color:white; background:rgba(0,0,0,0.3); padding:0 4px; border-radius:4px; margin-left:4px;">x${mod}</strong>
            </span>
        `).join('');
        weakHtml += `</div></div>`;
    }
    weakHtml += `</div>`;

    weaknessContainer.innerHTML = weakHtml;

    // 3. Team Suggestions - Use the currently selected team
    const currentTeam = getCurrentTeam();
    const analysis = currentTeam.map(member => {
        let bestMove = { name: "Ninguno", mod: 0 };
        member.moves.forEach(move => {
            if (move.category === 'Status') return;
            // Simplified check based on type only for now as basic heuristic
            let mod = 1;
            enemyTypes.forEach(eType => {
                const atkIdx = types.indexOf(move.type);
                const defIdx = types.indexOf(eType);
                if (atkIdx !== -1 && defIdx !== -1) mod *= typeMatrix[atkIdx][defIdx];
            });
            // STAB
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

    // Sort: Best attackers first
    analysis.sort((a, b) => b.bestMove.mod - a.bestMove.mod);

    teamContainer.innerHTML = analysis.map(item => {
        // Color coding based on matchup
        let borderColor = 'transparent';
        let bgColor = 'rgba(255,255,255,0.03)';

        if (item.bestMove.mod >= 2) {
            borderColor = 'var(--primary-color)';
            bgColor = 'rgba(var(--primary-rgb), 0.1)';
        } else if (item.maxReceiveMod >= 2) {
            borderColor = 'var(--ray-red)';
            bgColor = 'rgba(244, 63, 94, 0.05)';
        }

        return `
        <div class="recommendation-card clickable" 
             style="border-left: 3px solid ${borderColor}; background:${bgColor}; padding:0.75rem 1rem; margin:0; display:flex; align-items:center; gap:1rem; cursor:pointer;"
             onclick="openPokemonModal(${item.member.id})">
          <img src="${item.member.image}" style="width:48px; height:48px; object-fit:contain; filter:drop-shadow(0 2px 5px rgba(0,0,0,0.5)); transform:scale(1.1);">
          
          <div style="flex:1;">
            <div style="font-weight:700; font-size:1rem; color:var(--text-main); margin-bottom:0.2rem;">${item.member.name}</div>
            
            ${item.bestMove.mod >= 1
                ? `<div style="font-size:0.85rem; color:var(--text-muted);">Usa <span style="color:var(--primary-glow); font-weight:600;">${item.bestMove.name}</span> <span style="background:rgba(0,0,0,0.3); padding:0 4px; border-radius:4px; font-size:0.75rem;">x${item.bestMove.mod.toFixed(1)}</span></div>`
                : `<div style="font-size:0.85rem; color:var(--text-muted);">Poco efectivo</div>`
            }
          </div>

          <div style="text-align:right;">
             ${item.maxReceiveMod >= 2
                ? `<div style="color:var(--ray-red); font-size:0.8rem; font-weight:600; display:flex; flex-direction:column; align-items:flex-end;"><span>⚠️ Recibe</span><span>x${item.maxReceiveMod}</span></div>`
                : `<div style="color:var(--primary-color); font-size:0.8rem; font-weight:600;">🛡️ Seguro</div>`
            }
          </div>
        </div>
      `;
    }).join('');
}
