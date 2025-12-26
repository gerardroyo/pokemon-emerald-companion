// Blanco Teams Data - Structure matches other games
export const blanco_teamCategories = [
    { id: 'difficulty', name: 'Por Objetivo', icon: '🎯' },
    { id: 'thematic', name: 'Por Temática', icon: '🎨' },
    { id: 'mechanic', name: 'Por Mecánica', icon: '⚙️' }
];

export const blanco_teams = {
    // Difficulty Category
    competitive: {
        id: 'competitive',
        name: '🏆 Competitivo Historia',
        category: 'difficulty',
        description: 'Equipo balanceado y poderoso para superar la historia y derrotar a N y Ghechis sin problemas.',
        pokemon: [
            {
                name: 'Samurott',
                id: 503,
                types: ['Water'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png',
                location: 'Inicial',
                role: '⚔️ Atacante Mixto',
                item: 'Agua Mística',
                nature: 'Afable',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Rayo Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Megacuerno', type: 'Bicho', category: 'Físico' },
                    { name: 'Acua Jet', type: 'Agua', category: 'Físico' }
                ]
            },
            {
                name: 'Excadrill',
                id: 530,
                types: ['Ground', 'Steel'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
                location: 'Cueva Manantial',
                role: '💪 Sweeper Físico',
                item: 'Pañuelo Seda',
                nature: 'Firme',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Avalancha', type: 'Roca', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' },
                    { name: 'Tijera X', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Darmanitan',
                id: 555,
                types: ['Fire'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png',
                location: 'Desierto Recreo',
                role: '🔥 Potencia Bruta',
                item: 'Carbón',
                nature: 'Firme',
                moves: [
                    { name: 'Envite Ígneo', type: 'Fuego', category: 'Físico' },
                    { name: 'Fuerza Bruta', type: 'Lucha', category: 'Físico' },
                    { name: 'Puño Fuego', type: 'Fuego', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Scrafty',
                id: 560,
                types: ['Dark', 'Fighting'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png',
                location: 'Desierto Recreo',
                role: '🛡️ Tanque Ofensivo',
                item: 'Restos',
                nature: 'Cauta',
                moves: [
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' },
                    { name: 'Patada S. Alta', type: 'Lucha', category: 'Físico' },
                    { name: 'Puño Drenaje', type: 'Lucha', category: 'Físico' },
                    { name: 'Corpulencia', type: 'Lucha', category: 'Estado' }
                ]
            },
            {
                name: 'Archeops',
                id: 567,
                types: ['Rock', 'Flying'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png',
                location: 'Castillo Ancestral (Fósil)',
                role: '🚀 Glass Cannon',
                item: 'Gema Volad.',
                nature: 'Alegre',
                moves: [
                    { name: 'Acróbata', type: 'Volador', category: 'Físico' },
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Haxorus',
                id: 612,
                types: ['Dragon'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png',
                location: 'Cueva Loza',
                role: '🐉 Rompemurallas',
                item: 'Tabla Draco',
                nature: 'Alegre',
                moves: [
                    { name: 'Danza Dragón', type: 'Dragón', category: 'Estado' },
                    { name: 'Garra Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Demolición', type: 'Lucha', category: 'Físico' }
                ]
            }
        ]
    },

    speedrun: {
        id: 'speedrun',
        name: '🏃 Speedrun / Rápido',
        category: 'difficulty',
        description: 'Pokémon que destrozan el juego con pura potencia ofensiva. Diseñado para acabar combates en 1 turno.',
        pokemon: [
            {
                name: 'Emboar',
                id: 500,
                types: ['Fire', 'Fighting'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png',
                location: 'Inicial',
                role: '🔥 Atacante Mixto',
                item: 'Carbón',
                nature: 'Huraña',
                moves: [
                    { name: 'Envite Ígneo', type: 'Fuego', category: 'Físico' },
                    { name: 'Machada', type: 'Lucha', category: 'Físico' },
                    { name: 'Escaldar', type: 'Agua', category: 'Especial' },
                    { name: 'Voltio Cruel', type: 'Eléctrico', category: 'Físico' }
                ]
            },
            {
                name: 'Excadrill',
                id: 530,
                types: ['Ground', 'Steel'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
                location: 'Cueva Manantial',
                role: '💪 MVP',
                item: 'Pañuelo Seda',
                nature: 'Firme',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' },
                    { name: 'Garra Metal', type: 'Acero', category: 'Físico' },
                    { name: 'Avalancha', type: 'Roca', category: 'Físico' }
                ]
            },
            {
                name: 'Lilligant',
                id: 549,
                types: ['Grass'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png',
                location: 'Bosque Azulejo (Petilil)',
                role: '💃 Danza Aleteo',
                item: 'Semilla Milagro',
                nature: 'Modesta',
                moves: [
                    { name: 'Danza Aleteo', type: 'Bicho', category: 'Estado' },
                    { name: 'Danza Pétalo', type: 'Planta', category: 'Especial' },
                    { name: 'Giga Drenado', type: 'Planta', category: 'Especial' },
                    { name: 'Somnífero', type: 'Planta', category: 'Estado' }
                ]
            },
            {
                name: 'Simipour',
                id: 516,
                types: ['Water'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png',
                location: 'Solar de los Sueños',
                role: '💧 Cobertura',
                item: 'Agua Mística',
                nature: 'Alocada',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Rayo Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' },
                    { name: 'Acróbata', type: 'Volador', category: 'Físico' }
                ]
            },
            {
                name: 'Chandelure',
                id: 609,
                types: ['Ghost', 'Fire'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
                location: 'Torre de los Cielos',
                role: '👻 Nuker Especial',
                item: 'Hechizo',
                nature: 'Modesta',
                moves: [
                    { name: 'Bola Sombra', type: 'Fantasma', category: 'Especial' },
                    { name: 'Lanzallamas', type: 'Fuego', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Paz Mental', type: 'Psíquico', category: 'Estado' }
                ]
            },
            {
                name: 'Zekrom',
                id: 644,
                types: ['Dragon', 'Electric'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png',
                location: 'Palacio de N',
                role: '⚡ Legendario',
                item: 'Gema Elec.',
                nature: 'Firme',
                moves: [
                    { name: 'Ataque Fulgor', type: 'Eléctrico', category: 'Físico' },
                    { name: 'Garra Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Cabezazo Zen', type: 'Psíquico', category: 'Físico' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' }
                ]
            }
        ]
    },

    nuzlocke: {
        id: 'nuzlocke',
        name: '💀 Nuzlocke Seguro',
        category: 'difficulty',
        description: 'Pokémon con altas defensas y pocos puntos débiles para sobrevivir el reto.',
        pokemon: [
            {
                name: 'Serperior',
                id: 497,
                types: ['Grass'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png',
                location: 'Inicial',
                role: '🛡️ Soporte Rápido',
                item: 'Restos',
                nature: 'Miedosa',
                moves: [
                    { name: 'Drenadoras', type: 'Planta', category: 'Estado' },
                    { name: 'Giga Drenado', type: 'Planta', category: 'Especial' },
                    { name: 'Danza Aleteo', type: 'Bicho', category: 'Estado' }, // Coil (Enrosque) is better specific but keeping simple
                    { name: 'Enrosque', type: 'Veneno', category: 'Estado' }
                ]
            },
            {
                name: 'Stoutland',
                id: 508,
                types: ['Normal'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png',
                location: 'Ruta 1',
                role: '🐕 Tanque Normal',
                item: 'Pañuelo Seda',
                nature: 'Firme',
                moves: [
                    { name: 'Represalia', type: 'Normal', category: 'Físico' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' },
                    { name: 'Colmillo Hielo', type: 'Hielo', category: 'Físico' },
                    { name: 'Avivar', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Ferrothorn',
                id: 598,
                types: ['Grass', 'Steel'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png',
                location: 'Cueva Electrorroca',
                role: '🏰 Muralla Impenetrable',
                item: 'Casco Dentado',
                nature: 'Plácida',
                moves: [
                    { name: 'Latigazo', type: 'Planta', category: 'Físico' },
                    { name: 'Giro Bola', type: 'Acero', category: 'Físico' },
                    { name: 'Drenadoras', type: 'Planta', category: 'Estado' },
                    { name: 'Trampa Rocas', type: 'Roca', category: 'Estado' }
                ]
            },
            {
                name: 'Jellicent',
                id: 593,
                types: ['Water', 'Ghost'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png',
                location: 'Bahía Arenisca',
                role: '👻 Muralla Especial',
                item: 'Restos',
                nature: 'Serena',
                moves: [
                    { name: 'Escaldar', type: 'Agua', category: 'Especial' },
                    { name: 'Bola Sombra', type: 'Fantasma', category: 'Especial' },
                    { name: 'Recuperación', type: 'Normal', category: 'Estado' },
                    { name: 'Fuego Fatuo', type: 'Fuego', category: 'Estado' }
                ]
            },
            {
                name: 'Scrafty',
                id: 560,
                types: ['Dark', 'Fighting'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png',
                location: 'Desierto Recreo',
                role: '🥋 Mudar',
                item: 'Baya Ziuela',
                nature: 'Cauta',
                moves: [
                    { name: 'Puño Drenaje', type: 'Lucha', category: 'Físico' },
                    { name: 'Trtitar', type: 'Siniestro', category: 'Físico' },
                    { name: 'Corpulencia', type: 'Lucha', category: 'Estado' },
                    { name: 'Cabezazo Zen', type: 'Psíquico', category: 'Físico' }
                ]
            },
            {
                name: 'Sigilyph',
                id: 561,
                types: ['Psychic', 'Flying'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png',
                location: 'Zona Desierto',
                role: '✨ Muro Mágico',
                item: 'Llama Esfera',
                nature: 'Miedosa',
                moves: [
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Tajo Aéreo', type: 'Volador', category: 'Especial' },
                    { name: 'Masa Cósmica', type: 'Psíquico', category: 'Estado' },
                    { name: 'Respiro', type: 'Volador', category: 'Estado' }
                ]
            }
        ]
    },

    // Thematic Teams
    starter_snivy: {
        id: 'starter_snivy',
        name: '🌿 Team Snivy',
        category: 'thematic',
        description: 'Equipo basado en Serperior. Velocidad, evasión y soporte.',
        pokemon: [
            {
                name: 'Serperior',
                id: 497,
                types: ['Grass'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png',
                location: 'Inicial',
                role: '🐍 Líder Veloz',
                item: 'Restos',
                nature: 'Miedosa',
                moves: [
                    { name: 'Lluevehojas', type: 'Planta', category: 'Especial' },
                    { name: 'Gigadrenado', type: 'Planta', category: 'Especial' },
                    { name: 'Enrosque', type: 'Veneno', category: 'Estado' },
                    { name: 'Drenadoras', type: 'Planta', category: 'Estado' }
                ]
            },
            {
                name: 'Simipour',
                id: 516,
                types: ['Water'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png',
                location: 'Solar de los Sueños',
                role: '💧 Cobertura Agua',
                item: 'Agua Mística',
                nature: 'Modesta',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Rayo Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Hierba Lazo', type: 'Planta', category: 'Especial' },
                    { name: 'Escaldar', type: 'Agua', category: 'Especial' }
                ]
            },
            {
                name: 'Chandelure',
                id: 609,
                types: ['Ghost', 'Fire'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
                location: 'Torre de los Cielos',
                role: '🔥 Cañón Especial',
                item: 'Hechizo',
                nature: 'Modesta',
                moves: [
                    { name: 'Lanzallamas', type: 'Fuego', category: 'Especial' },
                    { name: 'Bola Sombra', type: 'Fantasma', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Paz Mental', type: 'Psíquico', category: 'Estado' }
                ]
            },
            {
                name: 'Scrafty',
                id: 560,
                types: ['Dark', 'Fighting'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png',
                location: 'Desierto Recreo',
                role: '🥋 Tanque Lucha',
                item: 'Restos',
                nature: 'Firme',
                moves: [
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' },
                    { name: 'Patada S. Alta', type: 'Lucha', category: 'Físico' },
                    { name: 'Puño Hielo', type: 'Hielo', category: 'Físico' },
                    { name: 'Danza Dragón', type: 'Dragón', category: 'Estado' }
                ]
            },
            {
                name: 'Archeops',
                id: 567,
                types: ['Rock', 'Flying'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png',
                location: 'Fósil',
                role: '🚀 Atacante Físico',
                item: 'Gema Volad.',
                nature: 'Alegre',
                moves: [
                    { name: 'Acróbata', type: 'Volador', category: 'Físico' },
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Zebstrika',
                id: 523,
                types: ['Electric'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png',
                location: 'Ruta 3',
                role: '⚡ Velocidad',
                item: 'Imán',
                nature: 'Alegre',
                moves: [
                    { name: 'Voltio Cruel', type: 'Eléctrico', category: 'Físico' },
                    { name: 'Nitrocarga', type: 'Fuego', category: 'Físico' },
                    { name: 'Voltiocambio', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Onda Trueno', type: 'Eléctrico', category: 'Estado' }
                ]
            }
        ]
    },

    starter_tepig: {
        id: 'starter_tepig',
        name: '🔥 Team Tepig',
        category: 'thematic',
        description: 'Equipo basado en Emboar. Potencia bruta y cobertura ofensiva.',
        pokemon: [
            {
                name: 'Emboar',
                id: 500,
                types: ['Fire', 'Fighting'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png',
                location: 'Inicial',
                role: '🔥 Líder Potente',
                item: 'Cinturón Negro',
                nature: 'Firme',
                moves: [
                    { name: 'Envite Ígneo', type: 'Fuego', category: 'Físico' },
                    { name: 'Machada', type: 'Lucha', category: 'Físico' },
                    { name: 'Voltio Cruel', type: 'Eléctrico', category: 'Físico' },
                    { name: 'Testarazo', type: 'Roca', category: 'Físico' }
                ]
            },
            {
                name: 'Seismitoad',
                id: 537,
                types: ['Water', 'Ground'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png',
                location: 'Bosque Azulejo',
                role: '💧 Cobertura Agua',
                item: 'Arena Fina',
                nature: 'Modesta',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Tierra Viva', type: 'Tierra', category: 'Especial' },
                    { name: 'Bomba Lodo', type: 'Veneno', category: 'Especial' },
                    { name: 'Drenaje', type: 'Planta', category: 'Especial' }
                ]
            },
            {
                name: 'Leavanny',
                id: 542,
                types: ['Bug', 'Grass'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png',
                location: 'Bosque Azulejo',
                role: '✂️ Atacante Físico',
                item: 'Semilla Milagro',
                nature: 'Alegre',
                moves: [
                    { name: 'Tijera X', type: 'Bicho', category: 'Físico' },
                    { name: 'Hoja Aguda', type: 'Planta', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' },
                    { name: 'Garra Umbría', type: 'Fantasma', category: 'Físico' }
                ]
            },
            {
                name: 'Sigilyph',
                id: 561,
                types: ['Psychic', 'Flying'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png',
                location: 'Zona Desierto',
                role: '🔮 Muro Mágico',
                item: 'Llama Esfera',
                nature: 'Miedosa',
                moves: [
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Tajo Aéreo', type: 'Volador', category: 'Especial' },
                    { name: 'Masa Cósmica', type: 'Psíquico', category: 'Estado' },
                    { name: 'Poderreserva', type: 'Psíquico', category: 'Especial' }
                ]
            },
            {
                name: 'Krookodile',
                id: 553,
                types: ['Ground', 'Dark'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png',
                location: 'Castillo Ancestral',
                role: '🐊 Autoestima',
                item: 'Gafas de Sol',
                nature: 'Alegre',
                moves: [
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Demolición', type: 'Lucha', category: 'Físico' }
                ]
            },
            {
                name: 'Galvantula',
                id: 596,
                types: ['Bug', 'Electric'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png',
                location: 'Cueva Electrorroca',
                role: '⚡ Precisión',
                item: 'Gafas Especiales',
                nature: 'Miedosa',
                moves: [
                    { name: 'Trueno', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Zumbido', type: 'Bicho', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Voltiocambio', type: 'Eléctrico', category: 'Especial' }
                ]
            }
        ]
    },

    starter_oshawott: {
        id: 'starter_oshawott',
        name: '💧 Team Oshawott',
        category: 'thematic',
        description: 'Equipo basado en Samurott. Versatilidad y equilibrio.',
        pokemon: [
            {
                name: 'Samurott',
                id: 503,
                types: ['Water'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png',
                location: 'Inicial',
                role: '⚔️ Líder Mixto',
                item: 'Agua Mística',
                nature: 'Afable',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Rayo Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Megacuerno', type: 'Bicho', category: 'Físico' },
                    { name: 'Acua Jet', type: 'Agua', category: 'Físico' }
                ]
            },
            {
                name: 'Simisear',
                id: 514,
                types: ['Fire'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png',
                location: 'Solar de los Sueños',
                role: '🔥 Cobertura Fuego',
                item: 'Carbón',
                nature: 'Modesta',
                moves: [
                    { name: 'Lanzallamas', type: 'Fuego', category: 'Especial' },
                    { name: 'Onda Certera', type: 'Lucha', category: 'Especial' },
                    { name: 'Hierba Lazo', type: 'Planta', category: 'Especial' },
                    { name: 'Bostezo', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Lilligant',
                id: 549,
                types: ['Grass'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png',
                location: 'Bosque Azulejo',
                role: '💃 Danza Aleteo',
                item: 'Semilla Milagro',
                nature: 'Modesta',
                moves: [
                    { name: 'Danza Aleteo', type: 'Bicho', category: 'Estado' },
                    { name: 'Danza Pétalo', type: 'Planta', category: 'Especial' },
                    { name: 'Giga Drenado', type: 'Planta', category: 'Especial' },
                    { name: 'Somnífero', type: 'Planta', category: 'Estado' }
                ]
            },
            {
                name: 'Excadrill',
                id: 530,
                types: ['Ground', 'Steel'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
                location: 'Cueva Manantial',
                role: '💪 Topo de Acero',
                item: 'Pañuelo Seda',
                nature: 'Firme',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Avalancha', type: 'Roca', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' },
                    { name: 'Tijera X', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Reuniclus',
                id: 579,
                types: ['Psychic'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png',
                location: 'Ruta 5',
                role: '🧠 Tanque Psíquico',
                item: 'Restos',
                nature: 'Modesta',
                moves: [
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Onda Certera', type: 'Lucha', category: 'Especial' },
                    { name: 'Recuperación', type: 'Normal', category: 'Estado' },
                    { name: 'Paz Mental', type: 'Psíquico', category: 'Estado' }
                ]
            },
            {
                name: 'Braviary',
                id: 628,
                types: ['Normal', 'Flying'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png',
                location: 'Ruta 10',
                role: '🦅 Ataque Aéreo',
                item: 'Pico Afilado',
                nature: 'Alegre',
                moves: [
                    { name: 'Pájaro Osado', type: 'Volador', category: 'Físico' },
                    { name: 'Retribución', type: 'Normal', category: 'Físico' },
                    { name: 'Fuerza Bruta', type: 'Lucha', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' }
                ]
            }
        ]
    },

    monotype_bug: {
        id: 'monotype_bug',
        name: '🐛 Monotype Bicho',
        category: 'thematic',
        description: 'Teselia tiene los mejores Pokémon tipo Bicho. Volcarona lidera el enjambre.',
        pokemon: [
            {
                name: 'Volcarona',
                id: 637,
                types: ['Bug', 'Fire'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
                location: 'Castillo Ancestral',
                role: '☀️ Sol del Enjambre',
                item: 'Restos',
                nature: 'Modesta',
                moves: [
                    { name: 'Danza Aleteo', type: 'Bicho', category: 'Estado' },
                    { name: 'Danza Llama', type: 'Fuego', category: 'Especial' },
                    { name: 'Zumbido', type: 'Bicho', category: 'Especial' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' }
                ]
            },
            {
                name: 'Galvantula',
                id: 596,
                types: ['Bug', 'Electric'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png',
                location: 'Cueva Electrorroca',
                role: '⚡ Tarántula Veloz',
                item: 'Gafas Especiales',
                nature: 'Miedosa',
                moves: [
                    { name: 'Trueno', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Zumbido', type: 'Bicho', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Voltiocambio', type: 'Eléctrico', category: 'Especial' }
                ]
            },
            {
                name: 'Scolipede',
                id: 545,
                types: ['Bug', 'Poison'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png',
                location: 'Bosque Azulejo',
                role: '☣️ Ciempiés Tóxico',
                item: 'Lodo Negro',
                nature: 'Alegre',
                moves: [
                    { name: 'Megacuerno', type: 'Bicho', category: 'Físico' },
                    { name: 'Bomba Lodo', type: 'Veneno', category: 'Especial' }, // Or Poison Jab
                    { name: 'Puya Nociva', type: 'Veneno', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' }
                ]
            },
            {
                name: 'Crustle',
                id: 558,
                types: ['Bug', 'Rock'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png',
                location: 'Desierto Recreo',
                role: '🏰 Rompecoraza',
                item: 'Hierba Blanca',
                nature: 'Firme',
                moves: [
                    { name: 'Rompecoraza', type: 'Normal', category: 'Estado' },
                    { name: 'Tijera X', type: 'Bicho', category: 'Físico' },
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' }
                ]
            },
            {
                name: 'Leavanny',
                id: 542,
                types: ['Bug', 'Grass'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png',
                location: 'Bosque Azulejo',
                role: '✂️ Cortador',
                item: 'Cinturón Experto',
                nature: 'Alegre',
                moves: [
                    { name: 'Tijera X', type: 'Bicho', category: 'Físico' },
                    { name: 'Hoja Aguda', type: 'Planta', category: 'Físico' },
                    { name: 'Golpe Aéreo', type: 'Volador', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Escavalier',
                id: 589,
                types: ['Bug', 'Steel'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png',
                location: 'Ruta 6',
                role: '🛡️ Caballero Acero',
                item: 'Restos',
                nature: 'Audaz',
                moves: [
                    { name: 'Megacuerno', type: 'Bicho', category: 'Físico' },
                    { name: 'Cabeza de Hierro', type: 'Acero', category: 'Físico' },
                    { name: 'Taladradora', type: 'Tierra', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' }
                ]
            }
        ]
    },

    dragons: {
        id: 'dragons',
        name: '🐉 Poder Dragón',
        category: 'thematic',
        description: 'Teselia es tierra de dragones. Aprovecha el poder de las leyendas.',
        pokemon: [
            {
                name: 'Haxorus',
                id: 612,
                types: ['Dragon'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png',
                location: 'Cueva Loza',
                role: '⚔️ Físico',
                item: 'Tabla Draco',
                nature: 'Alegre',
                moves: [
                    { name: 'Enfado', type: 'Dragón', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Danza Dragón', type: 'Dragón', category: 'Estado' },
                    { name: 'Demolición', type: 'Lucha', category: 'Físico' }
                ]
            },
            {
                name: 'Hydreigon',
                id: 635,
                types: ['Dark', 'Dragon'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png',
                location: 'Calle Victoria',
                role: '👺 Especial',
                item: 'Gafas Elegid',
                nature: 'Miedosa',
                moves: [
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' },
                    { name: 'Pulso Umbrío', type: 'Siniestro', category: 'Especial' },
                    { name: 'Lanzallamas', type: 'Fuego', category: 'Especial' },
                    { name: 'Surf', type: 'Agua', category: 'Especial' }
                ]
            },
            {
                name: 'Druddigon',
                id: 621,
                types: ['Dragon'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png',
                location: 'Torre Duodraco',
                role: '🧱 Tanque Físico',
                item: 'Casco Dentado',
                nature: 'Audaz',
                moves: [
                    { name: 'Garra Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Fuerza Bruta', type: 'Lucha', category: 'Físico' },
                    { name: 'Golpe Bajo', type: 'Siniestro', category: 'Físico' },
                    { name: 'Trampa Rocas', type: 'Roca', category: 'Estado' }
                ]
            },
            {
                name: 'Zekrom',
                id: 644,
                types: ['Dragon', 'Electric'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png',
                location: 'Palacio de N',
                role: '⚡ Legendario',
                item: 'Gema Elec.',
                nature: 'Firme',
                moves: [
                    { name: 'Ataque Fulgor', type: 'Eléctrico', category: 'Físico' },
                    { name: 'Garra Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Cabezazo Zen', type: 'Psíquico', category: 'Físico' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' }
                ]
            },
            {
                name: 'Archeops',
                id: 567,
                types: ['Rock', 'Flying'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png',
                location: 'Fósil',
                role: '🚀 Cobertura',
                item: 'Gema Volad.',
                nature: 'Alegre',
                moves: [
                    { name: 'Acróbata', type: 'Volador', category: 'Físico' },
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Seismitoad',
                id: 537,
                types: ['Water', 'Ground'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png',
                location: 'Bosque Azulejo',
                role: '💧 Cobertura',
                item: 'Arena Fina',
                nature: 'Modesta',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Tierra Viva', type: 'Tierra', category: 'Especial' },
                    { name: 'Bomba Lodo', type: 'Veneno', category: 'Especial' },
                    { name: 'Drenaje', type: 'Planta', category: 'Especial' }
                ]
            }
        ]
    },

    // Mechanic Teams
    weather_sun: {
        id: 'weather_sun',
        name: '☀️ Clima Soleado',
        category: 'mechanic',
        description: 'Equipo de Sol. Darmanitan potencia su Fuego, Lilligant y Sawsbuck aprovechan Clorofila.',
        pokemon: [
            {
                name: 'Whimsicott',
                id: 547,
                types: ['Grass'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png',
                location: 'Bosque Azulejo',
                role: '☀️ Setter Prioridad',
                item: 'Roca Calor',
                nature: 'Miedosa',
                moves: [
                    { name: 'Día Soleado', type: 'Fuego', category: 'Estado' },
                    { name: 'Viento Afín', type: 'Volador', category: 'Estado' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Otra Vez', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Darmanitan',
                id: 555,
                types: ['Fire'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png',
                location: 'Desierto Recreo',
                role: '🔥 Potencia Solar',
                item: 'Cinta Elegida',
                nature: 'Firme',
                moves: [
                    { name: 'Envite Ígneo', type: 'Fuego', category: 'Físico' },
                    { name: 'Fuerza Bruta', type: 'Lucha', category: 'Físico' },
                    { name: 'Avalancha', type: 'Roca', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Lilligant',
                id: 549,
                types: ['Grass'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png',
                location: 'Bosque Azulejo',
                role: '💃 Clorofila',
                item: 'Vidasfera',
                nature: 'Modesta',
                moves: [
                    { name: 'Danza Aleteo', type: 'Bicho', category: 'Estado' },
                    { name: 'Rayo Solar', type: 'Planta', category: 'Especial' },
                    { name: 'Poder Oculto', type: 'Normal', category: 'Especial' }, // Simulating Fire ideally
                    { name: 'Somnífero', type: 'Planta', category: 'Estado' }
                ]
            },
            {
                name: 'Sawsbuck',
                id: 586,
                types: ['Normal', 'Grass'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png',
                location: 'Torre Duodraco',
                role: '🦌 Clorofila Físico',
                item: 'Cunta Vida',
                nature: 'Firme',
                moves: [
                    { name: 'Asta Drenaje', type: 'Planta', category: 'Físico' },
                    { name: 'Retribución', type: 'Normal', category: 'Físico' },
                    { name: 'Megacuerno', type: 'Bicho', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Volcarona',
                id: 637,
                types: ['Bug', 'Fire'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png',
                location: 'Castillo Ancestral',
                role: '🔥 Sol Especial',
                item: 'Restos',
                nature: 'Modesta',
                moves: [
                    { name: 'Danza Llama', type: 'Fuego', category: 'Especial' },
                    { name: 'Zumbido', type: 'Bicho', category: 'Especial' },
                    { name: 'Vendaval', type: 'Volador', category: 'Especial' },
                    { name: 'Danza Aleteo', type: 'Bicho', category: 'Estado' }
                ]
            },
            {
                name: 'Chandelure',
                id: 609,
                types: ['Ghost', 'Fire'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png',
                location: 'Torre de los Cielos',
                role: '👻 Fuego Fantasma',
                item: 'Pañuelo Elegido',
                nature: 'Miedosa',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Bola Sombra', type: 'Fantasma', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Truco', type: 'Psíquico', category: 'Estado' }
                ]
            }
        ]
    },

    trick_room: {
        id: 'trick_room',
        name: '🌀 Espacio Raro',
        category: 'mechanic',
        description: 'Pokémon lentos pero muy poderosos que atacan primero bajo Espacio Raro.',
        pokemon: [
            {
                name: 'Reuniclus',
                id: 579,
                types: ['Psychic'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png',
                location: 'Ruta 5',
                role: '🧠 Setter Principal',
                item: 'Vidasfera',
                nature: 'Mansa',
                moves: [
                    { name: 'Espacio Raro', type: 'Psíquico', category: 'Estado' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Onda Certera', type: 'Lucha', category: 'Especial' },
                    { name: 'Bola Sombra', type: 'Fantasma', category: 'Especial' }
                ]
            },
            {
                name: 'Cofagrigus',
                id: 563,
                types: ['Ghost'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png',
                location: 'Castillo Ancestral',
                role: '⚰️ Setter Defensivo',
                item: 'Restos',
                nature: 'Plácida',
                moves: [
                    { name: 'Espacio Raro', type: 'Psíquico', category: 'Estado' },
                    { name: 'Bola Sombra', type: 'Fantasma', category: 'Especial' },
                    { name: 'Fuego Fatuo', type: 'Fuego', category: 'Estado' },
                    { name: 'Infortunio', type: 'Fantasma', category: 'Especial' }
                ]
            },
            {
                name: 'Conkeldurr',
                id: 534,
                types: ['Fighting'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png',
                location: 'Monte Tuerca',
                role: '👊 Sweeper Físico',
                item: 'Llama Esfera',
                nature: 'Audaz',
                moves: [
                    { name: 'Puño Drenaje', type: 'Lucha', category: 'Físico' },
                    { name: 'Ultrapuño', type: 'Lucha', category: 'Físico' },
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Protección', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Escavalier',
                id: 589,
                types: ['Bug', 'Steel'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png',
                location: 'Ruta 6',
                role: '🛡️ Tanque Lento',
                item: 'Cinta Elegida',
                nature: 'Audaz',
                moves: [
                    { name: 'Megacuerno', type: 'Bicho', category: 'Físico' },
                    { name: 'Cabeza de Hierro', type: 'Acero', category: 'Físico' },
                    { name: 'Taladradora', type: 'Tierra', category: 'Físico' },
                    { name: 'Persecución', type: 'Siniestro', category: 'Físico' }
                ]
            },
            {
                name: 'Ferrothorn',
                id: 598,
                types: ['Grass', 'Steel'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png',
                location: 'Cueva Electrorroca',
                role: '🏰 Giro Bola',
                item: 'Casco Dentado',
                nature: 'Plácida',
                moves: [
                    { name: 'Giro Bola', type: 'Acero', category: 'Físico' },
                    { name: 'Latigazo', type: 'Planta', category: 'Físico' },
                    { name: 'Trampa Rocas', type: 'Roca', category: 'Estado' },
                    { name: 'Drenadoras', type: 'Planta', category: 'Estado' }
                ]
            },
            {
                name: 'Gigalith',
                id: 526,
                types: ['Rock'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png',
                location: 'Cueva Manantial',
                role: '🪨 Potencia Lenta',
                item: 'Gema Roca',
                nature: 'Audaz',
                moves: [
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Explosión', type: 'Normal', category: 'Físico' },
                    { name: 'Fuerza Bruta', type: 'Lucha', category: 'Físico' }
                ]
            }
        ]
    },

    // Mechanic Teams
    weather_sand: {
        id: 'weather_sand',
        name: '🌪️ Tormenta de Arena',
        category: 'mechanic',
        description: 'Aprovecha a Excadrill con Ímpetu Arena, aunque Tyranitar es post-game, Gigalith aguanta.',
        pokemon: [
            {
                name: 'Gigalith',
                id: 526,
                types: ['Rock'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png',
                location: 'Cueva Manantial',
                role: '🪨 Setter Físico',
                item: 'Restos',
                nature: 'Audaz',
                moves: [
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Explosión', type: 'Normal', category: 'Físico' },
                    { name: 'Trampa Rocas', type: 'Roca', category: 'Estado' }
                ]
            },
            {
                name: 'Excadrill',
                id: 530,
                types: ['Ground', 'Steel'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png',
                location: 'Cueva Manantial',
                role: '🚀 Ímpetu Arena',
                item: 'Vida Orbe',
                nature: 'Firme',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Avalancha', type: 'Roca', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' },
                    { name: 'Cabeza de Hierro', type: 'Acero', category: 'Físico' }
                ]
            },
            {
                name: 'Stoutland',
                id: 508,
                types: ['Normal'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png',
                location: 'Ruta 1',
                role: '🐕 Ímpetu Arena',
                item: 'Pañuelo Seda',
                nature: 'Firme',
                moves: [
                    { name: 'Represalia', type: 'Normal', category: 'Físico' },
                    { name: 'Colmillo Fuego', type: 'Fuego', category: 'Físico' },
                    { name: 'Colmillo Hielo', type: 'Hielo', category: 'Físico' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' }
                ]
            },
            {
                name: 'Reuniclus',
                id: 579,
                types: ['Psychic'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png',
                location: 'Ruta 5',
                role: '✨ Muro Mágico',
                item: 'Restos',
                nature: 'Modesta',
                moves: [
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Onda Certera', type: 'Lucha', category: 'Especial' },
                    { name: 'Recuperación', type: 'Normal', category: 'Estado' },
                    { name: 'Paz Mental', type: 'Psíquico', category: 'Estado' }
                ]
            },
            {
                name: 'Ferrothorn',
                id: 598,
                types: ['Grass', 'Steel'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png',
                location: 'Cueva Electrorroca',
                role: '🏰 Defensor',
                item: 'Casco Dentado',
                nature: 'Plácida',
                moves: [
                    { name: 'Latigazo', type: 'Planta', category: 'Físico' },
                    { name: 'Giro Bola', type: 'Acero', category: 'Físico' },
                    { name: 'Desrenadoras', type: 'Planta', category: 'Estado' },
                    { name: 'Púas', type: 'Tierra', category: 'Estado' }
                ]
            },
            {
                name: 'Sigilyph',
                id: 561,
                types: ['Psychic', 'Flying'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png',
                location: 'Zona Desierto',
                role: '✨ Inmune Tierra',
                item: 'Llama Esfera',
                nature: 'Miedosa',
                moves: [
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Tajo Aéreo', type: 'Volador', category: 'Especial' },
                    { name: 'Masa Cósmica', type: 'Psíquico', category: 'Estado' },
                    { name: 'Poderreserva', type: 'Psíquico', category: 'Especial' }
                ]
            }
        ]
    }
};
