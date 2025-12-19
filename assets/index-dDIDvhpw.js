(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(i){if(i.ep)return;i.ep=!0;const u=s(i);fetch(i.href,u)}})();const U=[{name:"Swampert",id:260,types:["Agua","Tierra"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",location:"Inicial (Mudkip)",role:"Tanque Mixto / Líder",item:"Arena Fina",nature:"Plácida / Audaz",moves:[{name:"Surf",type:"Agua",category:"Especial"},{name:"Terremoto",type:"Tierra",category:"Físico"},{name:"Rayo Hielo",type:"Hielo",category:"Especial"},{name:"Cascada",type:"Agua",category:"Físico"}]},{name:"Gardevoir",id:282,types:["Psíquico"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",location:"Ruta 102 (Ralts)",role:"Atacante Especial",item:"Cuchara Torcida",nature:"Modesta / Miedosa",moves:[{name:"Psíquico",type:"Psíquico",category:"Especial"},{name:"Rayo",type:"Eléctrico",category:"Especial"},{name:"Paz Mental",type:"Psíquico",category:"Estado"},{name:"Bola Sombra",type:"Fantasma",category:"Físico"}]},{name:"Breloom",id:286,types:["Planta","Lucha"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",location:"Bosque Petalia (Shroomish)",role:"Físico / Espora",item:"Semilla Milagro",nature:"Firme / Alegre",moves:[{name:"Espora",type:"Planta",category:"Estado"},{name:"Gancho Alto",type:"Lucha",category:"Físico"},{name:"Giga Drenado",type:"Planta",category:"Especial"},{name:"Corpulencia",type:"Lucha",category:"Estado"}]},{name:"Manectric",id:310,types:["Eléctrico"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",location:"Ruta 110 (Electrike)",role:"Velocidad Especial",item:"Imán",nature:"Modesta / Miedosa",moves:[{name:"Rayo",type:"Eléctrico",category:"Especial"},{name:"Mordisco",type:"Siniestro",category:"Especial"},{name:"Onda Trueno",type:"Eléctrico",category:"Estado"},{name:"Ataque Rápido",type:"Normal",category:"Físico"}]},{name:"Flygon",id:330,types:["Tierra","Dragón"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",location:"Ruta 111 (Trapinch)",role:"Atacante Físico",item:"Arena Fina",nature:"Firme / Alegre",moves:[{name:"Terremoto",type:"Tierra",category:"Físico"},{name:"Avalancha",type:"Roca",category:"Físico"},{name:"Garra Dragón",type:"Dragón",category:"Especial"},{name:"Vuelo",type:"Volador",category:"Físico"}]},{name:"Salamence",id:373,types:["Dragón","Volador"],image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",location:"Cascada Meteoro (Bagon)",role:"Potencia Bruta",item:"Colmillo Dragón",nature:"Pícara / Ingenua",moves:[{name:"Vuelo",type:"Volador",category:"Físico"},{name:"Garra Dragón",type:"Dragón",category:"Especial"},{name:"Lanzallamas",type:"Fuego",category:"Especial"},{name:"Demolición",type:"Lucha",category:"Físico"}]}],W={Normal:"Normal",Fire:"Fuego",Water:"Agua",Grass:"Planta",Electric:"Eléctrico",Ice:"Hielo",Fighting:"Lucha",Poison:"Veneno",Ground:"Tierra",Flying:"Volador",Psychic:"Psíquico",Bug:"Bicho",Rock:"Roca",Ghost:"Fantasma",Dragon:"Dragón",Steel:"Acero",Dark:"Siniestro"};function w(r){if(!r)return"";const o=r.charAt(0).toUpperCase()+r.slice(1).toLowerCase();return W[o]||r}function re(){const r=document.getElementById("team");r&&(r.innerHTML=`
    <h2 style="margin-bottom: 2rem; text-align: center;">Equipo Recomendado</h2>
    <div class="team-grid">
      ${U.map(o=>`
        <div class="pokemon-card">
          <div class="card-header">
            <span class="poke-name">${o.name}</span>
            <div class="poke-types">
              ${o.types.map(s=>`<span class="type-${s.toLowerCase()}">${w(s)}</span>`).join("")}
            </div>
          </div>
          <div class="poke-img-container">
            <img src="${o.image}" alt="${o.name}" class="poke-img">
          </div>
          <div class="poke-details">
            <div class="detail-row">
              <span class="detail-label">Rol</span>
              <span>${o.role}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Objeto</span>
              <span>${o.item}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Naturaleza</span>
              <span>${o.nature}</span>
            </div>
          </div>
          <div class="moves-list">
            ${o.moves.map(s=>`
              <div class="move-tag">
                <div style="font-weight:bold;">${s.name}</div>
                <div style="font-size:0.7em; opacity:0.7;">${w(s.type)}</div>
              </div>
            `).join("")}
          </div>
          <div style="margin-top:1rem; font-size:0.85rem; color:var(--text-secondary); text-align:center;">
             📍 ${o.location}
          </div>
        </div>
      `).join("")}
    </div>
  `)}const se=[{name:"Firme",plus:"Ataque",minus:"At. Esp"},{name:"Tímida",plus:"-",minus:"-"},{name:"Osada",plus:"Defensa",minus:"Ataque"},{name:"Audaz",plus:"Ataque",minus:"Velocidad"},{name:"Serena",plus:"Def. Esp",minus:"Ataque"},{name:"Cauta",plus:"Def. Esp",minus:"At. Esp"},{name:"Dócil",plus:"-",minus:"-"},{name:"Amable",plus:"Def. Esp",minus:"Defensa"},{name:"Fuerte",plus:"-",minus:"-"},{name:"Activa",plus:"Velocidad",minus:"Defensa"},{name:"Agitada",plus:"Defensa",minus:"At. Esp"},{name:"Alegre",plus:"Velocidad",minus:"At. Esp"},{name:"Floja",plus:"Defensa",minus:"Def. Esp"},{name:"Huraña",plus:"Ataque",minus:"Defensa"},{name:"Afable",plus:"At. Esp",minus:"Defensa"},{name:"Modesta",plus:"At. Esp",minus:"Ataque"},{name:"Ingenua",plus:"Velocidad",minus:"Def. Esp"},{name:"Pícara",plus:"Ataque",minus:"Def. Esp"},{name:"Mansa",plus:"At. Esp",minus:"Velocidad"},{name:"Rara",plus:"-",minus:"-"},{name:"Alocada",plus:"At. Esp",minus:"Def. Esp"},{name:"Plácida",plus:"Defensa",minus:"Velocidad"},{name:"Grosera",plus:"Def. Esp",minus:"Velocidad"},{name:"Seria",plus:"-",minus:"-"},{name:"Miedosa",plus:"Velocidad",minus:"Ataque"}],ie=se;function ne(){const r=document.getElementById("reference");if(!r)return;r.innerHTML=`
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
  `;const o=document.getElementById("natures-grid"),s=document.getElementById("ref-search");function l(i=""){const u=i.toLowerCase(),c=ie.filter(p=>p.name.toLowerCase().includes(u));if(c.length===0){o.innerHTML='<p style="grid-column: 1/-1; text-align: center; color: #666;">No se encontraron naturalezas.</p>';return}o.innerHTML=c.map(p=>{const y=p.plus==="-"&&p.minus==="-";return`
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
               
               ${y?'<div style="position:absolute; inset:0; background:rgba(255,255,255,0.02); pointer-events:none;"></div>':""}

               <h4 style="font-size: 1.1rem; margin-bottom: 0.75rem; color: #fff;">${p.name}</h4>
               
               <div style="width: 100%; border-top: 1px solid rgba(255,255,255,0.1); margin: 0.5rem 0;"></div>

               ${y?'<span style="color: #888; font-size: 0.85rem;">Neutra</span>':`
                   <div style="display:flex; width:100%; justify-content:space-between; font-size:0.8rem;">
                     <span style="color: #4cd137;">▲ ${p.plus}</span>
                     <span style="color: #e84118;">▼ ${p.minus}</span>
                   </div>
                 `}
            </div>
        `}).join("")}l(),s.addEventListener("input",i=>{l(i.target.value)})}const le=[{name:"MO01 Corte",location:"Ciudad Férrica (Casa del Cortador)"},{name:"MO02 Vuelo",location:"Ruta 119 (Tras vencer al Rival)"},{name:"MO03 Surf",location:"Gimnasio de Petalia (Tras vencer a Norman)"},{name:"MO04 Fuerza",location:"Túnel Verdegal (Tras romper las rocas)"},{name:"MO05 Destello",location:"Cueva Granito (Montañero en la entrada)"},{name:"MO06 Golpe Roca",location:"Ciudad Malvalona (Casa al sureste)"},{name:"MO07 Cascada",location:"Gimnasio de Arrecípolis (Tras el evento del despertar)"},{name:"MO08 Buceo",location:"Ciudad Algaria (Casa de Máximo)"}],ce=[{name:"MT26 Terremoto",location:"Caverna Abisal (Cueva) / Recogida (Nivel 91+)"},{name:"MT13 Rayo Hielo",location:"Nao Abandonada / Casino de Malvalona (4000 fichas)"},{name:"MT24 Rayo",location:"Ciudad Malvalona (Misión de Erico) / Casino"},{name:"MT35 Lanzallamas",location:"Casino de Malvalona (4000 fichas)"},{name:"MT30 Bola Sombra",location:"Monte Pírico"},{name:"MT06 Tóxico",location:"Senda Ígnea"},{name:"MT02 Garra Dragón",location:"Cascada Meteoro (Requiere Surf/Cascada)"},{name:"MT31 Demolición",location:"Ciudad Arrecípolis / Nao Abandonada"},{name:"MT40 Golpe Aéreo",location:"Gimnasio de Arborada (Premio)"}],N=[{name:"Piedra Fuego",category:"Evolución",loc:"Senda Ígnea (Fuerza) / Parte Roja",img:"fire-stone",desc:"Evoluciona a Vulpix, Growlithe, Eevee."},{name:"Piedra Agua",category:"Evolución",loc:"Nao Abandonada / Parte Azul",img:"water-stone",desc:"Evoluciona a Poliwhirl, Shellder, Staryu, Eevee, Lombre."},{name:"Piedra Trueno",category:"Evolución",loc:"Malvalanova / Parte Amarilla",img:"thunder-stone",desc:"Evoluciona a Pikachu, Eevee."},{name:"Piedra Hoja",category:"Evolución",loc:"Ruta 119 / Parte Verde",img:"leaf-stone",desc:"Evoluciona a Gloom, Weepinbell, Exeggcute, Nuzleaf."},{name:"Piedra Lunar",category:"Evolución",loc:"Cascada Meteoro / Lunatone (5%)",img:"moon-stone",desc:"Evoluciona a Nidorina/o, Clefairy, Jigglypuff, Skitty."},{name:"Piedra Solar",category:"Evolución",loc:"Centro Espacial / Solrock (5%)",img:"sun-stone",desc:"Evoluciona a Gloom, Sunkern."},{name:"Escama Dragón",category:"Evolución",loc:"Bagon/Horsea (5%) / Pilar Celeste",img:"dragon-scale",desc:"Evoluciona Seadra a Kingdra (Intercambio)."},{name:"Revestimiento Metálico",category:"Evolución",loc:"Malvalanova / Magnemite (5%)",img:"metal-coat",desc:"Evoluciona Onix/Scyther (Intercambio). Potencia Acero."},{name:"Roca del Rey",category:"Evolución",loc:"Ciudad Algaria (Máximo) / Recogida",img:"kings-rock",desc:"Evoluciona Poliwhirl/Slowpoke (Intercambio). Puede hacer retroceder."},{name:"Mejora",category:"Evolución",loc:"Torre Batalla (Premio)",img:"up-grade",desc:"Evoluciona Porygon a Porygon2."},{name:"Diente Marino",category:"Evolución",loc:"Ciudad Portual (Escáner)",img:"deep-sea-tooth",desc:"Evoluciona Clamperl a Huntail. Dobla At. Esp de Clamperl."},{name:"Escama Marina",category:"Evolución",loc:"Ciudad Portual (Escáner)",img:"deep-sea-scale",desc:"Evoluciona Clamperl a Gorebyss. Dobla Def. Esp de Clamperl."},{name:"Restos",category:"Combate",loc:"S.S. Tidal (Basura) / Torre Batalla",img:"leftovers",desc:"Recupera 1/16 PS cada turno."},{name:"Cinta Elegida",category:"Combate",loc:"Torre Batalla (64 BP)",img:"choice-band",desc:"Sube Ataque x1.5 pero bloquea movimiento."},{name:"Banda Focus",category:"Combate",loc:"Torre Batalla (64 BP)",img:"focus-band",desc:"10% probabilidad de aguantar con 1 PS."},{name:"Periscopio",category:"Combate",loc:"Torre Batalla (64 BP)",img:"scope-lens",desc:"Aumenta índice de golpe crítico."},{name:"Hierba Blanca",category:"Combate",loc:"Torre Batalla (48 BP)",img:"white-herb",desc:"Restaura stats bajados una vez."},{name:"Hierba Mental",category:"Combate",loc:"Ciudad Arborada / Torre Batalla",img:"mental-herb",desc:"Cura atracción y mofa."},{name:"Garra Rápida",category:"Combate",loc:"Ciudad Férrica (Escuela)",img:"quick-claw",desc:"20% probabilidad de atacar primero."},{name:"Campana Concha",category:"Combate",loc:"Cueva Cardumen (4 Sales/Conchas)",img:"shell-bell",desc:"Cura 1/8 del daño infligido."},{name:"Polvo Brillo",category:"Combate",loc:"Torre Batalla (64 BP)",img:"bright-powder",desc:"Baja la precisión del rival."},{name:"Lodo Negro",category:"Combate",loc:"Grimer/Muk (5%)",img:"black-sludge",desc:"Cura a Veneno, daña a otros."},{name:"Cinturón Negro",category:"Combate",loc:"Ruta 115",img:"black-belt",desc:"Potencia tipo Lucha (+10%)."},{name:"Gafas de Sol",category:"Combate",loc:"Ruta 116",img:"black-glasses",desc:"Potencia tipo Siniestro (+10%)."},{name:"Carbón",category:"Combate",loc:"Lavacalda (Herboristería)",img:"charcoal",desc:"Potencia tipo Fuego (+10%)."},{name:"Colmillo Dragón",category:"Combate",loc:"Cascada Meteoro (Dracónida)",img:"dragon-fang",desc:"Potencia tipo Dragón (+10%)."},{name:"Piedra Dura",category:"Combate",loc:"Casa Treta / Nao Abandonada",img:"hard-stone",desc:"Potencia tipo Roca (+10%)."},{name:"Imán",category:"Combate",loc:"Malvalanova",img:"magnet",desc:"Potencia tipo Eléctrico (+10%)."},{name:"Semilla Milagro",category:"Combate",loc:"Ruta 104 (Bosque Petalia)",img:"miracle-seed",desc:"Potencia tipo Planta (+10%)."},{name:"Agua Mística",category:"Combate",loc:"Forma Castform (Instituto Meteorológico)",img:"mystic-water",desc:"Potencia tipo Agua (+10%)."},{name:"Antiderretir",category:"Combate",loc:"Cueva Cardumen",img:"never-melt-ice",desc:"Potencia tipo Hielo (+10%)."},{name:"Flecha Venenosa",category:"Combate",loc:"Roselia/Cacnea salvaje (5%)",img:"poison-barb",desc:"Potencia tipo Veneno (+10%)."},{name:"Pico Afilado",category:"Combate",loc:"Ruta 124 / Doduo salvaje",img:"sharp-beak",desc:"Potencia tipo Volador (+10%)."},{name:"Pañuelo Seda",category:"Combate",loc:"Pueblo Azuliza",img:"silk-scarf",desc:"Potencia tipo Normal (+10%)."},{name:"Polvo Plata",category:"Combate",loc:"Ruta 120 / Masquerain salvaje",img:"silver-powder",desc:"Potencia tipo Bicho (+10%)."},{name:"Arena Fina",category:"Combate",loc:"Ruta 109 / Trapinch salvaje",img:"soft-sand",desc:"Potencia tipo Tierra (+10%)."},{name:"Hechizo",category:"Combate",loc:"Monte Pírico / Shuppet salvaje",img:"spell-tag",desc:"Potencia tipo Fantasma (+10%)."},{name:"Cuchara Torcida",category:"Combate",loc:"Abra salvaje (5%)",img:"twisted-spoon",desc:"Potencia tipo Psíquico (+10%)."},{name:"Repartir Exp",category:"Utilidad",loc:"Ciudad Férrica (Sr. Peñas)",img:"exp-share",desc:"Comparte experiencia con el equipo."},{name:"Moneda Amuleto",category:"Utilidad",loc:"Vila Raiz (Tras 5ª medalla)",img:"amulet-coin",desc:"Doble dinero si participa en combate."},{name:"Huevo Suerte",category:"Utilidad",loc:"Raro (Chansey Salvaje)",img:"lucky-egg",desc:"Gana +50% experiencia."},{name:"Piedra Eterna",category:"Utilidad",loc:"Cueva Granito / Geodude (5%)",img:"everstone",desc:"Impide evolución / Hereda naturaleza."},{name:"Campana Alivio",category:"Utilidad",loc:"Club Fans (Portual)",img:"soothe-bell",desc:"Aumenta ganancia de amistad."},{name:"Bola de Humo",category:"Utilidad",loc:"Casa Treta / Koffing (5%)",img:"smoke-ball",desc:"Huida garantizada de salvajes."},{name:"Amuleto",category:"Utilidad",loc:"Monte Pírico",img:"cleanse-tag",desc:"Reduce encuentros salvajes (1er slot)."},{name:"Vestidura",category:"Utilidad",loc:"Ruta 111 (Familia Estrate)",img:"macho-brace",desc:"Doble EVs ganados, mitad velocidad."},{name:"Bici Carrera",category:"Clave",loc:"Ciudad Malvalona (Rydel)",img:"mach-bike",desc:"Sube pendientes de barro."},{name:"Bici Acrobática",category:"Clave",loc:"Ciudad Malvalona (Rydel)",img:"acro-bike",desc:"Salta piedras y rieles."},{name:"Caña Vieja",category:"Clave",loc:"Pueblo Azuliza",img:"old-rod",desc:"Pesca Magikarp."},{name:"Caña Buena",category:"Clave",loc:"Ruta 118",img:"good-rod",desc:"Pesca Pokémon de nivel medio."},{name:"Supercaña",category:"Clave",loc:"Ciudad Algaria",img:"super-rod",desc:"Pesca Pokémon fuertes."},{name:"Buscaobjetos",category:"Clave",loc:"Ruta 110",img:"itemfinder",desc:"Detecta objetos invisibles."},{name:"Gafas Aislantes",category:"Clave",loc:"Lavacalda (Rival)",img:"go-goggles",desc:"Permite cruzar el desierto."},{name:"Saco Hollín",category:"Clave",loc:"Ruta 113",img:"soot-sack",desc:"Recoge ceniza para flautas/objetos."},{name:"Baya Zidra",category:"Baya",loc:"Rutas / Recogida",img:"sitrus-berry",desc:"Recupera 30 PS."},{name:"Baya Ziuela",category:"Baya",loc:"Rutas / Recogida",img:"lum-berry",desc:"Cura cualquier estado."},{name:"Baya Atania",category:"Baya",loc:"Rutas",img:"chesto-berry",desc:"Despierta al Pokémon."},{name:"Baya Caquic",category:"Baya",loc:"Rutas",img:"leppa-berry",desc:"Restaura 10 PP."},{name:"Baya Lichi",category:"Baya",loc:"Isla Espejismo",img:"liechi-berry",desc:"Sube Ataque con PS bajos."},{name:"Baya Gonlan",category:"Baya",loc:"Coliseo / XD",img:"ganlon-berry",desc:"Sube Defensa con PS bajos."},{name:"Baya Aslac",category:"Baya",loc:"Coliseo / XD",img:"salac-berry",desc:"Sube Velocidad con PS bajos."},{name:"Baya Petasi",category:"Baya",loc:"Coliseo / XD",img:"petaya-berry",desc:"Sube At. Esp con PS bajos."},{name:"Baya Yapati",category:"Baya",loc:"Coliseo / XD",img:"apicot-berry",desc:"Sube Def. Esp con PS bajos."},{name:"Pañuelo Rojo",category:"Concurso",loc:"Portual (Max Carisma)",img:"red-scarf",desc:"Mejora Carisma en Concursos."},{name:"Pañuelo Azul",category:"Concurso",loc:"Portual (Max Belleza)",img:"blue-scarf",desc:"Mejora Belleza en Concursos."},{name:"Pañuelo Rosa",category:"Concurso",loc:"Portual (Max Dulzura)",img:"pink-scarf",desc:"Mejora Dulzura en Concursos."},{name:"Pañuelo Verde",category:"Concurso",loc:"Portual (Max Ingenio)",img:"green-scarf",desc:"Mejora Ingenio en Concursos."},{name:"Pañuelo Amarillo",category:"Concurso",loc:"Portual (Max Dureza)",img:"yellow-scarf",desc:"Mejora Dureza en Concursos."}],O=["Treecko","Grovyle","Sceptile","Torchic","Combusken","Blaziken","Mudkip","Marshtomp","Swampert","Poochyena","Mightyena","Zigzagoon","Linoone","Wurmple","Silcoon","Beautifly","Cascoon","Dustox","Lotad","Lombre","Ludicolo","Seedot","Nuzleaf","Shiftry","Nincada","Ninjask","Shedinja","Taillow","Swellow","Shroomish","Breloom","Spinda","Wingull","Pelipper","Surskit","Masquerain","Wailmer","Wailord","Skitty","Delcatty","Kecleon","Baltoy","Claydol","Nosepass","Torkoal","Sableye","Barboach","Whiscash","Luvdisc","Corphish","Crawdaunt","Feebas","Milotic","Carvanha","Sharpedo","Trapinch","Vibrava","Flygon","Makuhita","Hariyama","Electrike","Manectric","Numel","Camerupt","Spheal","Sealeo","Walrein","Cacnea","Cacturne","Snorunt","Glalie","Lunatone","Solrock","Azurill","Spoink","Grumpig","Plusle","Minun","Mawile","Meditite","Medicham","Swablu","Altaria","Wynaut","Duskull","Dusclops","Roselia","Slakoth","Vigoroth","Slaking","Gulpin","Swalot","Tropius","Whismur","Loudred","Exploud","Clamperl","Huntail","Gorebyss","Absol","Shuppet","Banette","Seviper","Zangoose","Relicanth","Aron","Lairon","Aggron","Castform","Volbeat","Illumise","Lileep","Cradily","Anorith","Armaldo","Ralts","Kirlia","Gardevoir","Bagon","Shelgon","Salamence","Beldum","Metang","Metagross","Regirock","Regice","Registeel","Kyogre","Groudon","Rayquaza","Latias","Latios","Jirachi","Deoxys","Chimecho"],C=new Array(412).fill(0);for(let r=1;r<=251;r++)C[r]=r;for(let r=252;r<=276;r++)C[r]=201;const de={Treecko:252,Grovyle:253,Sceptile:254,Torchic:255,Combusken:256,Blaziken:257,Mudkip:258,Marshtomp:259,Swampert:260,Poochyena:261,Mightyena:262,Zigzagoon:263,Linoone:264,Wurmple:265,Silcoon:266,Beautifly:267,Cascoon:268,Dustox:269,Lotad:270,Lombre:271,Ludicolo:272,Seedot:273,Nuzleaf:274,Shiftry:275,Taillow:276,Swellow:277,Wingull:278,Pelipper:279,Ralts:280,Kirlia:281,Gardevoir:282,Surskit:283,Masquerain:284,Shroomish:285,Breloom:286,Slakoth:287,Vigoroth:288,Slaking:289,Nincada:290,Ninjask:291,Shedinja:292,Whismur:293,Loudred:294,Exploud:295,Makuhita:296,Hariyama:297,Azurill:298,Nosepass:299,Skitty:300,Delcatty:301,Sableye:302,Mawile:303,Aron:304,Lairon:305,Aggron:306,Meditite:307,Medicham:308,Electrike:309,Manectric:310,Plusle:311,Minun:312,Volbeat:313,Illumise:314,Roselia:315,Gulpin:316,Swalot:317,Carvanha:318,Sharpedo:319,Wailmer:320,Wailord:321,Numel:322,Camerupt:323,Torkoal:324,Spoink:325,Grumpig:326,Spinda:327,Trapinch:328,Vibrava:329,Flygon:330,Cacnea:331,Cacturne:332,Swablu:333,Altaria:334,Zangoose:335,Seviper:336,Lunatone:337,Solrock:338,Barboach:339,Whiscash:340,Corphish:341,Crawdaunt:342,Baltoy:343,Claydol:344,Lileep:345,Cradily:346,Anorith:347,Armaldo:348,Feebas:349,Milotic:350,Castform:351,Kecleon:352,Shuppet:353,Banette:354,Duskull:355,Dusclops:356,Tropius:357,Chimecho:358,Absol:359,Wynaut:360,Snorunt:361,Glalie:362,Spheal:363,Sealeo:364,Walrein:365,Clamperl:366,Huntail:367,Gorebyss:368,Relicanth:369,Luvdisc:370,Bagon:371,Shelgon:372,Salamence:373,Beldum:374,Metang:375,Metagross:376,Regirock:377,Regice:378,Registeel:379,Latias:380,Latios:381,Kyogre:382,Groudon:383,Rayquaza:384,Jirachi:385,Deoxys:386};for(let r=0;r<O.length;r++){const o=277+r,s=O[r],l=de[s];l&&(C[o]=l)}const pe={0:" ",1:"À",2:"Á",3:"Â",4:"Ç",5:"È",6:"É",7:"Ê",8:"Ë",9:"Ì",11:"Î",12:"Ï",13:"Ò",14:"Ó",15:"Ô",16:"Œ",17:"Ù",18:"Ú",19:"Û",20:"Ñ",21:"ß",22:"à",23:"á",25:"ç",26:"è",27:"é",28:"ê",29:"ë",30:"ì",32:"î",33:"ï",34:"ò",35:"ó",36:"ô",37:"œ",38:"ù",39:"ú",40:"û",41:"ñ",45:"&",46:"+",53:"=",80:"▯",81:"¿",82:"¡",90:"Í",91:"%",92:"(",93:")",104:"â",111:"í",121:"⬆",122:"⬇",123:"⬅",124:"➡",133:"<",134:">",161:"0",162:"1",163:"2",164:"3",165:"4",166:"5",167:"6",168:"7",169:"8",170:"9",171:"!",172:"?",173:".",174:"-",176:"...",177:'"',178:'"',179:"'",180:"'",181:"M",182:"F",184:",",185:"x",186:"/",187:"A",188:"B",189:"C",190:"D",191:"E",192:"F",193:"G",194:"H",195:"I",196:"J",197:"K",198:"L",199:"M",200:"N",201:"O",202:"P",203:"Q",204:"R",205:"S",206:"T",207:"U",208:"V",209:"W",210:"X",211:"Y",212:"Z",213:"a",214:"b",215:"c",216:"d",217:"e",218:"f",219:"g",220:"h",221:"i",222:"j",223:"k",224:"l",225:"m",226:"n",227:"o",228:"p",229:"q",230:"r",231:"s",232:"t",233:"u",234:"v",235:"w",236:"x",237:"y",238:"z",239:"▶",240:":",241:"Ä",242:"Ö",243:"Ü",244:"ä",245:"ö",246:"ü",255:"",0:" "};function me(r){let o="";for(let s=0;s<r.length&&r[s]!==255;s++)o+=pe[r[s]]||"";return o.trim()}class ue{constructor(o){this.data=new DataView(o),this.buffer=o}parse(){const o=this.getGlobalSaveIndex(0),s=this.getGlobalSaveIndex(57344);let l=0;if(o===-1&&s===-1)throw new Error("No se encontró un archivo de guardado válido (Gen 3).");o>s?l=0:l=57344;const i=new Uint8Array(57344);for(let t=0;t<14;t++){const d=l+t*4096,a=this.data.getUint16(d+4084,!0),e=new Uint8Array(this.buffer,d,4096);i.set(e,a*4096)}const p=new DataView(i.buffer).getUint32(4660,!0),y=4664,m=[];if(p>6)return{error:"Datos corruptos o versión no soportada."};for(let t=0;t<p;t++){const d=y+t*100,a=new Uint8Array(i.buffer,d,100);m.push(this.parsePokemon(a))}return{team:m,gameCode:"Emerald"}}getGlobalSaveIndex(o){let s=-1;for(let l=0;l<14;l++){const i=o+l*4096;if(this.data.getUint32(i+4088,!0)!==134291493)return-1;const c=this.data.getUint32(i+4092,!0);c>s&&(s=c)}return s}parsePokemon(o){const s=new DataView(o.buffer,o.byteOffset,o.byteLength),l=s.getUint32(0,!0),i=s.getUint32(4,!0),u=me(o.slice(8,18)),c=l^i,p=new Uint8Array(48);for(let E=0;E<12;E++){const P=s.getUint32(32+E*4,!0)^c;p.set(new Uint8Array(new Int32Array([P]).buffer),E*4)}const y=l%24,t=["GAEM","GAME","GEAM","GEMA","GMAE","GMEA","AGEM","AGME","AEGM","AEMG","AMGE","AMEG","EGAM","EGMA","EAGM","EAMG","EMGA","EMAG","MGAE","MGEA","MAGE","MAEG","MEGA","MEAG"][y],d=(E,H,P)=>{const S=t.indexOf(E)*12+H,M=new DataView(p.buffer);return P==="u16"?M.getUint16(S,!0):P==="u8"?M.getUint8(S):P==="u32"?M.getUint32(S,!0):0},a=d("G",0,"u16"),e=d("G",9,"u8"),n=d("E",0,"u8"),g=d("E",1,"u8"),b=d("E",2,"u8"),v=d("E",3,"u8"),A=d("E",4,"u8"),h=d("E",5,"u8"),f=d("M",4,"u32"),_=d("M",0,"u8"),L=f>>0&31,B=f>>5&31,z=f>>10&31,q=f>>15&31,R=f>>20&31,k=f>>25&31,K=(f>>30&1)===1,T=L%2,$=B%2,G=z%2,j=q%2,I=R%2,V=k%2,Z=Math.floor((T+2*$+4*G+8*j+16*I+32*V)*15/63),X=Math.floor((T+2*$+4*G+8*j+16*I+32*V)*40/63)+30,J=["Lucha","Volador","Veneno","Tierra","Roca","Bicho","Fantasma","Acero","Fuego","Agua","Planta","Eléctrico","Psíquico","Hielo","Dragón","Siniestro"][Z],Y=i&65535,Q=i>>16&65535,ee=l>>16&65535,ae=l&65535,oe=(Y^Q^ee^ae)<8,te=C[a]||a;return{nickname:u.trim(),speciesId:a,nationalId:te,isEgg:K,isShiny:oe,pokerusStatus:_,friendship:e,ivs:{hp:L,atk:B,def:z,spd:q,spa:R,spdef:k},evs:{hp:n,atk:g,def:b,spd:v,spa:A,spdef:h},hiddenPower:{type:J,power:X},pid:l}}}function ge(){const r=document.getElementById("save-scanner-root");if(!r)return;r.innerHTML=`
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
  `;const o=document.getElementById("drop-zone"),s=document.getElementById("file-input"),l=document.getElementById("scanner-results"),i=document.getElementById("error-msg");o.addEventListener("click",()=>s.click()),o.addEventListener("dragover",m=>{m.preventDefault(),o.style.background="rgba(0, 255, 127, 0.2)",o.style.borderColor="#fff"}),o.addEventListener("dragleave",m=>{m.preventDefault(),o.style.background="rgba(0, 20, 0, 0.5)",o.style.borderColor="var(--ray-green)"}),o.addEventListener("drop",m=>{m.preventDefault(),o.style.background="rgba(0, 20, 0, 0.5)",o.style.borderColor="var(--ray-green)",m.dataTransfer.files.length&&u(m.dataTransfer.files[0])}),s.addEventListener("change",m=>{m.target.files.length&&u(m.target.files[0])});function u(m){i.innerText="",l.innerHTML="<p style='color:var(--ray-green); width:100%; text-align:center;'>Analizando estructura binaria...</p>";const t=new FileReader;t.onload=d=>{try{const a=d.target.result,n=new ue(a).parse();if(n.error)throw new Error(n.error);c(n.team)}catch(a){console.error(a),i.innerText="Error: "+a.message,l.innerHTML=""}},t.readAsArrayBuffer(m)}function c(m){l.innerHTML=m.map(t=>{if(t.speciesId===0)return"";const d=t.isEgg?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/egg.png":`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${t.isShiny?"shiny/":""}${t.nationalId}.png`;return`
        <div class="emulator-box" style="text-align:left; position:relative; overflow:hidden; border: 1px solid ${t.isShiny?"#ffd700":"rgba(255,255,255,0.1)"};">
            ${t.isShiny?'<div style="position:absolute; top:5px; right:5px; font-size:1.2rem; animation: pulse 2s infinite;">✨</div>':""}
            
            <div style="display:flex; gap:1rem; align-items:center; margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.05);">
                 <div style="width:64px; height:64px; background:rgba(0,0,0,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center;">
                    <img src="${d}" style="width:64px; height:64px; image-rendering:pixelated;" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'">
                 </div>
                 <div>
                    <h3 style="margin:0; color:${t.isShiny?"#ffd700":"var(--ray-yellow)"}; font-size:1.2rem;">
                        ${t.isEgg?"Huevo":t.nickname||"Pokémon"}
                    </h3>
                    <span class="type-pill" style="font-size:0.75rem; opacity:0.7;">Dex #${t.nationalId} ${t.pokerusStatus?"• 🦠 Pokérus":""}</span>
                 </div>
            </div>
            
            ${t.isEgg?'<p style="color:#ccc; text-align:center;">Un huevo misterioso...</p>':`
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem; font-size:0.85rem; color:#ccc;">
                <div>
                    <strong style="color:var(--ray-green);">IVs (Genética):</strong><br>
                    PS: <span style="${p(t.ivs.hp)}">${t.ivs.hp}</span><br>
                    Ataque: <span style="${p(t.ivs.atk)}">${t.ivs.atk}</span><br>
                    Defensa: <span style="${p(t.ivs.def)}">${t.ivs.def}</span><br>
                    Velocid: <span style="${p(t.ivs.spd)}">${t.ivs.spd}</span><br>
                    At.Esp: <span style="${p(t.ivs.spa)}">${t.ivs.spa}</span><br>
                    Df.Esp: <span style="${p(t.ivs.spdef)}">${t.ivs.spdef}</span>
                </div>
                <div>
                    <strong style="color:var(--ray-green);">EVs (Esfuerzo):</strong><br>
                    PS: ${t.evs.hp}<br>
                    Ataque: ${t.evs.atk}<br>
                    Defensa: ${t.evs.def}<br>
                    Velocid: ${t.evs.spd}<br>
                    At.Esp: ${t.evs.spa}<br>
                    Df.Esp: ${t.evs.spdef}
                </div>
            </div>

            <div style="margin-top:0.75rem; padding-top:0.75rem; border-top:1px solid rgba(255,255,255,0.1); display:grid; grid-template-columns: 1fr 1fr; gap:0.5rem;">
                <p style="font-size:0.9rem; margin:0;">
                   🔮 <strong>Poder Oculto:</strong><br> 
                   <span style="color:${y(t.hiddenPower.type)}">${t.hiddenPower.type}</span> (${t.hiddenPower.power})
                </p>
                <p style="font-size:0.9rem; margin:0;">
                   ❤️ <strong>Felicidad:</strong><br>
                   ${t.friendship} / 255
                </p>
            </div>
            `}
        </div>
      `}).join("")}function p(m){return m===31?"color:#ffeb3b; font-weight:bold; text-shadow:0 0 5px #ffeb3b;":m>=25?"color:#4cd137; font-weight:bold;":m<=5?"color:#e84118;":"color:#fff;"}function y(m){return{Lucha:"#c0392b",Volador:"#a29bfe",Veneno:"#8e44ad",Tierra:"#d35400",Roca:"#7f8c8d",Bicho:"#2ecc71",Fantasma:"#34495e",Acero:"#95a5a6",Fuego:"#e74c3c",Agua:"#3498db",Planta:"#27ae60",Eléctrico:"#f1c40f",Psíquico:"#9b59b6",Hielo:"#74b9ff",Dragón:"#4834d4",Siniestro:"#2c3e50"}[m]||"#ccc"}}const ye=[{name:"Petra",city:"Ciudad Férrica",type:"Roca",badge:"Medalla Piedra",strategy:"Los ataques de tipo Agua y Planta son debilidades x4 para sus Geodude. Ten cuidado con Tumba Rocas, que reduce tu Velocidad.",pokemon:[{name:"Geodude",id:74,level:12,types:["Roca","Tierra"],moves:["Placaje","Rizo Defensa","Lanza Rocas","Tumba Rocas"]},{name:"Geodude",id:74,level:12,types:["Roca","Tierra"],moves:["Placaje","Rizo Defensa","Lanza Rocas","Tumba Rocas"]},{name:"Nosepass",id:299,level:15,types:["Roca"],moves:["Placaje","Fortaleza","Bloqueo","Tumba Rocas"],item:"Baya Aranja"}]},{name:"Marcial",city:"Pueblo Azuliza",type:"Lucha",badge:"Medalla Puño",strategy:"Usa tipos Volador o Psíquico. Meditite puede usar Reflejo, lo que reduce el daño físico que recibe su equipo.",pokemon:[{name:"Machop",id:66,level:16,types:["Lucha"],moves:["Patada Baja","Karate-choque","Corpulencia","Mov. Sísmico"]},{name:"Meditite",id:307,level:16,types:["Lucha","Psíquico"],moves:["Puño Certero","Pantalla Luz","Reflejo","Corpulencia"]},{name:"Makuhita",id:296,level:19,types:["Lucha"],moves:["Empujón","Tiro Vital","Corpulencia","Inversión"],item:"Baya Gidra"}]},{name:"Erico",city:"Ciudad Malvalona",type:"Eléctrico",badge:"Medalla Dinamo",strategy:"Un tipo Tierra es indispensable aquí para ser inmune a sus ataques eléctricos. Cuidado con el Autodestrucción de Voltorb.",pokemon:[{name:"Voltorb",id:100,level:20,types:["Eléctrico"],moves:["Desenrollar","Chispa","Autodestrucción","Sónico"]},{name:"Electrike",id:309,level:20,types:["Eléctrico"],moves:["Malicioso","Ataque Rápido","Chispa","Aullido"]},{name:"Magneton",id:82,level:22,types:["Eléctrico","Acero"],moves:["Onda Trueno","Sónico","Supersónico","Onda Voltio"]},{name:"Manectric",id:310,level:24,types:["Eléctrico"],moves:["Onda Voltio","Ataque Rápido","Onda Trueno","Aullido"]}]},{name:"Candela",city:"Pueblo Lavacalda",type:"Fuego",badge:"Medalla Calor",strategy:"El movimiento Sofoco es devastador pero reduce su Ataque Especial. El clima soleado de Sequía potencia sus ataques.",pokemon:[{name:"Numel",id:322,level:24,types:["Fuego","Tierra"],moves:["Sofoco","Derribo","Magnitud","Día Soleado"]},{name:"Slugma",id:218,level:24,types:["Fuego"],moves:["Sofoco","Día Soleado","Polución","Pantalla Luz"]},{name:"Camerupt",id:323,level:26,types:["Fuego","Tierra"],moves:["Sofoco","Día Soleado","Atracción","Magnitud"]},{name:"Torkoal",id:324,level:29,types:["Fuego"],moves:["Sofoco","Golpe Cuerpo","Día Soleado","Atracción"],item:"Hierba Blanca"}]},{name:"Norman",city:"Ciudad Petalia",type:"Normal",badge:"Medalla Equilibrio",strategy:"Usa ataques de tipo Lucha. Slaking tiene estadísticas de legendario pero solo ataca cada dos turnos por Ausente.",pokemon:[{name:"Spinda",id:327,level:27,types:["Normal"],moves:["Danza Caos","Psicorrayo","Imagen","Otra Vez"]},{name:"Vigoroth",id:288,level:27,types:["Normal"],moves:["Cuchillada","Imagen","Otra Vez","Finta"]},{name:"Linoone",id:264,level:29,types:["Normal"],moves:["Cuchillada","Imagen","Tambor","Finta"]},{name:"Slaking",id:289,level:31,types:["Normal"],moves:["Puño Certero","Imagen","Relajo","Bostezo"],item:"Baya Gidra"}]},{name:"Alana",city:"Ciudad Arborada",type:"Volador",badge:"Medalla Pluma",strategy:"Altaria con Danza Dragón es el mayor peligro. Un ataque de Hielo fuerte puede acabar con ella rápidamente.",pokemon:[{name:"Swablu",id:333,level:29,types:["Normal","Volador"],moves:["Picotazo","Mov. Espejo","Velo Sagrado","Dragoaliento"]},{name:"Tropius",id:357,level:29,types:["Planta","Volador"],moves:["Día Soleado","Rayo Solar","Golpe Aéreo","Ala de Acero"]},{name:"Pelipper",id:279,level:30,types:["Agua","Volador"],moves:["Hidropulso","Protección","Supersónico","Golpe Aéreo"]},{name:"Skarmory",id:227,level:31,types:["Acero","Volador"],moves:["Ataque Arena","Rapidez","Agilidad","Golpe Aéreo"]},{name:"Altaria",id:334,level:33,types:["Dragón","Volador"],moves:["Dragoaliento","Danza Dragón","Terremoto","Golpe Aéreo"],item:"Baya Ziuela"}]},{name:"Vito y Leti",city:"Ciudad Algaria",type:"Psíquico",badge:"Medalla Mente",strategy:"Combate Doble. Claydol puede usar Terremoto sin dañar a sus aliados si son tipo Volador o tienen Levitación.",pokemon:[{name:"Claydol",id:344,level:41,types:["Tierra","Psíquico"],moves:["Poder Pasado","Psíquico","Terremoto","Pantalla Luz"]},{name:"Xatu",id:178,level:41,types:["Psíquico","Volador"],moves:["Psíquico","Día Soleado","Rayo Confuso","Paz Mental"]},{name:"Lunatone",id:337,level:42,types:["Roca","Psíquico"],moves:["Psíquico","Hipnosis","Pantalla Luz","Paz Mental"]},{name:"Solrock",id:338,level:42,types:["Roca","Psíquico"],moves:["Psíquico","Lanzallamas","Día Soleado","Rayo Solar"]}]},{name:"Juan",city:"Arrecípolis",type:"Agua",badge:"Medalla Lluvia",strategy:"Kingdra es su as. Usa Doble Equipo y Descanso para desesperarte. Los ataques de tipo Dragón son los únicos efectivos.",pokemon:[{name:"Luvdisc",id:370,level:41,types:["Agua"],moves:["Hidropulso","Atracción","Beso Dulce","Azote"]},{name:"Whiscash",id:340,level:41,types:["Agua","Tierra"],moves:["Danza Lluvia","Hidropulso","Amnesia","Terremoto"]},{name:"Sealeo",id:364,level:43,types:["Hielo","Agua"],moves:["Otra Vez","Golpe Cuerpo","Rayo Aurora","Hidropulso"]},{name:"Crawdaunt",id:342,level:43,types:["Agua","Siniestro"],moves:["Martillazo","Malicioso","Mofa","Hidropulso"]},{name:"Kingdra",id:230,level:46,types:["Agua","Dragón"],moves:["Hidropulso","Doble Equipo","Rayo Hielo","Descanso"],item:"Baya Atania"}]}],ve=[{name:"Sixto",type:"Siniestro",strategy:"Usa tipos Lucha o Bicho. Ten cuidado con Intimidación de Mightyena y los counters de Absol.",pokemon:[{name:"Mightyena",id:262,level:46,types:["Siniestro"],moves:["Mordisco","Ataque Arena","Rugido","Contoneo"]},{name:"Cacturne",id:332,level:46,types:["Planta","Siniestro"],moves:["Drenadoras","Finta","Brazo Pincho","Espora Alg."]},{name:"Shiftry",id:275,level:48,types:["Planta","Siniestro"],moves:["Paranormal","Bola Sombra","Doble Equipo","Contoneo"]},{name:"Sharpedo",id:319,level:48,types:["Agua","Siniestro"],moves:["Surf","Acuchillar","Triturar","Contoneo"]},{name:"Absol",id:359,level:49,types:["Siniestro"],moves:["Golpe Aéreo","Tumba Rocas","Danza Espada","Acuchillar"]}]},{name:"Fátima",type:"Fantasma",strategy:"Los ataques tipo Siniestro o Fantasma son clave. Sableye no tiene debilidades en esta generación.",pokemon:[{name:"Dusclops",id:356,level:48,types:["Fantasma"],moves:["Puño Sombra","Rayo Confuso","Fuego Fatuo","Maldición"]},{name:"Banette",id:354,level:49,types:["Fantasma"],moves:["Bola Sombra","Finta","Fuego Fatuo","Psíquico"]},{name:"Sableye",id:302,level:50,types:["Siniestro","Fantasma"],moves:["Bola Sombra","Finta","Tinieblas","Rayo Confuso"]},{name:"Banette",id:354,level:49,types:["Fantasma"],moves:["Bola Sombra","Psíquico","Rayo","Tóxico"]},{name:"Dusclops",id:356,level:51,types:["Fantasma"],moves:["Bola Sombra","Rayo Hielo","Avalancha","Terremoto"]}]},{name:"Glacia",type:"Hielo",strategy:"Tipos Lucha, Fuego, Roca o Eléctrico. Walrein puede usar Frío Agudo, un movimiento que debilita de un golpe.",pokemon:[{name:"Sealeo",id:364,level:50,types:["Hielo","Agua"],moves:["Granizo","Otra Vez","Bola Hielo","Hidropulso"]},{name:"Glalie",id:362,level:50,types:["Hielo"],moves:["Granizo","Rayo Hielo","Pantalla Luz","Triturar"]},{name:"Sealeo",id:364,level:52,types:["Hielo","Agua"],moves:["Granizo","Ventisca","Doble Filo","Buceo"]},{name:"Glalie",id:362,level:52,types:["Hielo"],moves:["Granizo","Rayo Hielo","Bola Sombra","Explosión"]},{name:"Walrein",id:365,level:53,types:["Hielo","Agua"],moves:["Surf","Rayo Hielo","Golpe Cuerpo","Frío Agudo"]}]},{name:"Dracón",type:"Dragón",strategy:"Ataques de Hielo son x4 efectivos contra Altaria, Salamence y Flygon. Cuidado con Kingdra, solo débil a Dragón.",pokemon:[{name:"Shelgon",id:372,level:52,types:["Dragón"],moves:["Tumba Rocas","Garra Dragón","Protección","Doble Filo"]},{name:"Altaria",id:334,level:54,types:["Dragón","Volador"],moves:["Danza Dragón","Dragoaliento","Golpe Aéreo","Derribo"]},{name:"Flygon",id:330,level:53,types:["Tierra","Dragón"],moves:["Dragoaliento","Lanzallamas","Triturar","Tormenta Arena"]},{name:"Flygon",id:330,level:53,types:["Tierra","Dragón"],moves:["Dragoaliento","Giga Drenado","Triturar","Garra Dragón"]},{name:"Salamence",id:373,level:55,types:["Dragón","Volador"],moves:["Garra Dragón","Lanzallamas","Vuelo","Triturar"]}]},{name:"Plubio",type:"Campeón / Agua",strategy:"Un equipo equilibrado con ataques eléctricos y de planta es vital. Milotic con Recuperación y Tóxico es muy resistente.",pokemon:[{name:"Wailord",id:321,level:57,types:["Agua"],moves:["Danza Lluvia","Salpicar","Doble Filo","Ventisca"]},{name:"Tentacruel",id:73,level:55,types:["Agua","Veneno"],moves:["Tóxico","Hidrobomba","Bomba Lodo","Rayo Hielo"]},{name:"Ludicolo",id:272,level:56,types:["Agua","Planta"],moves:["Giga Drenado","Surf","Drenadoras","Doble Equipo"]},{name:"Whiscash",id:340,level:56,types:["Agua","Tierra"],moves:["Terremoto","Surf","Hiperrayo","Amnesia"]},{name:"Gyarados",id:130,level:56,types:["Agua","Volador"],moves:["Danza Dragón","Hiperrayo","Terremoto","Surf"]},{name:"Milotic",id:350,level:58,types:["Agua"],moves:["Recuperación","Surf","Rayo Hielo","Tóxico"],item:"Baya Aranja"}]}],be={Placaje:{type:"Normal",category:"Físico",power:40,desc:"Embiste al objetivo con todo el cuerpo."},Imagen:{type:"Normal",category:"Estado",power:null,desc:"Crea copias ilusorias que aumentan la Evasión."},Derribo:{type:"Normal",category:"Físico",power:90,desc:"Placaje potente que también daña al atacante."},"Golpe Cuerpo":{type:"Normal",category:"Físico",power:85,desc:"Golpe con todo el cuerpo. Puede paralizar."},"Ataque Rápido":{type:"Normal",category:"Físico",power:40,desc:"Ataque veloz que siempre golpea primero."},Rapidez:{type:"Normal",category:"Especial",power:60,desc:"Lanza estrellas que nunca fallan."},"Otra Vez":{type:"Normal",category:"Estado",power:null,desc:"Obliga al rival a repetir su último movimiento."},Finta:{type:"Siniestro",category:"Físico",power:60,desc:"Ataque que ignora Protección y Detección."},Cuchillada:{type:"Normal",category:"Físico",power:70,desc:"Corte con garras. Alta prob. de golpe crítico."},Hiperrayo:{type:"Normal",category:"Especial",power:150,desc:"Rayo devastador. Requiere recarga después."},"Doble Filo":{type:"Normal",category:"Físico",power:120,desc:"Ataque temerario que daña mucho al usuario."},Sónico:{type:"Normal",category:"Especial",power:null,desc:"Onda sónica que causa daño fijo de 20 PS."},Supersónico:{type:"Normal",category:"Estado",power:null,desc:"Ondas que confunden al objetivo."},Salpicar:{type:"Normal",category:"Estado",power:null,desc:"No hace absolutamente nada."},"Rizo Defensa":{type:"Normal",category:"Estado",power:null,desc:"Se enrosca para subir la Defensa."},Fortaleza:{type:"Normal",category:"Estado",power:null,desc:"Tensa los músculos para subir la Defensa."},Bloqueo:{type:"Normal",category:"Estado",power:null,desc:"Impide que el objetivo huya o sea cambiado."},Malicioso:{type:"Normal",category:"Estado",power:null,desc:"Mirada intimidante que baja la Defensa rival."},Aullido:{type:"Normal",category:"Estado",power:null,desc:"Aúlla para subir el Ataque Especial."},Atracción:{type:"Normal",category:"Estado",power:null,desc:"Enamora al rival si es de sexo opuesto."},"Doble Equipo":{type:"Normal",category:"Estado",power:null,desc:"Crea copias para aumentar la Evasión."},Protección:{type:"Normal",category:"Estado",power:null,desc:"Evita todos los ataques ese turno."},"Velo Sagrado":{type:"Normal",category:"Estado",power:null,desc:"Protege al equipo de estados alterados."},"Danza Caos":{type:"Normal",category:"Estado",power:null,desc:"Danza que sube Ataque pero confunde."},Tambor:{type:"Normal",category:"Estado",power:null,desc:"Maximiza Ataque a costa de PS."},Relajo:{type:"Normal",category:"Estado",power:null,desc:"No hace nada. Habilidad Ausente lo usa."},Bostezo:{type:"Normal",category:"Estado",power:null,desc:"Hace bostezar al rival. Dormirá el siguiente turno."},Contoneo:{type:"Normal",category:"Estado",power:null,desc:"Sube el Ataque rival pero lo confunde."},Rugido:{type:"Normal",category:"Estado",power:null,desc:"Asusta al rival y lo cambia por otro."},"Beso Dulce":{type:"Normal",category:"Estado",power:null,desc:"Beso que confunde al objetivo."},Recuperación:{type:"Normal",category:"Estado",power:null,desc:"Recupera la mitad de los PS máximos."},Explosión:{type:"Normal",category:"Físico",power:250,desc:"Explosión masiva. El usuario se debilita."},Autodestrucción:{type:"Normal",category:"Físico",power:200,desc:"Explosión que debilita al usuario."},Lanzallamas:{type:"Fuego",category:"Especial",power:95,desc:"Lanza llamas intensas. Puede quemar."},Sofoco:{type:"Fuego",category:"Especial",power:140,desc:"Ataque devastador que baja At. Esp. propio."},"Fuego Fatuo":{type:"Fuego",category:"Estado",power:null,desc:"Fuego fantasmal que quema al objetivo."},"Día Soleado":{type:"Fuego",category:"Estado",power:null,desc:"Intensifica el sol. Potencia ataques de Fuego."},Surf:{type:"Agua",category:"Especial",power:95,desc:"Gran ola que golpea a todos en combate."},Hidropulso:{type:"Agua",category:"Especial",power:60,desc:"Onda de agua. Puede confundir."},Hidrobomba:{type:"Agua",category:"Especial",power:120,desc:"Potente chorro de agua a presión."},Buceo:{type:"Agua",category:"Físico",power:60,desc:"Se sumerge y ataca en el siguiente turno."},Cascada:{type:"Agua",category:"Físico",power:80,desc:"Carga con una cascada. Puede hacer retroceder."},Azote:{type:"Normal",category:"Físico",power:null,desc:"Más daño cuanto menos PS tenga el usuario."},"Danza Lluvia":{type:"Agua",category:"Estado",power:null,desc:"Invoca lluvia. Potencia ataques de Agua."},Rayo:{type:"Eléctrico",category:"Especial",power:95,desc:"Descarga eléctrica potente. Puede paralizar."},"Onda Trueno":{type:"Eléctrico",category:"Estado",power:null,desc:"Onda eléctrica que paraliza al objetivo."},Chispa:{type:"Eléctrico",category:"Físico",power:65,desc:"Placaje eléctrico. Puede paralizar."},"Onda Voltio":{type:"Eléctrico",category:"Especial",power:60,desc:"Descarga eléctrica que siempre paraliza."},"Giga Drenado":{type:"Planta",category:"Especial",power:60,desc:"Absorbe PS del rival. Cura la mitad del daño."},"Rayo Solar":{type:"Planta",category:"Especial",power:120,desc:"Carga luz solar y ataca. Instantáneo con sol."},Drenadoras:{type:"Planta",category:"Estado",power:null,desc:"Planta semillas que drenan PS cada turno."},"Espora Alg.":{type:"Planta",category:"Estado",power:null,desc:"Esparce esporas que bajan la Velocidad."},"Brazo Pincho":{type:"Planta",category:"Físico",power:60,desc:"Golpea con brazo espinoso. Alta prob. crítico."},Espora:{type:"Planta",category:"Estado",power:null,desc:"Esparce esporas que duermen al objetivo."},"Rayo Hielo":{type:"Hielo",category:"Especial",power:95,desc:"Rayo helado que puede congelar al rival."},"Rayo Aurora":{type:"Hielo",category:"Especial",power:65,desc:"Velo helado multicolor. Puede congelar."},Ventisca:{type:"Hielo",category:"Especial",power:120,desc:"Tormenta de nieve brutal. Puede congelar."},"Bola Hielo":{type:"Hielo",category:"Físico",power:30,desc:"Bola de hielo que incrementa poder cada turno."},"Frío Agudo":{type:"Hielo",category:"Especial",power:null,desc:"Ataque que debilita de un golpe si acierta."},Granizo:{type:"Hielo",category:"Estado",power:null,desc:"Invoca granizo que daña a no-Hielo."},"Patada Baja":{type:"Lucha",category:"Físico",power:null,desc:"Patada baja. Más daño a rivales pesados."},"Karate-choque":{type:"Lucha",category:"Físico",power:50,desc:"Golpe certero con alta prob. de crítico."},"Mov. Sísmico":{type:"Lucha",category:"Físico",power:null,desc:"Lanza al rival. Daño igual al nivel del usuario."},"Puño Certero":{type:"Lucha",category:"Físico",power:150,desc:"Golpe devastador pero de baja precisión."},Corpulencia:{type:"Lucha",category:"Estado",power:null,desc:"Tensa músculos. Sube Ataque y Defensa."},Empujón:{type:"Lucha",category:"Físico",power:20,desc:"Empuja con las palmas. Ataca primero."},"Tiro Vital":{type:"Lucha",category:"Físico",power:70,desc:"Ataca un punto vital. Alta prob. de crítico."},Inversión:{type:"Lucha",category:"Físico",power:null,desc:"Más daño cuanto menos PS tenga el usuario."},"Gancho Alto":{type:"Lucha",category:"Físico",power:85,desc:"Puñetazo ascendente muy potente."},Demolición:{type:"Lucha",category:"Físico",power:75,desc:"Puñetazo fuerte capaz de romper barreras."},Martillazo:{type:"Lucha",category:"Físico",power:100,desc:"Golpe con las pinzas muy potente."},Polución:{type:"Veneno",category:"Especial",power:30,desc:"Baño de lodo. Puede envenenar."},"Bomba Lodo":{type:"Veneno",category:"Especial",power:90,desc:"Lanza lodo tóxico. Puede envenenar."},Tóxico:{type:"Veneno",category:"Estado",power:null,desc:"Envenena gravemente. Daño crece cada turno."},Terremoto:{type:"Tierra",category:"Físico",power:100,desc:"Terremoto que golpea a todos los adyacentes."},Magnitud:{type:"Tierra",category:"Físico",power:null,desc:"Terremoto de intensidad variable (10-150)."},"Ataque Arena":{type:"Tierra",category:"Estado",power:null,desc:"Lanza arena que baja la Precisión rival."},"Tormenta Arena":{type:"Roca",category:"Estado",power:null,desc:"Tormenta de arena que daña a no-Tierra/Roca/Acero."},Vuelo:{type:"Volador",category:"Físico",power:70,desc:"Vuela alto y ataca en el siguiente turno."},"Golpe Aéreo":{type:"Volador",category:"Físico",power:60,desc:"Ataque aéreo que nunca falla."},"Mov. Espejo":{type:"Volador",category:"Especial",power:null,desc:"Devuelve el daño especial recibido x2."},Psíquico:{type:"Psíquico",category:"Especial",power:90,desc:"Onda psíquica potente. Puede bajar Def. Esp."},Psicorrayo:{type:"Psíquico",category:"Especial",power:65,desc:"Rayo psíquico que puede confundir."},Reflejo:{type:"Psíquico",category:"Estado",power:null,desc:"Barrera que reduce daño físico al equipo."},"Pantalla Luz":{type:"Psíquico",category:"Estado",power:null,desc:"Barrera que reduce daño especial al equipo."},"Paz Mental":{type:"Psíquico",category:"Estado",power:null,desc:"Meditación que sube At. Esp. y Def. Esp."},Descanso:{type:"Psíquico",category:"Estado",power:null,desc:"Duerme 2 turnos pero cura todos los PS."},Hipnosis:{type:"Psíquico",category:"Estado",power:null,desc:"Ondas hipnóticas que duermen al objetivo."},Paranormal:{type:"Psíquico",category:"Especial",power:80,desc:"Ataque con poderes psíquicos extraños."},"Rayo Confuso":{type:"Fantasma",category:"Estado",power:null,desc:"Luz siniestra que confunde al objetivo."},Agilidad:{type:"Psíquico",category:"Estado",power:null,desc:"Relaja el cuerpo para subir mucho la Velocidad."},Amnesia:{type:"Psíquico",category:"Estado",power:null,desc:"Vacía la mente para subir mucho Def. Esp."},"Lanza Rocas":{type:"Roca",category:"Físico",power:50,desc:"Lanza rocas pequeñas al objetivo."},"Tumba Rocas":{type:"Roca",category:"Físico",power:50,desc:"Lanza rocas que bajan la Velocidad rival."},"Poder Pasado":{type:"Roca",category:"Especial",power:60,desc:"Poder ancestral. Puede subir todas las stats."},Avalancha:{type:"Roca",category:"Físico",power:75,desc:"Lanza rocas. Más daño si el usuario fue dañado."},Desenrollar:{type:"Roca",category:"Físico",power:30,desc:"Rueda que incrementa poder cada turno."},"Bola Sombra":{type:"Fantasma",category:"Especial",power:80,desc:"Lanza bola de sombras. Puede bajar Def. Esp."},"Puño Sombra":{type:"Fantasma",category:"Físico",power:60,desc:"Puñetazo de sombras. Golpea primero."},Maldición:{type:"Fantasma",category:"Estado",power:null,desc:"Fantasma: maldice a costa de PS. Otro: sube stats."},Tinieblas:{type:"Fantasma",category:"Especial",power:null,desc:"Más daño cuanto más PS tenga el usuario."},Dragoaliento:{type:"Dragón",category:"Especial",power:60,desc:"Aliento dragón. Puede paralizar."},"Garra Dragón":{type:"Dragón",category:"Físico",power:80,desc:"Zarpazo con garras afiladas de dragón."},"Danza Dragón":{type:"Dragón",category:"Estado",power:null,desc:"Danza mística que sube Ataque y Velocidad."},Mordisco:{type:"Siniestro",category:"Físico",power:60,desc:"Muerde con colmillos. Puede hacer retroceder."},Triturar:{type:"Siniestro",category:"Físico",power:80,desc:"Tritura con mandíbulas. Puede bajar Defensa."},Acuchillar:{type:"Siniestro",category:"Físico",power:70,desc:"Corte siniestro. Alta prob. de crítico."},Mofa:{type:"Siniestro",category:"Estado",power:null,desc:"Provoca al rival. Solo puede usar ataques."},"Ala de Acero":{type:"Acero",category:"Físico",power:70,desc:"Golpea con alas de acero. Puede subir Defensa."}};function fe(r){switch(r){case"Físico":return"💥";case"Especial":return"✨";case"Estado":return"🔄";default:return"❓"}}function he(){const r=document.getElementById("guide");if(!r)return;const o="https://play.pokemonshowdown.com/sprites/trainers/",s="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",l=a=>{const e=document.getElementById("item-dex-container");e&&(e.innerHTML=a.map(n=>`
         <div class="recommendation-card" style="display:flex; gap:1rem; align-items:center; background:rgba(255,255,255,0.03); border-left: 3px solid ${i(n.category)}">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${n.img}.png" 
                 onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'"
                 style="width:48px; height:48px; image-rendering:pixelated; flex-shrink:0;">
            <div style="flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                  <h4 style="color:#fff; margin-bottom:0.15rem; font-size:1rem;">${n.name}</h4>
                  <span class="type-pill" style="font-size:0.65rem; background:rgba(255,255,255,0.1); padding:2px 6px;">${n.category}</span>
              </div>
              <p style="font-size:0.85rem; color:var(--ray-green); margin-bottom:0.25rem;">📍 ${n.loc}</p>
              <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.3;"><em>${n.desc}</em></p>
            </div>
         </div>
      `).join(""),a.length===0&&(e.innerHTML='<p style="text-align:center; color:#666; width:100%; padding:2rem;">No se encontraron objetos.</p>'))};function i(a){return a==="Evolución"?"#f0932b":a==="Combate"?"#eb4d4b":a==="Utilidad"?"#48dbfb":a==="Clave"?"#f1c40f":a==="Baya"?"#7bed9f":a==="Concurso"?"#ff6b81":"#ccc"}const u={"Medalla Piedra":"/pokemon-emerald-companion/badges/stone_badge.png","Medalla Puño":"/pokemon-emerald-companion/badges/knuckle_badge.png","Medalla Dinamo":"/pokemon-emerald-companion/badges/dynamo_badge.png","Medalla Calor":"/pokemon-emerald-companion/badges/heat_badge.png","Medalla Equilibrio":"/pokemon-emerald-companion/badges/balance_badge.png","Medalla Pluma":"/pokemon-emerald-companion/badges/feather_badge.png","Medalla Mente":"/pokemon-emerald-companion/badges/mind_badge.png","Medalla Lluvia":"/pokemon-emerald-companion/badges/rain_badge.png"},c=a=>`
      <div class="leader-team">
        ${a.map(e=>`
          <div class="leader-poke-card">
            <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom: 0.75rem;">
                <img src="${s}${e.id}.png" class="leader-poke-img" alt="${e.name}" style="width:80px; height:80px;">
                <div style="text-align:left; flex:1;">
                    <div class="leader-poke-name">${e.name}</div>
                    <div class="leader-poke-lvl">Nv. ${e.level}</div>
                    <div style="display:flex; gap:0.25rem; flex-wrap:wrap; margin-top:0.25rem;">
                      ${e.types.map(n=>`<span class="type-pill type-${n.toLowerCase()}" style="font-size:0.6rem; padding:2px 6px;">${n}</span>`).join("")}
                    </div>
                </div>
            </div>
            <div class="moves-section">
              <div class="moves-label">⚔️ Movimientos:</div>
              <div class="leader-moves">
                ${e.moves.map(n=>{const g=be[n]||{type:"Normal",category:"Físico",desc:"Ataque normal.",power:null},b=fe(g.category),v=g.power?`Potencia: ${g.power}`:"Sin potencia";return`
                    <div class="move-wrapper">
                      <span class="leader-move-tag">
                        <span class="move-type-indicator type-${g.type.toLowerCase()}">${g.type.substring(0,3).toUpperCase()}</span>
                        ${n}
                      </span>
                      <div class="move-tooltip">
                        <div class="tooltip-header">
                          <span class="tooltip-name">${n}</span>
                          <span class="tooltip-type type-pill type-${g.type.toLowerCase()}">${g.type}</span>
                        </div>
                        <div class="tooltip-category">${b} ${g.category} · ${v}</div>
                        <p class="tooltip-desc">${g.desc}</p>
                      </div>
                    </div>
                  `}).join("")}
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `,p={Petra:"roxanne-gen3.png",Marcial:"brawly-gen3.png",Erico:"wattson-gen3.png",Candela:"flannery-gen3.png",Norman:"norman-gen3.png",Alana:"winona-gen3.png","Vito y Leti":"tateandliza-gen3.png",Juan:"juan-gen3.png",Sixto:"sidney-gen3.png",Fátima:"phoebe-gen3.png",Glacia:"glacia-gen3.png",Dracón:"drake-gen3.png",Plubio:"wallace-gen3.png"},y=`
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
    <div id="tab-gyms" class="tab-content" style="display:grid; grid-template-columns: 1fr; gap:1.5rem;">
       ${ye.map((a,e)=>`
         <div class="emulator-box" style="display:block;">
            <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem;">
              <img src="${o}${p[a.name]}" style="height:90px; filter:drop-shadow(0 4px 4px rgba(0,0,0,0.5));">
              <div>
                <h3 style="margin-bottom:0.25rem; font-size: 1.4rem;">${e+1}. ${a.name} <span style="font-size:0.7em; opacity:0.7;">(${a.city})</span></h3>
                <div style="display:flex; gap:0.8rem; align-items:center; margin-bottom:0.5rem;">
                  <span class="type-pill type-${a.type.toLowerCase()}">${a.type}</span>
                  <div style="display:flex; align-items:center; gap:0.4rem;">
                    <img src="${u[a.badge]}" alt="${a.badge}" style="width:36px; height:36px; image-rendering:auto; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.4));">
                    <span style="color:var(--ray-yellow); font-size:0.9rem; font-weight:bold;">${a.badge}</span>
                  </div>
                </div>
                <p style="font-size:0.85rem; color:var(--ray-green-glow); line-height: 1.4;"><em>Estrategia:</em> ${a.strategy}</p>
              </div>
            </div>
            ${c(a.pokemon)}
         </div>
       `).join("")}
    </div>

    <!-- ELITE FOUR -->
    <div id="tab-e4" class="tab-content hidden" style="display:grid; grid-template-columns: 1fr; gap:1.5rem;">
       ${ve.map((a,e)=>`
         <div class="emulator-box" style="display:block; border-color:${e===4?"var(--ray-yellow)":"var(--glass-border)"};">
            <div style="display:flex; gap:1.5rem; align-items:center; margin-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 1rem;">
              <img src="${o}${p[a.name]}" style="height:90px; filter:drop-shadow(0 4px 4px rgba(0,0,0,0.5));">
              <div>
                <h3 style="margin-bottom:0.25rem; font-size: 1.4rem; color:${e===4?"var(--ray-yellow)":"white"};">${e===4?"CAMPEÓN: ":""}${a.name}</h3>
                <div style="display:flex; gap:0.5rem; align-items:center; margin-bottom:0.5rem;">
                  <span class="type-pill type-${a.type.toLowerCase().includes("/")?"water":a.type.toLowerCase()}">${a.type}</span>
                </div>
                <p style="font-size:0.85rem; color:var(--ray-green-glow); line-height: 1.4;"><em>Estrategia:</em> ${a.strategy}</p>
              </div>
            </div>
            ${c(a.pokemon)}
         </div>
       `).join("")}
    </div>

    <!-- MOs / MTs -->
    <div id="tab-items" class="tab-content hidden">
       <div class="emulator-box">
        <h3>Ubicación de MOs</h3>
        <ul style="list-style: none; margin-top: 1rem; display:grid; gap:0.75rem;">
          ${le.map(a=>`
            <li style="padding: 0.75rem; background:rgba(255,255,255,0.03); border-radius:12px; display:flex; align-items:center; gap:1rem;">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hm-normal.png" style="width:32px; height:32px; image-rendering:pixelated;">
              <div>
                  <span style="color: var(--ray-green); font-weight: bold; font-size:1rem;">${a.name}</span><br>
                  <span style="font-size: 0.85em; color: #aaa;">📍 ${a.location}</span>
              </div>
            </li>
          `).join("")}
        </ul>
      </div>
      <div class="emulator-box" style="margin-top:1rem;">
        <h3>MTs Importantes</h3>
        <ul style="list-style: none; margin-top: 1rem; display:grid; gap:0.75rem;">
          ${ce.map(a=>`
            <li style="padding: 0.75rem; background:rgba(255,255,255,0.03); border-radius:12px; display:flex; align-items:center; gap:1rem;">
              <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/tm-normal.png" style="width:32px; height:32px; image-rendering:pixelated;">
              <div>
                  <span style="color: #f7cf52; font-weight: bold; font-size:1rem;">${a.name}</span><br>
                  <span style="font-size: 0.85em; color: #aaa;">📍 ${a.location}</span>
              </div>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>

    <!-- ITEM DEX (SEARCHABLE) -->
    <div id="tab-held" class="tab-content hidden">
       ${y}
    </div>

    <!-- SAVE SCANNER -->
    <div id="tab-scanner" class="tab-content hidden">
        <div id="save-scanner-root"></div>
    </div>
  `;const m=document.getElementById("item-search");m&&(m.addEventListener("input",a=>{const e=a.target.value.toLowerCase(),n=N.filter(g=>g.name.toLowerCase().includes(e)||g.category.toLowerCase().includes(e)||g.desc.toLowerCase().includes(e)||g.loc.toLowerCase().includes(e));l(n)}),l(N));const t=document.querySelectorAll(".guide-tab"),d=document.querySelectorAll(".tab-content");t.forEach(a=>{a.addEventListener("click",()=>{if(a.id==="scanner-btn"){t.forEach(e=>e.classList.remove("active")),d.forEach(e=>e.classList.add("hidden")),a.classList.add("active"),document.getElementById("tab-scanner").classList.remove("hidden"),ge();return}t.forEach(e=>e.classList.remove("active")),d.forEach(e=>e.classList.add("hidden")),a.classList.add("active"),document.getElementById(`tab-${a.dataset.tab}`).classList.remove("hidden")})})}const x=["Normal","Fuego","Agua","Eléctrico","Planta","Hielo","Lucha","Veneno","Tierra","Volador","Psíquico","Bicho","Roca","Fantasma","Dragón","Siniestro","Acero"],D=[[1,1,1,1,1,1,1,1,1,1,1,1,.5,0,1,1,.5],[1,.5,.5,1,2,2,1,1,1,1,1,2,.5,1,.5,1,2],[1,2,.5,1,.5,1,1,1,2,1,1,1,2,1,.5,1,1],[1,1,2,.5,.5,1,1,1,0,2,1,1,1,1,.5,1,1],[1,.5,2,1,.5,1,1,.5,2,.5,1,.5,2,1,.5,1,.5],[1,.5,.5,1,2,.5,1,1,2,2,1,1,1,1,2,1,.5],[2,1,1,1,1,2,1,.5,1,.5,.5,.5,2,0,1,2,2],[1,1,1,1,2,1,1,.5,.5,1,1,1,.5,.5,1,1,0],[1,2,1,2,.5,1,1,2,1,0,1,.5,2,1,1,1,2],[1,1,1,.5,2,1,2,1,1,1,1,2,.5,1,1,1,.5],[1,1,1,1,1,1,2,2,1,1,.5,1,1,1,1,0,.5],[1,.5,1,1,2,1,.5,.5,1,.5,2,1,1,.5,1,2,.5],[1,2,1,1,1,2,.5,1,.5,2,1,2,1,1,1,1,.5],[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,.5,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,.5],[1,1,1,1,1,1,.5,1,1,1,2,1,1,2,1,.5,.5],[1,.5,.5,.5,1,2,1,1,1,1,1,1,2,1,1,1,.5]];let F=[];async function xe(){const r=document.getElementById("calculator");if(!r)return;if(r.innerHTML=`
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
  `,F.length===0)try{F=(await(await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")).json()).results}catch(l){console.error("Error fetching pokemon",l)}const o=document.getElementById("poke-search"),s=document.getElementById("search-suggestions");o.addEventListener("input",l=>{const i=l.target.value.toLowerCase();if(s.innerHTML="",i.length<2){s.style.display="none";return}const u=F.filter(c=>c.name.includes(i)).slice(0,8);u.length>0?(s.style.display="block",s.innerHTML=u.map(c=>{const y=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c.url.split("/")[6]}.png`;return`
                <div class="suggestion-item" data-url="${c.url}" style="padding:0.4rem 0.8rem; cursor:pointer; border-bottom:1px solid var(--glass-border); color:#fff; transition:0.2s; font-size:0.9rem; display:flex; align-items:center; gap:0.5rem;">
                    <img src="${y}" alt="${c.name}" style="width:30px; height:30px; object-fit:contain;">
                    <span>${c.name.toUpperCase()}</span>
                </div>
              `}).join(""),document.querySelectorAll(".suggestion-item").forEach(c=>{c.addEventListener("click",()=>{o.value=c.textContent.trim(),s.style.display="none",Ee(c.dataset.url)}),c.addEventListener("mouseenter",()=>c.style.background="var(--glass-shine)"),c.addEventListener("mouseleave",()=>c.style.background="transparent")})):s.style.display="none"})}async function Ee(r){const o=document.getElementById("calc-results"),s=document.getElementById("enemy-header");o.style.display="grid",s.innerHTML='<div style="padding:2rem;">Cargando datos...</div>';try{const i=await(await fetch(r)).json(),u=i.types.map(c=>{const p=c.type.name.charAt(0).toUpperCase()+c.type.name.slice(1);return W[p]||p});Ae(u,i.name.toUpperCase(),i.sprites.front_default)}catch(l){console.error(l),s.innerHTML="Error cargando detalles."}}function Ae(r,o,s){const l=document.getElementById("calc-results"),i=document.getElementById("enemy-header"),u=document.getElementById("weakness-info"),c=document.getElementById("team-analysis");l.style.display="grid";let p="";s&&(p+=`<img src="${s}" style="width:100px; height:100px; animation: float 3s infinite ease-in-out;">`),p+=`<h2 style="margin:0.25rem 0; color:var(--text-main); font-size:1.4rem; text-shadow:0 0 10px rgba(45,158,109,0.5);">${o}</h2>`,p+=`<div class="poke-types" style="justify-content:center; gap:0.25rem;">
      ${r.map(e=>`<span class="type-pill type-${e.toLowerCase()}">${w(e)}</span>`).join("")}
    </div>`,i.innerHTML=p;const y={};x.forEach(e=>{let n=1;r.forEach(g=>{const b=x.indexOf(e),v=x.indexOf(g);b!==-1&&v!==-1&&(n*=D[b][v])}),n!==1&&(y[e]=n)});const m=Object.entries(y).filter(([e,n])=>n>1).sort((e,n)=>n[1]-e[1]),t=Object.entries(y).filter(([e,n])=>n<1).sort((e,n)=>e[1]-n[1]);let d='<div style="display:grid; gap:1rem;">';m.length>0?(d+=`<div><h4 style="color:#ff6b6b; margin-bottom:0.5rem; text-align:center; font-size:0.9rem;">⚠️ Muy Débil A</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.25rem; justify-content:center;">`,d+=m.map(([e,n])=>`
            <span class="type-pill type-${e.toLowerCase()}">
                ${w(e)} <strong style="color:white; margin-left:2px;">x${n}</strong>
            </span>
        `).join(""),d+="</div></div>"):d+='<div style="text-align:center;"><span style="color:var(--text-muted); font-size:0.8rem;">Sin debilidades</span></div>',t.length>0?(d+=`<div><h4 style="color:#48dbfb; margin-bottom:0.5rem; text-align:center; font-size:0.9rem; margin-top:0.5rem;">🛡️ Resiste</h4>
        <div style="display:flex; flex-wrap:wrap; gap:0.25rem; justify-content:center;">`,d+=t.map(([e,n])=>`
            <span class="type-pill type-${e.toLowerCase()}" style="opacity:0.9;">
                ${w(e)} x${n}
            </span>
        `).join(""),d+="</div></div>"):d+='<div style="text-align:center;"><span style="color:var(--text-muted); font-size:0.8rem;">Daño neutro</span></div>',d+="</div>",u.innerHTML=d;const a=U.map(e=>{let n={name:"Ninguno",mod:0};e.moves.forEach(b=>{if(b.category==="Status")return;let v=1;r.forEach(A=>{const h=x.indexOf(b.type),f=x.indexOf(A);h!==-1&&f!==-1&&(v*=D[h][f])}),e.types.includes(b.type)&&(v*=1.5),v>n.mod&&(n={name:b.name,mod:v,type:b.type})});let g=0;return r.forEach(b=>{let v=1;e.types.forEach(A=>{const h=x.indexOf(b),f=x.indexOf(A);h!==-1&&f!==-1&&(v*=D[h][f])}),v>g&&(g=v)}),{member:e,bestMove:n,maxReceiveMod:g}});a.sort((e,n)=>n.bestMove.mod-e.bestMove.mod),c.innerHTML=a.map(e=>{let n="#a0a0a0";return e.bestMove.mod>=2&&(n="#2d9e6d"),e.maxReceiveMod>=2&&(n="#ff4081"),`
        <div class="recommendation-card" style="border-color:${n}; padding:0.5rem; margin-top:0;">
          <img src="${e.member.image}" style="width:40px; height:40px;">
          <div style="flex:1;">
            <div style="font-weight:bold; font-size:0.9rem; color:white;">${e.member.name}</div>
            <div style="font-size:0.75rem; color:#ccc;">
              Ataca con: <span style="color:${e.bestMove.mod>=1.5?"var(--ray-green-glow)":"inherit"};">${e.bestMove.name}</span> 
              (${e.bestMove.mod.toFixed(1)}x)
            </div>
          </div>
          <div style="font-size:0.75rem; text-align:right;">
             <div style="color:${e.maxReceiveMod>=2?"#ff6b6b":"#a0a0a0"}">Recibe x${e.maxReceiveMod}</div>
          </div>
        </div>
      `}).join("")}document.addEventListener("DOMContentLoaded",()=>{re(),ne(),he(),xe();const r=document.querySelectorAll(".nav-btn"),o=document.querySelectorAll(".section");r.forEach(s=>{s.addEventListener("click",()=>{r.forEach(i=>i.classList.remove("active")),o.forEach(i=>i.classList.remove("active")),s.classList.add("active");const l=s.getAttribute("data-target");document.getElementById(l).classList.add("active")})})});
