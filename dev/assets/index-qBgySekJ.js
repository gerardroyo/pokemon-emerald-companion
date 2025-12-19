(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const m of o)if(m.type==="childList")for(const l of m.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const m={};return o.integrity&&(m.integrity=o.integrity),o.referrerPolicy&&(m.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?m.credentials="include":o.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function s(o){if(o.ep)return;o.ep=!0;const m=n(o);fetch(o.href,m)}})();const U=[{name:"Swampert",id:260,types:["Agua","Tierra"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",location:"Inicial (Mudkip)",role:"Tanque Mixto / Líder",item:"Arena Fina",nature:"Plácida / Audaz",moves:[{name:"Surf",type:"Agua",category:"Especial"},{name:"Terremoto",type:"Tierra",category:"Físico"},{name:"Rayo Hielo",type:"Hielo",category:"Especial"},{name:"Cascada",type:"Agua",category:"Físico"}]},{name:"Gardevoir",id:282,types:["Psíquico"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",location:"Ruta 102 (Ralts)",role:"Atacante Especial",item:"Cuchara Torcida",nature:"Modesta / Miedosa",moves:[{name:"Psíquico",type:"Psíquico",category:"Especial"},{name:"Rayo",type:"Eléctrico",category:"Especial"},{name:"Paz Mental",type:"Psíquico",category:"Estado"},{name:"Bola Sombra",type:"Fantasma",category:"Físico"}]},{name:"Breloom",id:286,types:["Planta","Lucha"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",location:"Bosque Petalia (Shroomish)",role:"Físico / Espora",item:"Semilla Milagro",nature:"Firme / Alegre",moves:[{name:"Espora",type:"Planta",category:"Estado"},{name:"Gancho Alto",type:"Lucha",category:"Físico"},{name:"Giga Drenado",type:"Planta",category:"Especial"},{name:"Corpulencia",type:"Lucha",category:"Estado"}]},{name:"Manectric",id:310,types:["Eléctrico"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",location:"Ruta 110 (Electrike)",role:"Velocidad Especial",item:"Imán",nature:"Modesta / Miedosa",moves:[{name:"Rayo",type:"Eléctrico",category:"Especial"},{name:"Mordisco",type:"Siniestro",category:"Especial"},{name:"Onda Trueno",type:"Eléctrico",category:"Estado"},{name:"Ataque Rápido",type:"Normal",category:"Físico"}]},{name:"Flygon",id:330,types:["Tierra","Dragón"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",location:"Ruta 111 (Trapinch)",role:"Atacante Físico",item:"Arena Fina",nature:"Firme / Alegre",moves:[{name:"Terremoto",type:"Tierra",category:"Físico"},{name:"Avalancha",type:"Roca",category:"Físico"},{name:"Garra Dragón",type:"Dragón",category:"Especial"},{name:"Vuelo",type:"Volador",category:"Físico"}]},{name:"Salamence",id:373,types:["Dragón","Volador"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",location:"Cascada Meteoro (Bagon)",role:"Potencia Bruta",item:"Colmillo Dragón",nature:"Pícara / Ingenua",moves:[{name:"Vuelo",type:"Volador",category:"Físico"},{name:"Garra Dragón",type:"Dragón",category:"Especial"},{name:"Lanzallamas",type:"Fuego",category:"Especial"},{name:"Demolición",type:"Lucha",category:"Físico"}]}],oe={Normal:"Normal",Fire:"Fuego",Water:"Agua",Grass:"Planta",Electric:"Eléctrico",Ice:"Hielo",Fighting:"Lucha",Poison:"Veneno",Ground:"Tierra",Flying:"Volador",Psychic:"Psíquico",Bug:"Bicho",Rock:"Roca",Ghost:"Fantasma",Dragon:"Dragón",Steel:"Acero",Dark:"Siniestro"};function M(r){if(!r)return"";const a=r.charAt(0).toUpperCase()+r.slice(1).toLowerCase();return oe[a]||r}function re(){const r=document.getElementById("team");r&&(r.innerHTML=`
    <h2 style="margin-bottom: 2rem; text-align: center;">Equipo Recomendado</h2>
    <div class="team-grid">
      ${U.map(a=>`
        <div class="pokemon-card">
          <div class="card-header">
            <span class="poke-name">${a.name}</span>
            <div class="poke-types">
              ${a.types.map(n=>`<span class="type-${n.toLowerCase()}">${M(n)}</span>`).join("")}
            </div>
          </div>
          <div class="poke-img-container">
            <img src="${a.image}" alt="${a.name}" class="poke-img">
          </div>
          <div class="poke-details">
            <div class="detail-row">
              <span class="detail-label">Rol</span>
              <span>${a.role}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Objeto</span>
              <span>${a.item}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Naturaleza</span>
              <span>${a.nature}</span>
            </div>
          </div>
          <div class="moves-list">
            ${a.moves.map(n=>`
              <div class="move-tag">
                <div style="font-weight:bold;">${n.name}</div>
                <div style="font-size:0.7em; opacity:0.7;">${M(n.type)}</div>
              </div>
            `).join("")}
          </div>
          <div style="margin-top:1rem; font-size:0.85rem; color:var(--text-secondary); text-align:center;">
             📍 ${a.location}
          </div>
        </div>
      `).join("")}
    </div>
  `)}const ne=[{name:"Firme",plus:"Ataque",minus:"At. Esp"},{name:"Tímida",plus:"-",minus:"-"},{name:"Osada",plus:"Defensa",minus:"Ataque"},{name:"Audaz",plus:"Ataque",minus:"Velocidad"},{name:"Serena",plus:"Def. Esp",minus:"Ataque"},{name:"Cauta",plus:"Def. Esp",minus:"At. Esp"},{name:"Dócil",plus:"-",minus:"-"},{name:"Amable",plus:"Def. Esp",minus:"Defensa"},{name:"Fuerte",plus:"-",minus:"-"},{name:"Activa",plus:"Velocidad",minus:"Defensa"},{name:"Agitada",plus:"Defensa",minus:"At. Esp"},{name:"Alegre",plus:"Velocidad",minus:"At. Esp"},{name:"Floja",plus:"Defensa",minus:"Def. Esp"},{name:"Huraña",plus:"Ataque",minus:"Defensa"},{name:"Afable",plus:"At. Esp",minus:"Defensa"},{name:"Modesta",plus:"At. Esp",minus:"Ataque"},{name:"Ingenua",plus:"Velocidad",minus:"Def. Esp"},{name:"Pícara",plus:"Ataque",minus:"Def. Esp"},{name:"Mansa",plus:"At. Esp",minus:"Velocidad"},{name:"Rara",plus:"-",minus:"-"},{name:"Alocada",plus:"At. Esp",minus:"Def. Esp"},{name:"Plácida",plus:"Defensa",minus:"Velocidad"},{name:"Grosera",plus:"Def. Esp",minus:"Velocidad"},{name:"Seria",plus:"-",minus:"-"},{name:"Miedosa",plus:"Velocidad",minus:"Ataque"}],ie=ne;function se(){const r=document.getElementById("reference");if(!r)return;r.innerHTML=`
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
          1. <strong style="color:var(--ray-green)">Baja la vida:</strong> Cuanto menos PS tenga, mejor (Rojo es x3).<br>
          2. <strong style="color:var(--ray-green)">Estado:</strong> Dormir o Congelar multiplica x2. Parálisis/Veneno/Quemado x1.5.<br>
          3. <strong style="color:var(--ray-green)">Pokéball:</strong> Ultra Ball es x2. Malla Ball (Agua/Bicho) es x3.
          <br><br>
          <em style="color:var(--ray-green-glow)">Consejo: Usa a Breloom con Espora para dormir al 100% de precisión y Falsotortazo.</em>
        </p>
      </div>
    </div>
  `;const a=document.getElementById("natures-grid"),n=document.getElementById("ref-search");function s(o=""){const m=o.toLowerCase(),l=ie.filter(u=>u.name.toLowerCase().includes(m));if(l.length===0){a.innerHTML='<p style="grid-column: 1/-1; text-align: center; color: #666;">No se encontraron naturalezas.</p>';return}a.innerHTML=l.map(u=>{const g=u.plus==="-"&&u.minus==="-";return`
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
               
               ${g?'<div style="position:absolute; inset:0; background:rgba(255,255,255,0.02); pointer-events:none;"></div>':""}

               <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: #fff;">${u.name}</h4>
               
               <div style="width: 100%; border-top: 1px solid rgba(255,255,255,0.1); margin: 0.5rem 0;"></div>

               ${g?'<span style="color: #888; font-size: 0.85rem;">Neutra</span>':`
                   <div style="display:flex; width:100%; justify-content:space-between; font-size:0.8rem;">
                     <span style="color: #4cd137;">▲ ${u.plus}</span>
                     <span style="color: #e84118;">▼ ${u.minus}</span>
                   </div>
                 `}
            </div>
        `}).join("")}s(),n.addEventListener("input",o=>{s(o.target.value)})}const le=[{name:"MO01 Corte",location:"Ciudad Férrica (Casa del Cortador)"},{name:"MO02 Vuelo",location:"Ruta 119 (Tras vencer al Rival)"},{name:"MO03 Surf",location:"Gimnasio de Petalia (Tras vencer a Norman)"},{name:"MO04 Fuerza",location:"Túnel Verdegal (Tras romper las rocas)"},{name:"MO05 Destello",location:"Cueva Granito (Montañero en la entrada)"},{name:"MO06 Golpe Roca",location:"Ciudad Malvalona (Casa al sureste)"},{name:"MO07 Cascada",location:"Gimnasio de Arrecípolis (Tras el evento del despertar)"},{name:"MO08 Buceo",location:"Ciudad Algaria (Casa de Máximo)"}],ce=[{name:"MT26 Terremoto",location:"Caverna Abisal (Cueva) / Recogida (Nivel 91+)"},{name:"MT13 Rayo Hielo",location:"Nao Abandonada / Casino de Malvalona (4000 fichas)"},{name:"MT24 Rayo",location:"Ciudad Malvalona (Misión de Erico) / Casino"},{name:"MT35 Lanzallamas",location:"Casino de Malvalona (4000 fichas)"},{name:"MT30 Bola Sombra",location:"Monte Pírico"},{name:"MT06 Tóxico",location:"Senda Ígnea"},{name:"MT02 Garra Dragón",location:"Cascada Meteoro (Requiere Surf/Cascada)"},{name:"MT31 Demolición",location:"Ciudad Arrecípolis / Nao Abandonada"},{name:"MT40 Golpe Aéreo",location:"Gimnasio de Arborada (Premio)"}],q=[{name:"Piedra Fuego",category:"Evolución",loc:"Senda Ígnea (Fuerza) / Parte Roja",img:"fire-stone",desc:"Evoluciona a Vulpix, Growlithe, Eevee."},{name:"Piedra Agua",category:"Evolución",loc:"Nao Abandonada / Parte Azul",img:"water-stone",desc:"Evoluciona a Poliwhirl, Shellder, Staryu, Eevee, Lombre."},{name:"Piedra Trueno",category:"Evolución",loc:"Malvalanova / Parte Amarilla",img:"thunder-stone",desc:"Evoluciona a Pikachu, Eevee."},{name:"Piedra Hoja",category:"Evolución",loc:"Ruta 119 / Parte Verde",img:"leaf-stone",desc:"Evoluciona a Gloom, Weepinbell, Exeggcute, Nuzleaf."},{name:"Piedra Lunar",category:"Evolución",loc:"Cascada Meteoro / Lunatone (5%)",img:"moon-stone",desc:"Evoluciona a Nidorina/o, Clefairy, Jigglypuff, Skitty."},{name:"Piedra Solar",category:"Evolución",loc:"Centro Espacial / Solrock (5%)",img:"sun-stone",desc:"Evoluciona a Gloom, Sunkern."},{name:"Escama Dragón",category:"Evolución",loc:"Bagon/Horsea (5%) / Pilar Celeste",img:"dragon-scale",desc:"Evoluciona Seadra a Kingdra (Intercambio)."},{name:"Revestimiento Metálico",category:"Evolución",loc:"Malvalanova / Magnemite (5%)",img:"metal-coat",desc:"Evoluciona Onix/Scyther (Intercambio). Potencia Acero."},{name:"Roca del Rey",category:"Evolución",loc:"Ciudad Algaria (Máximo) / Recogida",img:"kings-rock",desc:"Evoluciona Poliwhirl/Slowpoke (Intercambio). Puede hacer retroceder."},{name:"Mejora",category:"Evolución",loc:"Torre Batalla (Premio)",img:"up-grade",desc:"Evoluciona Porygon a Porygon2."},{name:"Diente Marino",category:"Evolución",loc:"Ciudad Portual (Escáner)",img:"deep-sea-tooth",desc:"Evoluciona Clamperl a Huntail. Dobla At. Esp de Clamperl."},{name:"Escama Marina",category:"Evolución",loc:"Ciudad Portual (Escáner)",img:"deep-sea-scale",desc:"Evoluciona Clamperl a Gorebyss. Dobla Def. Esp de Clamperl."},{name:"Restos",category:"Combate",loc:"S.S. Tidal (Basura) / Torre Batalla",img:"leftovers",desc:"Recupera 1/16 PS cada turno."},{name:"Cinta Elegida",category:"Combate",loc:"Torre Batalla (64 BP)",img:"choice-band",desc:"Sube Ataque x1.5 pero bloquea movimiento."},{name:"Banda Focus",category:"Combate",loc:"Torre Batalla (64 BP)",img:"focus-band",desc:"10% probabilidad de aguantar con 1 PS."},{name:"Periscopio",category:"Combate",loc:"Torre Batalla (64 BP)",img:"scope-lens",desc:"Aumenta índice de golpe crítico."},{name:"Hierba Blanca",category:"Combate",loc:"Torre Batalla (48 BP)",img:"white-herb",desc:"Restaura stats bajados una vez."},{name:"Hierba Mental",category:"Combate",loc:"Ciudad Arborada / Torre Batalla",img:"mental-herb",desc:"Cura atracción y mofa."},{name:"Garra Rápida",category:"Combate",loc:"Ciudad Férrica (Escuela)",img:"quick-claw",desc:"20% probabilidad de atacar primero."},{name:"Campana Concha",category:"Combate",loc:"Cueva Cardumen (4 Sales/Conchas)",img:"shell-bell",desc:"Cura 1/8 del daño infligido."},{name:"Polvo Brillo",category:"Combate",loc:"Torre Batalla (64 BP)",img:"bright-powder",desc:"Baja la precisión del rival."},{name:"Lodo Negro",category:"Combate",loc:"Grimer/Muk (5%)",img:"black-sludge",desc:"Cura a Veneno, daña a otros."},{name:"Cinturón Negro",category:"Combate",loc:"Ruta 115",img:"black-belt",desc:"Potencia tipo Lucha (+10%)."},{name:"Gafas de Sol",category:"Combate",loc:"Ruta 116",img:"black-glasses",desc:"Potencia tipo Siniestro (+10%)."},{name:"Carbón",category:"Combate",loc:"Lavacalda (Herboristería)",img:"charcoal",desc:"Potencia tipo Fuego (+10%)."},{name:"Colmillo Dragón",category:"Combate",loc:"Cascada Meteoro (Dracónida)",img:"dragon-fang",desc:"Potencia tipo Dragón (+10%)."},{name:"Piedra Dura",category:"Combate",loc:"Casa Treta / Nao Abandonada",img:"hard-stone",desc:"Potencia tipo Roca (+10%)."},{name:"Imán",category:"Combate",loc:"Malvalanova",img:"magnet",desc:"Potencia tipo Eléctrico (+10%)."},{name:"Semilla Milagro",category:"Combate",loc:"Ruta 104 (Bosque Petalia)",img:"miracle-seed",desc:"Potencia tipo Planta (+10%)."},{name:"Agua Mística",category:"Combate",loc:"Forma Castform (Instituto Meteorológico)",img:"mystic-water",desc:"Potencia tipo Agua (+10%)."},{name:"Antiderretir",category:"Combate",loc:"Cueva Cardumen",img:"never-melt-ice",desc:"Potencia tipo Hielo (+10%)."},{name:"Flecha Venenosa",category:"Combate",loc:"Roselia/Cacnea salvaje (5%)",img:"poison-barb",desc:"Potencia tipo Veneno (+10%)."},{name:"Pico Afilado",category:"Combate",loc:"Ruta 124 / Doduo salvaje",img:"sharp-beak",desc:"Potencia tipo Volador (+10%)."},{name:"Pañuelo Seda",category:"Combate",loc:"Pueblo Azuliza",img:"silk-scarf",desc:"Potencia tipo Normal (+10%)."},{name:"Polvo Plata",category:"Combate",loc:"Ruta 120 / Masquerain salvaje",img:"silver-powder",desc:"Potencia tipo Bicho (+10%)."},{name:"Arena Fina",category:"Combate",loc:"Ruta 109 / Trapinch salvaje",img:"soft-sand",desc:"Potencia tipo Tierra (+10%)."},{name:"Hechizo",category:"Combate",loc:"Monte Pírico / Shuppet salvaje",img:"spell-tag",desc:"Potencia tipo Fantasma (+10%)."},{name:"Cuchara Torcida",category:"Combate",loc:"Abra salvaje (5%)",img:"twisted-spoon",desc:"Potencia tipo Psíquico (+10%)."},{name:"Repartir Exp",category:"Utilidad",loc:"Ciudad Férrica (Sr. Peñas)",img:"exp-share",desc:"Comparte experiencia con el equipo."},{name:"Moneda Amuleto",category:"Utilidad",loc:"Vila Raiz (Tras 5ª medalla)",img:"amulet-coin",desc:"Doble dinero si participa en combate."},{name:"Huevo Suerte",category:"Utilidad",loc:"Raro (Chansey Salvaje)",img:"lucky-egg",desc:"Gana +50% experiencia."},{name:"Piedra Eterna",category:"Utilidad",loc:"Cueva Granito / Geodude (5%)",img:"everstone",desc:"Impide evolución / Hereda naturaleza."},{name:"Campana Alivio",category:"Utilidad",loc:"Club Fans (Portual)",img:"soothe-bell",desc:"Aumenta ganancia de amistad."},{name:"Bola de Humo",category:"Utilidad",loc:"Casa Treta / Koffing (5%)",img:"smoke-ball",desc:"Huida garantizada de salvajes."},{name:"Amuleto",category:"Utilidad",loc:"Monte Pírico",img:"cleanse-tag",desc:"Reduce encuentros salvajes (1er slot)."},{name:"Vestidura",category:"Utilidad",loc:"Ruta 111 (Familia Estrate)",img:"macho-brace",desc:"Doble EVs ganados, mitad velocidad."},{name:"Bici Carrera",category:"Clave",loc:"Ciudad Malvalona (Rydel)",img:"mach-bike",desc:"Sube pendientes de barro."},{name:"Bici Acrobática",category:"Clave",loc:"Ciudad Malvalona (Rydel)",img:"acro-bike",desc:"Salta piedras y rieles."},{name:"Caña Vieja",category:"Clave",loc:"Pueblo Azuliza",img:"old-rod",desc:"Pesca Magikarp."},{name:"Caña Buena",category:"Clave",loc:"Ruta 118",img:"good-rod",desc:"Pesca Pokémon de nivel medio."},{name:"Supercaña",category:"Clave",loc:"Ciudad Algaria",img:"super-rod",desc:"Pesca Pokémon fuertes."},{name:"Buscaobjetos",category:"Clave",loc:"Ruta 110",img:"itemfinder",desc:"Detecta objetos invisibles."},{name:"Gafas Aislantes",category:"Clave",loc:"Lavacalda (Rival)",img:"go-goggles",desc:"Permite cruzar el desierto."},{name:"Saco Hollín",category:"Clave",loc:"Ruta 113",img:"soot-sack",desc:"Recoge ceniza para flautas/objetos."},{name:"Baya Zidra",category:"Baya",loc:"Rutas / Recogida",img:"sitrus-berry",desc:"Recupera 30 PS."},{name:"Baya Ziuela",category:"Baya",loc:"Rutas / Recogida",img:"lum-berry",desc:"Cura cualquier estado."},{name:"Baya Atania",category:"Baya",loc:"Rutas",img:"chesto-berry",desc:"Despierta al Pokémon."},{name:"Baya Caquic",category:"Baya",loc:"Rutas",img:"leppa-berry",desc:"Restaura 10 PP."},{name:"Baya Lichi",category:"Baya",loc:"Isla Espejismo",img:"liechi-berry",desc:"Sube Ataque con PS bajos."},{name:"Baya Gonlan",category:"Baya",loc:"Coliseo / XD",img:"ganlon-berry",desc:"Sube Defensa con PS bajos."},{name:"Baya Aslac",category:"Baya",loc:"Coliseo / XD",img:"salac-berry",desc:"Sube Velocidad con PS bajos."},{name:"Baya Petasi",category:"Baya",loc:"Coliseo / XD",img:"petaya-berry",desc:"Sube At. Esp con PS bajos."},{name:"Baya Yapati",category:"Baya",loc:"Coliseo / XD",img:"apicot-berry",desc:"Sube Def. Esp con PS bajos."},{name:"Pañuelo Rojo",category:"Concurso",loc:"Portual (Max Carisma)",img:"red-scarf",desc:"Mejora Carisma en Concursos."},{name:"Pañuelo Azul",category:"Concurso",loc:"Portual (Max Belleza)",img:"blue-scarf",desc:"Mejora Belleza en Concursos."},{name:"Pañuelo Rosa",category:"Concurso",loc:"Portual (Max Dulzura)",img:"pink-scarf",desc:"Mejora Dulzura en Concursos."},{name:"Pañuelo Verde",category:"Concurso",loc:"Portual (Max Ingenio)",img:"green-scarf",desc:"Mejora Ingenio en Concursos."},{name:"Pañuelo Amarillo",category:"Concurso",loc:"Portual (Max Dureza)",img:"yellow-scarf",desc:"Mejora Dureza en Concursos."}],O=["Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Nincada","Ninjask","Shedinja","Taillow","Swellow","Shroomish","Breloom","Spinda","Wingull","Pelipper","Surskit","Masquerain","Wailmer","Wailord","Skitty","Delcatty","Kecleon","Baltoy","Claydol","Nosepass","Torkoal","Sableye","Barboach","Whiscash","Luvdisc","Corphish","Crawdaunt","Feebas","Milotic","Carvanha","Sharpedo","Trapinch","Vibrava","Flygon","Makuhita","Hariyama","Electrike","Manectric","Numel","Camerupt","Spheal","Sealeo","Walrein","Cacnea","Cacturne","Snorunt","Glalie","Lunatone","Solrock","Azurill","Spoink","Grumpig","Plusle","Minun","Mawile","Meditite","Medicham","Swablu","Altaria","Wynaut","Duskull","Dusclops","Roselia","Slakoth","Vigoroth","Slaking","Gulpin","Swalot","Tropius","Whismur","Loudred","Exploud","Clamperl","Huntail","Gorebyss","Absol","Shuppet","Banette","Seviper","Zangoose","Relicanth","Aron","Lairon","Aggron","Castform","Volbeat","Illumise","Lileep","Cradily","Anorith","Armaldo","Ralts","Kirlia","Gardevoir","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Kyogre","Groudon","Rayquaza","Latias","Latios","Jirachi","Deoxys","Chimecho"],P=new Array(412).fill(0);for(let r=1;r<=251;r++)P[r]=r;for(let r=252;r<=276;r++)P[r]=201;const de={Treecko:252,Grovyle:253,Sceptile:254,Torchic:255,Combusken:256,Blaziken:257,Mudkip:258,Marshtomp:259,Swampert:260,Poochyena:261,Mightyena:262,Zigzagoon:263,Linoone:264,Wurmple:265,Silcoon:266,Beautifly:267,Cascoon:268,Dustox:269,Lotad:270,Lombre:271,Ludicolo:272,Seedot:273,Nuzleaf:274,Shiftry:275,Taillow:276,Swellow:277,Wingull:278,Pelipper:279,Ralts:280,Kirlia:281,Gardevoir:282,Surskit:283,Masquerain:284,Shroomish:285,Breloom:286,Slakoth:287,Vigoroth:288,Slaking:289,Nincada:290,Ninjask:291,Shedinja:292,Whismur:293,Loudred:294,Exploud:295,Makuhita:296,Hariyama:297,Azurill:298,Nosepass:299,Skitty:300,Delcatty:301,Sableye:302,Mawile:303,Aron:304,Lairon:305,Aggron:306,Meditite:307,Medicham:308,Electrike:309,Manectric:310,Plusle:311,Minun:312,Volbeat:313,Illumise:314,Roselia:315,Gulpin:316,Swalot:317,Carvanha:318,Sharpedo:319,Wailmer:320,Wailord:321,Numel:322,Camerupt:323,Torkoal:324,Spoink:325,Grumpig:326,Spinda:327,Trapinch:328,Vibrava:329,Flygon:330,Cacnea:331,Cacturne:332,Swablu:333,Altaria:334,Zangoose:335,Seviper:336,Lunatone:337,Solrock:338,Barboach:339,Whiscash:340,Corphish:341,Crawdaunt:342,Baltoy:343,Claydol:344,Lileep:345,Cradily:346,Anorith:347,Armaldo:348,Feebas:349,Milotic:350,Castform:351,Kecleon:352,Shuppet:353,Banette:354,Duskull:355,Dusclops:356,Tropius:357,Chimecho:358,Absol:359,Wynaut:360,Snorunt:361,Glalie:362,Spheal:363,Sealeo:364,Walrein:365,Clamperl:366,Huntail:367,Gorebyss:368,Relicanth:369,Luvdisc:370,Bagon:371,Shelgon:372,Salamence:373,Beldum:374,Metang:375,Metagross:376,Regirock:377,Regice:378,Registeel:379,Latias:380,Latios:381,Kyogre:382,Groudon:383,Rayquaza:384,Jirachi:385,Deoxys:386};for(let r=0;r<O.length;r++){const a=277+r,n=O[r],s=de[n];s&&(P[a]=s)}const me={0:" ",1:"À",2:"Á",3:"Â",4:"Ç",5:"È",6:"É",7:"Ê",8:"Ë",9:"Ì",11:"Î",12:"Ï",13:"Ò",14:"Ó",15:"Ô",16:"Œ",17:"Ù",18:"Ú",19:"Û",20:"Ñ",21:"ß",22:"à",23:"á",25:"ç",26:"è",27:"é",28:"ê",29:"ë",30:"ì",32:"î",33:"ï",34:"ò",35:"ó",36:"ô",37:"œ",38:"ù",39:"ú",40:"û",41:"ñ",45:"&",46:"+",53:"=",80:"▯",81:"¿",82:"¡",90:"Í",91:"%",92:"(",93:")",104:"â",111:"í",121:"⬆",122:"⬇",123:"⬅",124:"➡",133:"<",134:">",161:"0",162:"1",163:"2",164:"3",165:"4",166:"5",167:"6",168:"7",169:"8",170:"9",171:"!",172:"?",173:".",174:"-",176:"...",177:'"',178:'"',179:"'",180:"'",181:"M",182:"F",184:",",185:"x",186:"/",187:"A",188:"B",189:"C",190:"D",191:"E",192:"F",193:"G",194:"H",195:"I",196:"J",197:"K",198:"L",199:"M",200:"N",201:"O",202:"P",203:"Q",204:"R",205:"S",206:"T",207:"U",208:"V",209:"W",210:"X",211:"Y",212:"Z",213:"a",214:"b",215:"c",216:"d",217:"e",218:"f",219:"g",220:"h",221:"i",222:"j",223:"k",224:"l",225:"m",226:"n",227:"o",228:"p",229:"q",230:"r",231:"s",232:"t",233:"u",234:"v",235:"w",236:"x",237:"y",238:"z",239:"▶",240:":",241:"Ä",242:"Ö",243:"Ü",244:"ä",245:"ö",246:"ü",255:"",0:" "};function ue(r){let a="";for(let n=0;n<r.length&&r[n]!==255;n++)a+=me[r[n]]||"";return a.trim()}class pe{constructor(a){this.data=new DataView(a),this.buffer=a}parse(){const a=this.getGlobalSaveIndex(0),n=this.getGlobalSaveIndex(57344);let s=0;if(a===-1&&n===-1)throw new Error("No se encontró un archivo de guardado válido (Gen 3).");a>n?s=0:s=57344;const o=new Uint8Array(57344);for(let e=0;e<14;e++){const t=s+e*4096,p=this.data.getUint16(t+4084,!0),i=new Uint8Array(this.buffer,t,4096);o.set(i,p*4096)}const u=new DataView(o.buffer).getUint32(4660,!0),g=4664,d=[];if(u>6)return{error:"Datos corruptos o versión no soportada."};for(let e=0;e<u;e++){const t=g+e*100,p=new Uint8Array(o.buffer,t,100);d.push(this.parsePokemon(p))}return{team:d,gameCode:"Emerald"}}getGlobalSaveIndex(a){let n=-1;for(let s=0;s<14;s++){const o=a+s*4096;if(this.data.getUint32(o+4088,!0)!==134291493)return-1;const l=this.data.getUint32(o+4092,!0);l>n&&(n=l)}return n}parsePokemon(a){const n=new DataView(a.buffer,a.byteOffset,a.byteLength),s=n.getUint32(0,!0),o=n.getUint32(4,!0),m=ue(a.slice(8,18)),l=s^o,u=new Uint8Array(48);for(let E=0;E<12;E++){const A=n.getUint32(32+E*4,!0)^l;u.set(new Uint8Array(new Int32Array([A]).buffer),E*4)}const g=s%24,e=["GAEM","GAME","GEAM","GEMA","GMAE","GMEA","AGEM","AGME","AEGM","AEMG","AMGE","AMEG","EGAM","EGMA","EAGM","EAMG","EMGA","EMAG","MGAE","MGEA","MAGE","MAEG","MEGA","MEAG"][g],t=(E,H,A)=>{const S=e.indexOf(E)*12+H,w=new DataView(u.buffer);return A==="u16"?w.getUint16(S,!0):A==="u8"?w.getUint8(S):A==="u32"?w.getUint32(S,!0):0},p=t("G",0,"u16"),i=t("G",9,"u8"),c=t("E",0,"u8"),h=t("E",1,"u8"),f=t("E",2,"u8"),y=t("E",3,"u8"),C=t("E",4,"u8"),b=t("E",5,"u8"),v=t("M",4,"u32"),W=t("M",0,"u8"),D=v>>0&31,L=v>>5&31,F=v>>10&31,$=v>>15&31,R=v>>20&31,I=v>>25&31,K=(v>>30&1)===1,T=D%2,z=L%2,G=F%2,N=$%2,j=R%2,V=I%2,X=Math.floor((T+2*z+4*G+8*N+16*j+32*V)*15/63),Z=Math.floor((T+2*z+4*G+8*N+16*j+32*V)*40/63)+30,_=["Lucha","Volador","Veneno","Tierra","Roca","Bicho","Fantasma","Acero","Fuego","Agua","Planta","Eléctrico","Psíquico","Hielo","Dragón","Siniestro"][X],Y=o&65535,J=o>>16&65535,Q=s>>16&65535,ee=s&65535,ae=(Y^J^Q^ee)<8,te=P[p]||p;return{nickname:m.trim(),speciesId:p,nationalId:te,isEgg:K,isShiny:ae,pokerusStatus:W,friendship:i,ivs:{hp:D,atk:L,def:F,spd:$,spa:R,spdef:I},evs:{hp:c,atk:h,def:f,spd:y,spa:C,spdef:b},hiddenPower:{type:_,power:Z},pid:s}}}function ge(){const r=document.getElementById("save-scanner-root");if(!r)return;r.innerHTML=`
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
  `;const a=document.getElementById("drop-zone"),n=document.getElementById("file-input"),s=document.getElementById("scanner-results"),o=document.getElementById("error-msg");a.addEventListener("click",()=>n.click()),a.addEventListener("dragover",d=>{d.preventDefault(),a.style.background="rgba(0, 255, 127, 0.2)",a.style.borderColor="#fff"}),a.addEventListener("dragleave",d=>{d.preventDefault(),a.style.background="rgba(0, 20, 0, 0.5)",a.style.borderColor="var(--ray-green)"}),a.addEventListener("drop",d=>{d.preventDefault(),a.style.background="rgba(0, 20, 0, 0.5)",a.style.borderColor="var(--ray-green)",d.dataTransfer.files.length&&m(d.dataTransfer.files[0])}),n.addEventListener("change",d=>{d.target.files.length&&m(d.target.files[0])});function m(d){o.innerText="",s.innerHTML="<p style='color:var(--ray-green); width:100%; text-align:center;'>Analizando estructura binaria...</p>";const e=new FileReader;e.onload=t=>{try{const p=t.target.result,c=new pe(p).parse();if(c.error)throw new Error(c.error);l(c.team)}catch(p){console.error(p),o.innerText="Error: "+p.message,s.innerHTML=""}},e.readAsArrayBuffer(d)}function l(d){s.innerHTML=d.map(e=>{if(e.speciesId===0)return"";const t=e.isEgg?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/egg.png":`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${e.isShiny?"shiny/":""}${e.nationalId}.png`;return`
        <div class="emulator-box" style="text-align:left; position:relative; overflow:hidden; border: 1px solid ${e.isShiny?"#ffd700":"rgba(255,255,255,0.1)"};">
            ${e.isShiny?'<div style="position:absolute; top:5px; right:5px; font-size:1.2rem; animation: pulse 2s infinite;">✨</div>':""}
            
            <div style="display:flex; gap:1rem; align-items:center; margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.05);">
                 <div style="width:64px; height:64px; background:rgba(0,0,0,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center;">
                    <img src="${t}" style="width:64px; height:64px; image-rendering:pixelated;" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'">
                 </div>
                 <div>
                    <h3 style="margin:0; color:${e.isShiny?"#ffd700":"var(--ray-yellow)"}; font-size:1.2rem;">
                        ${e.isEgg?"Huevo":e.nickname||"Pokémon"}
                    </h3>
                    <span class="type-pill" style="font-size:0.75rem; opacity:0.7;">Dex #${e.nationalId} ${e.pokerusStatus?"• 🦠 Pokérus":""}</span>
                 </div>
            </div>
            
            ${e.isEgg?'<p style="color:#ccc; text-align:center;">Un huevo misterioso...</p>':`
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem; font-size:0.85rem; color:#ccc;">
                <div>
                    <strong style="color:var(--ray-green);">IVs (Genética):</strong><br>
                    PS: <span style="${u(e.ivs.hp)}">${e.ivs.hp}</span><br>
                    Ataque: <span style="${u(e.ivs.atk)}">${e.ivs.atk}</span><br>
                    Defensa: <span style="${u(e.ivs.def)}">${e.ivs.def}</span><br>
                    Velocid: <span style="${u(e.ivs.spd)}">${e.ivs.spd}</span><br>
                    At.Esp: <span style="${u(e.ivs.spa)}">${e.ivs.spa}</span><br>
                    Df.Esp: <span style="${u(e.ivs.spdef)}">${e.ivs.spdef}</span>
                </div>
                <div>
                    <strong style="color:var(--ray-green);">EVs (Esfuerzo):</strong><br>
                    PS: ${e.evs.hp}<br>
                    Ataque: ${e.evs.atk}<br>
                    Defensa: ${e.evs.def}<br>
                    Velocid: ${e.evs.spd}<br>
                    At.Esp: ${e.evs.spa}<br>
                    Df.Esp: ${e.evs.spdef}
                </div>
            </div>

            <div style="margin-top:0.75rem; padding-top:0.75rem; border-top:1px solid rgba(255,255,255,0.1); display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem;">
                <p style="font-size:0.9rem; margin:0;">
                   🔮 <strong>Poder Oculto:</strong><br> 
                   <span style="color:${g(e.hiddenPower.type)}">${e.hiddenPower.type}</span> (${e.hiddenPower.power})
                </p>
                <p style="font-size:0.9rem; margin:0;">
                   ❤️ <strong>Felicidad:</strong><br>
                   ${e.friendship} / 255
                </p>
            </div>
            `}
        </div>
      `}).join("")}function u(d){return d===31?"color:#ffeb3b; font-weight:bold; text-shadow:0 0 5px #ffeb3b;":d>=25?"color:#4cd137; font-weight:bold;":d<=5?"color:#e84118;":"color:#fff;"}function g(d){return{Lucha:"#c0392b",Volador:"#a29bfe",Veneno:"#8e44ad",Tierra:"#d35400",Roca:"#7f8c8d",Bicho:"#2ecc71",Fantasma:"#34495e",Acero:"#95a5a6",Fuego:"#e74c3c",Agua:"#3498db",Planta:"#27ae60",Eléctrico:"#f1c40f",Psíquico:"#9b59b6",Hielo:"#74b9ff",Dragón:"#4834d4",Siniestro:"#2c3e50"}[d]||"#ccc"}}function ye(){const r=document.getElementById("guide");if(!r)return;const a="https://play.pokemonshowdown.com/sprites/trainers/",n=[{name:"Petra",type:"Roca",img:"roxanne-gen3.png",team:"Nv 14 Geodude, Nv 15 Nosepass.",strat:"Agua o Planta (Mudkip/Treecko/Lotad/Shroomish)."},{name:"Marcial",type:"Lucha",img:"brawly-gen3.png",team:"Nv 16 Machop, Nv 19 Makuhita.",strat:"Volador (Taillow/Wingull) o Psíquico (Ralts)."},{name:"Erico",type:"Eléctrico",img:"wattson-gen3.png",team:"Nv 20 Voltorb, Nv 20 Electrike, Nv 22 Magneton, Nv 24 Manectric.",strat:"Tierra (Marshtomp/Geodude). Cuidado con Magneton (Acero)."},{name:"Candela",type:"Fuego",img:"flannery-gen3.png",team:"Nv 24 Numel, Nv 24 Slugma, Nv 26 Camerupt, Nv 29 Torkoal.",strat:"Agua (Marshtomp/Tentacool/Gyarados)."},{name:"Norman",type:"Normal",img:"norman-gen3.png",team:"Nv 27 Spinda, Nv 27 Vigoroth, Nv 29 Linoone, Nv 31 Slaking.",strat:"Lucha (Breloom). Usa Protección/Excavar contra Slaking."},{name:"Alana",type:"Volador",img:"winona-gen3.png",team:"Nv 29 Swablu, Nv 29 Tropius, Nv 30 Pelipper, Nv 31 Skarmory, Nv 33 Altaria.",strat:"Rayo Hielo. Electricidad para todo menos Altaria."},{name:"Vito y Leti",type:"Psíquico",img:"tateandliza-gen3.png",team:"Nv 41 Claydol, Nv 41 Xatu, Nv 42 Lunatone, Nv 42 Solrock.",strat:"Surf (Swampert) golpea a ambos. Siniestro o Fantasma."},{name:"Galano",type:"Agua",img:"juan-gen3.png",team:"Nv 41 Luvdisc, Nv 41 Whiscash, Nv 43 Sealeo, Nv 43 Crawdaunt, Nv 46 Kingdra.",strat:"Planta y Electricidad. Kingdra necesita daño neutro fuerte."}],s=[{name:"Sixto",type:"Siniestro",img:"sidney-gen3.png",team:"Mightyena (46), Shiftry (48), Cacturne (46), Crawdaunt (48), Absol (49).",strat:"Lucha (Breloom/Hariyama) barre casi todo. Fuego o Volador para Shiftry/Cacturne."},{name:"Fátima",type:"Fantasma",img:"phoebe-gen3.png",team:"Dusclops (48), Banette (49), Sableye (50), Banette (49), Dusclops (51).",strat:"Siniestro (Absol/Mightyena) o Fantasma. Sableye solo tiene debilidad a Hada (no existe en Gen 3), usa fuerza bruta."},{name:"Nívea",type:"Hielo",img:"glacia-gen3.png",team:"Sealeo (50), Glalie (50), Sealeo (52), Glalie (52), Walrein (53).",strat:"Lucha (Breloom) y Electricidad (Manectric). Walrein es muy tanque, cuidado con Frío Polar."},{name:"Dracón",type:"Dragón",img:"drake-gen3.png",team:"Shelgon (52), Altaria (54), Kingdra (53), Flygon (53), Salamence (55).",strat:"Rayo Hielo es obligatorio (x4 a casi todos). Kingdra es débil a Dragón."},{name:"Plubio",type:"Campeón (Agua)",img:"wallace-gen3.png",team:"Wailord (57), Tentacruel (55), Ludicolo (56), Whiscash (56), Gyarados (56), Milotic (58).",strat:"Planta para Whiscash/Wailord. Electricidad para Gyarados/Tentacruel/Milotic. Volador para Ludicolo."}],o=e=>{const t=document.getElementById("item-dex-container");t&&(t.innerHTML=e.map(p=>`
         <div class="recommendation-card" style="display:flex; gap:1rem; align-items:center; background:rgba(255,255,255,0.03); border-left: 3px solid ${m(p.category)}">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${p.img}.png" 
                 onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'"
                 style="width:48px; height:48px; image-rendering:pixelated; flex-shrink:0;">
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <h4 style="color:#fff; margin-bottom:0.15rem; font-size:1rem;">${p.name}</h4>
                  <span class="type-pill" style="font-size:0.65rem; background:rgba(255,255,255,0.1); padding:2px 6px;">${p.category}</span>
              </div>
              <p style="font-size:0.85rem; color:var(--ray-green); margin-bottom:0.25rem;">📍 ${p.loc}</p>
              <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.3;"><em>${p.desc}</em></p>
            </div>
         </div>
      `).join(""),e.length===0&&(t.innerHTML='<p style="text-align:center; color:#666; width:100%; padding:2rem;">No se encontraron objetos.</p>'))};function m(e){return e==="Evolución"?"#f0932b":e==="Combate"?"#eb4d4b":e==="Utilidad"?"#48dbfb":e==="Clave"?"#f1c40f":e==="Baya"?"#7bed9f":e==="Concurso"?"#ff6b81":"#ccc"}const l=`
    <div style="margin-bottom: 1.5rem; position:relative;">
        <input type="text" id="item-search" class="search-input" placeholder="Buscar objeto (ej: Restos, Fuego...)" 
               style="padding-left: 3rem;">
        <span style="position:absolute; left:1rem; top:50%; transform:translateY(-50%); font-size:1.2rem; opacity:0.7;">🔍</span>
    </div>
    <div id="item-dex-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1rem; max-height:60vh; overflow-y:auto; padding-right:0.5rem;">
        <!-- Items Injected Here -->
    </div>
  `;r.innerHTML=`
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
       ${n.map((e,t)=>`
         <div class="emulator-box" style="display:flex; gap:1rem; align-items:center;">
            <img src="${a}${e.img}" style="height:90px; filter:drop-shadow(0 4px 4px rgba(0,0,0,0.5));">
            <div>
              <h3 style="margin-bottom:0.25rem;">${t+1}. ${e.name} <span style="font-size:0.8em; opacity:0.7;">(${e.type})</span></h3>
              <p class="pixel-text" style="font-size:0.85rem; margin-bottom:0.5rem; color:#ccc;">${e.team}</p>
              <p style="font-size:0.85rem; color:var(--ray-green-glow);"><em>Estrategia:</em> ${e.strat}</p>
            </div>
         </div>
       `).join("")}
    </div>

    <!-- ELITE FOUR -->
    <div id="tab-e4" class="tab-content hidden" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1rem;">
       ${s.map((e,t)=>`
         <div class="emulator-box" style="display:flex; gap:1rem; align-items:center; border-color:${t===4?"var(--ray-yellow)":"var(--glass-border)"};">
            <img src="${a}${e.img}" style="height:90px; filter:drop-shadow(0 4px 4px rgba(0,0,0,0.5));">
            <div>
              <h3 style="margin-bottom:0.25rem; color:${t===4?"var(--ray-yellow)":"white"};">${e.name} <span style="font-size:0.8em; opacity:0.7;">(${e.type})</span></h3>
              <p class="pixel-text" style="font-size:0.85rem; margin-bottom:0.5rem; color:#ccc;">${e.team}</p>
              <p style="font-size:0.85rem; color:var(--ray-green-glow);"><em>Estrategia:</em> ${e.strat}</p>
            </div>
         </div>
       `).join("")}
    </div>

    <!-- MOs / MTs -->
    <div id="tab-items" class="tab-content hidden">
       <div class="emulator-box">
        <h3>Ubicación de MOs</h3>
        <ul style="list-style: none; margin-top: 1rem; display:grid; gap:0.75rem;">
          ${le.map(e=>(e.name.includes("Surf")||e.name.includes("Cascada")||e.name.includes("Buceo"),e.name.includes("Vuelo"),e.name.includes("Golpe Roca")||e.name.includes("Fuerza"),e.name.includes("Corte"),e.name.includes("Destello"),`
            <li style="padding: 0.75rem; background:rgba(255,255,255,0.03); border-radius:12px; display:flex; align-items:center; gap:1rem;">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hm-normal.png" style="width:32px; height:32px; image-rendering:pixelated;">
              <div>
                  <span style="color: var(--ray-green); font-weight: bold; font-size:1rem;">${e.name}</span><br>
                  <span style="font-size: 0.85em; color: #aaa;">📍 ${e.location}</span>
              </div>
            </li>
          `)).join("")}
        </ul>
      </div>
      <div class="emulator-box" style="margin-top:1rem;">
        <h3>MTs Importantes</h3>
        <ul style="list-style: none; margin-top: 1rem; display:grid; gap:0.75rem;">
          ${ce.map(e=>`
            <li style="padding: 0.75rem; background:rgba(255,255,255,0.03); border-radius:12px; display:flex; align-items:center; gap:1rem;">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-normal.png" style="width:32px; height:32px; image-rendering:pixelated;">
              <div>
                  <span style="color: #f7cf52; font-weight: bold; font-size:1rem;">${e.name}</span><br>
                  <span style="font-size: 0.85em; color: #aaa;">📍 ${e.location}</span>
              </div>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>

    <!-- ITEM DEX (SEARCHABLE) -->
    <div id="tab-held" class="tab-content hidden">
       ${l}
    </div>

    <!-- SAVE SCANNER -->
    <div id="tab-scanner" class="tab-content hidden">
        <div id="save-scanner-root"></div>
    </div>
  `;const u=document.getElementById("item-search");u&&(u.addEventListener("input",e=>{const t=e.target.value.toLowerCase(),p=q.filter(i=>i.name.toLowerCase().includes(t)||i.category.toLowerCase().includes(t)||i.desc.toLowerCase().includes(t)||i.loc.toLowerCase().includes(t));o(p)}),o(q));const g=document.querySelectorAll(".guide-tab"),d=document.querySelectorAll(".tab-content");g.forEach(e=>{e.addEventListener("click",()=>{if(e.id==="scanner-btn"){g.forEach(t=>t.classList.remove("active")),d.forEach(t=>t.classList.add("hidden")),e.classList.add("active"),document.getElementById("tab-scanner").classList.remove("hidden"),ge();return}g.forEach(t=>t.classList.remove("active")),d.forEach(t=>t.classList.add("hidden")),e.classList.add("active"),document.getElementById(`tab-${e.dataset.tab}`).classList.remove("hidden")})})}const x=["Normal","Fuego","Agua","Eléctrico","Planta","Hielo","Lucha","Veneno","Tierra","Volador","Psíquico","Bicho","Roca","Fantasma","Dragón","Siniestro","Acero"],B=[[1,1,1,1,1,1,1,1,1,1,1,1,.5,0,1,1,.5],[1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5,1,2],[1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5,1,1],[1,1,2,.5,.5,1,1,1,0,2,1,1,1,1,.5,1,1],[1,.5,2,1,.5,1,1,.5,2,.5,1,.5,2,1,.5,1,.5],[1,.5,.5,1,2,.5,1,1,2,2,1,1,1,1,2,1,.5],[2,1,1,1,1,2,1,.5,1,.5,.5,.5,2,0,1,2,2],[1,1,1,1,2,1,1,.5,.5,1,1,1,.5,.5,1,1,0],[1,2,1,2,.5,1,1,2,1,0,1,.5,2,1,1,1,2],[1,1,1,.5,2,1,2,1,1,1,1,2,.5,1,1,1,.5],[1,1,1,1,1,1,2,2,1,1,.5,1,1,1,1,0,.5],[1,.5,1,1,2,1,.5,.5,1,.5,2,1,1,.5,1,2,.5],[1,2,1,1,1,2,.5,1,.5,2,1,2,1,1,1,1,.5],[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,.5,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,.5],[1,1,1,1,1,1,.5,1,1,1,2,1,1,2,1,.5,.5],[1,.5,.5,.5,1,2,1,1,1,1,1,1,2,1,1,1,.5]];let k=[];async function ve(){const r=document.getElementById("calculator");if(!r)return;if(r.innerHTML=`
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
  `,k.length===0)try{k=(await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")).json()).results}catch(s){console.error("Error fetching pokemon",s)}const a=document.getElementById("poke-search"),n=document.getElementById("search-suggestions");a.addEventListener("input",s=>{const o=s.target.value.toLowerCase();if(n.innerHTML="",o.length<2){n.style.display="none";return}const m=k.filter(l=>l.name.includes(o)).slice(0,8);m.length>0?(n.style.display="block",n.innerHTML=m.map(l=>{const g=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${l.url.split("/")[6]}.png`;return`
                <div class="suggestion-item" data-url="${l.url}" style="padding:0.4rem 0.8rem; cursor:pointer; border-bottom:1px solid var(--glass-border); color:#fff; transition:0.2s; font-size:0.9rem; display:flex; align-items:center; gap:0.5rem;">
                    <img src="${g}" alt="${l.name}" style="width:30px; height:30px; object-fit:contain;">
                    <span>${l.name.toUpperCase()}</span>
                </div>
              `}).join(""),document.querySelectorAll(".suggestion-item").forEach(l=>{l.addEventListener("click",()=>{a.value=l.textContent.trim(),n.style.display="none",fe(l.dataset.url)}),l.addEventListener("mouseenter",()=>l.style.background="var(--glass-shine)"),l.addEventListener("mouseleave",()=>l.style.background="transparent")})):n.style.display="none"})}async function fe(r){const a=document.getElementById("calc-results"),n=document.getElementById("enemy-header");a.style.display="grid",n.innerHTML='<div style="padding:2rem;">Cargando datos...</div>';try{const o=await(await fetch(r)).json(),m=o.types.map(l=>l.type.name.charAt(0).toUpperCase()+l.type.name.slice(1));he(m,o.name.toUpperCase(),o.sprites.front_default)}catch(s){console.error(s),n.innerHTML="Error cargando detalles."}}function he(r,a,n){const s=document.getElementById("calc-results"),o=document.getElementById("enemy-header"),m=document.getElementById("weakness-info"),l=document.getElementById("team-analysis");s.style.display="grid";let u="";n&&(u+=`<img src="${n}" style="width:100px; height:100px; animation: float 3s infinite ease-in-out;">`),u+=`<h2 style="margin:0.25rem 0; color:var(--text-main); font-size:1.4rem; text-shadow:0 0 10px rgba(45,158,109,0.5);">${a}</h2>`,u+=`<div class="poke-types" style="justify-content:center; gap:0.25rem;">
      ${r.map(i=>`<span class="type-pill type-${i.toLowerCase()}">${M(i)}</span>`).join("")}
    </div>`,o.innerHTML=u;const g={};x.forEach(i=>{let c=1;r.forEach(h=>{const f=x.indexOf(i),y=x.indexOf(h);f!==-1&&y!==-1&&(c*=B[f][y])}),c!==1&&(g[i]=c)});const d=Object.entries(g).filter(([i,c])=>c>1).sort((i,c)=>c[1]-i[1]),e=Object.entries(g).filter(([i,c])=>c<1).sort((i,c)=>i[1]-c[1]);let t='<div style="display:grid; gap:1rem;">';d.length>0?(t+=`<div><h4 style="color:#ff6b6b; margin-bottom:0.5rem; text-align:center; font-size:0.9rem;">⚠️ Muy Débil A</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.25rem; justify-content:center;">`,t+=d.map(([i,c])=>`
            <span class="type-pill type-${i.toLowerCase()}">
                ${M(i)} <strong style="color:white; margin-left:2px;">x${c}</strong>
            </span>
        `).join(""),t+="</div></div>"):t+='<div style="text-align:center;"><span style="color:var(--text-muted); font-size:0.8rem;">Sin debilidades</span></div>',e.length>0?(t+=`<div><h4 style="color:#48dbfb; margin-bottom:0.5rem; text-align:center; font-size:0.9rem; margin-top:0.5rem;">🛡️ Resiste</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.25rem; justify-content:center;">`,t+=e.map(([i,c])=>`
            <span class="type-pill type-${i.toLowerCase()}" style="opacity:0.9;">
                ${M(i)} x${c}
            </span>
        `).join(""),t+="</div></div>"):t+='<div style="text-align:center;"><span style="color:var(--text-muted); font-size:0.8rem;">Daño neutro</span></div>',t+="</div>",m.innerHTML=t;const p=U.map(i=>{let c={name:"Ninguno",mod:0};i.moves.forEach(f=>{if(f.category==="Status")return;let y=1;r.forEach(C=>{const b=x.indexOf(f.type),v=x.indexOf(C);b!==-1&&v!==-1&&(y*=B[b][v])}),i.types.includes(f.type)&&(y*=1.5),y>c.mod&&(c={name:f.name,mod:y,type:f.type})});let h=0;return r.forEach(f=>{let y=1;i.types.forEach(C=>{const b=x.indexOf(f),v=x.indexOf(C);b!==-1&&v!==-1&&(y*=B[b][v])}),y>h&&(h=y)}),{member:i,bestMove:c,maxReceiveMod:h}});p.sort((i,c)=>c.bestMove.mod-i.bestMove.mod),l.innerHTML=p.map(i=>{let c="#a0a0a0";return i.bestMove.mod>=2&&(c="#2d9e6d"),i.maxReceiveMod>=2&&(c="#ff4081"),`
        <div class="recommendation-card" style="border-color:${c}; padding:0.5rem; margin-top:0;">
          <img src="${i.member.image}" style="width:40px; height:40px;">
          <div style="flex:1;">
            <div style="font-weight:bold; font-size:0.9rem; color:white;">${i.member.name}</div>
            <div style="font-size:0.75rem; color:#ccc;">
              Ataca con: <span style="color:${i.bestMove.mod>=1.5?"var(--ray-green-glow)":"inherit"};">${i.bestMove.name}</span> 
              (${i.bestMove.mod.toFixed(1)}x)
            </div>
          </div>
          <div style="font-size:0.75rem; text-align:right;">
             <div style="color:${i.maxReceiveMod>=2?"#ff6b6b":"#a0a0a0"}">Recibe x${i.maxReceiveMod}</div>
          </div>
        </div>
      `}).join("")}document.addEventListener("DOMContentLoaded",()=>{re(),se(),ye(),ve();const r=document.querySelectorAll(".nav-btn"),a=document.querySelectorAll(".section");r.forEach(n=>{n.addEventListener("click",()=>{r.forEach(o=>o.classList.remove("active")),a.forEach(o=>o.classList.remove("active")),n.classList.add("active");const s=n.getAttribute("data-target");document.getElementById(s).classList.add("active")})})});
