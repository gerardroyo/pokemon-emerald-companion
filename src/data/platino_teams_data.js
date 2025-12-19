// Platino Teams Data - Similar structure to Emerald teams
export const platino_teamCategories = [
    { id: 'difficulty', name: 'Por Objetivo', icon: '🎯' },
    { id: 'thematic', name: 'Por Temática', icon: '🎨' },
    { id: 'mechanic', name: 'Por Mecánica', icon: '⚙️' }
];

export const platino_teams = {
    // Difficulty Category
    competitive: {
        id: 'competitive',
        name: '🏆 Competitivo',
        category: 'difficulty',
        description: 'Equipo óptimo para derrotar al Alto Mando y ser campeón. Balanceado y potente.',
        pokemon: [
            {
                name: 'Infernape',
                id: 392,
                types: ['Fuego', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
                location: 'Starter Pokémon',
                role: '⚔️ Atacante Mixto',
                item: 'Vida Orbe',
                nature: 'Ingenua',
                moves: [
                    { name: 'A bocajarro', type: 'Lucha', category: 'Físico' },
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Hierba Lazo', type: 'Planta', category: 'Especial' },
                    { name: 'U-turn', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Garchomp',
                id: 445,
                types: ['Dragón', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
                location: 'Cueva Extravío',
                role: '🐉 Sweeper Físico',
                item: 'Banda Focus',
                nature: 'Alegre',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Garra Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Lucario',
                id: 448,
                types: ['Lucha', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
                location: 'Isla Hierro',
                role: '👊 Atacante Especial',
                item: 'Gafas Especiales',
                nature: 'Miedosa',
                moves: [
                    { name: 'Esfera Aural', type: 'Lucha', category: 'Especial' },
                    { name: 'Foco Resplandor', type: 'Acero', category: 'Especial' },
                    { name: 'Pulso Umbrío', type: 'Siniestro', category: 'Especial' },
                    { name: 'Maquinación', type: 'Siniestro', category: 'Estado' }
                ]
            },
            {
                name: 'Togekiss',
                id: 468,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
                location: 'Huevo (Cintia)',
                role: '✨ Tanque Especial',
                item: 'Restos',
                nature: 'Serena',
                moves: [
                    { name: 'Tajo Aéreo', type: 'Volador', category: 'Especial' },
                    { name: 'Esfera Aural', type: 'Lucha', category: 'Especial' },
                    { name: 'Onda Trueno', type: 'Eléctrico', category: 'Estado' },
                    { name: 'Respiro', type: 'Volador', category: 'Estado' }
                ]
            },
            {
                name: 'Milotic',
                id: 350,
                types: ['Agua'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png',
                location: 'Mt. Corona (Pesca)',
                role: '💧 Muralla Especial',
                item: 'Restos',
                nature: 'Osada',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Rayo Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Tóxico', type: 'Veneno', category: 'Estado' },
                    { name: 'Recuperación', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Roserade',
                id: 407,
                types: ['Planta', 'Veneno'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png',
                location: 'Ruta 204',
                role: '🌹 Atacante Especial',
                item: 'Lodo Negro',
                nature: 'Miedosa',
                moves: [
                    { name: 'Bomba Lodo', type: 'Veneno', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Somnífero', type: 'Planta', category: 'Estado' },
                    { name: 'Púas Tóxicas', type: 'Veneno', category: 'Estado' }
                ]
            }
        ]
    },

    speedrun: {
        id: 'speedrun',
        name: '🏃 Speedrun',
        category: 'difficulty',
        description: 'Pokémon rápidos y poderosos para terminar el juego velozmente. Máxima velocidad y power.',
        pokemon: [
            {
                name: 'Torterra',
                id: 389,
                types: ['Planta', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png',
                location: 'Starter',
                role: '💪 Físico',
                item: 'Restos',
                nature: 'Audaz',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Rayo Solar', type: 'Planta', category: 'Especial' },
                    { name: 'Piedra Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Síntesis', type: 'Planta', category: 'Estado' }
                ]
            },
            {
                name: 'Rapidash',
                id: 78,
                types: ['Fuego'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
                location: 'Ruta 206',
                role: '🚀 Especial',
                item: 'Gafas de Precisión',
                nature: 'Tímido',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Giro Fuego', type: 'Fuego', category: 'Especial' },
                    { name: 'Sofoco', type: 'Fuego', category: 'Especial' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' }
                ]
            },
            {
                name: 'Floatzel',
                id: 419,
                types: ['Agua'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png',
                location: 'Ruta 203',
                role: '⚡ Físico',
                item: 'Banda Muscular',
                nature: 'Audaz',
                moves: [
                    { name: 'Acuatierra', type: 'Agua', category: 'Físico' },
                    { name: 'Golpe', type: 'Lucha', category: 'Físico' },
                    { name: 'Giro Hidro', type: 'Agua', category: 'Físico' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' }
                ]
            },
            {
                name: 'Raichu',
                id: 26,
                types: ['Eléctrico'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png',
                location: 'Ruta 204-205',
                role: '⚡ Especial',
                item: 'Vida Orbe',
                nature: 'Tímido',
                moves: [
                    { name: 'Rayo', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Onda Voltio', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Foco Energético', type: 'Normal', category: 'Especial' }
                ]
            },
            {
                name: 'Machamp',
                id: 68,
                types: ['Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png',
                location: 'Mt. Coronet',
                role: '💪 Físico',
                item: 'Banda Muscular',
                nature: 'Audaz',
                moves: [
                    { name: 'Demolición', type: 'Lucha', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Piedra Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Martillazo', type: 'Lucha', category: 'Físico' }
                ]
            },
            {
                name: 'Scyther',
                id: 123,
                types: ['Bicho', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png',
                location: 'Ruta 205-206',
                role: '🚀 Físico',
                item: 'Vida Orbe',
                nature: 'Audaz',
                moves: [
                    { name: 'Corte', type: 'Normal', category: 'Físico' },
                    { name: 'X-Ataque', type: 'Normal', category: 'Estado' },
                    { name: 'Golpe Aéreo', type: 'Volador', category: 'Físico' },
                    { name: 'Espada Santa', type: 'Normal', category: 'Físico' }
                ]
            }
        ]
    },

    nuzlocke: {
        id: 'nuzlocke',
        name: '💀 Nuzlocke',
        category: 'difficulty',
        description: 'Pokémon resistentes para sobrevivir a los ataques del Alto Mando. Máxima defensa.',
        pokemon: [
            {
                name: 'Bastionage',
                id: 411,
                types: ['Roca', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png',
                location: 'Cantera Fueguete',
                role: '🛡️ Físico',
                item: 'Gafas de Precisión',
                nature: 'Firme',
                moves: [
                    { name: 'Piedra Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Cabeza de Hierro', type: 'Acero', category: 'Físico' },
                    { name: 'Tierra de Poder', type: 'Tierra', category: 'Especial' },
                    { name: 'Reflejo', type: 'Psíquico', category: 'Estado' }
                ]
            },
            {
                name: 'Metagross',
                id: 376,
                types: ['Acero', 'Psíquico'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png',
                location: 'Mt. Coronet',
                role: '💪 Físico',
                item: 'Vida Orbe',
                nature: 'Audaz',
                moves: [
                    { name: 'Cabeza de Hierro', type: 'Acero', category: 'Físico' },
                    { name: 'Meteorobús', type: 'Acero', category: 'Físico' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' }
                ]
            },
            {
                name: 'Lapras',
                id: 131,
                types: ['Agua', 'Hielo'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
                location: 'Lago Valor',
                role: '🛡️ Especial',
                item: 'Restos',
                nature: 'Modesto',
                moves: [
                    { name: 'Hidrobomba', type: 'Agua', category: 'Especial' },
                    { name: 'Rayo de Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Trueno', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Calmia', type: 'Agua', category: 'Estado' }
                ]
            },
            {
                name: 'Gengar',
                id: 94,
                types: ['Fantasma', 'Veneno'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
                location: 'Cueva Ébano',
                role: '⚡ Especial',
                item: 'Vida Orbe',
                nature: 'Tímido',
                moves: [
                    { name: 'Bola Sombra', type: 'Fantasma', category: 'Especial' },
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' },
                    { name: 'Foco Energético', type: 'Normal', category: 'Especial' }
                ]
            },
            {
                name: 'Gallade',
                id: 475,
                types: ['Psíquico', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png',
                location: 'Mt. Coronet',
                role: '💪 Físico',
                item: 'Banda Muscular',
                nature: 'Audaz',
                moves: [
                    { name: 'Demolición', type: 'Lucha', category: 'Físico' },
                    { name: 'Tiro Vital', type: 'Lucha', category: 'Físico' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' }
                ]
            },
            {
                name: 'Rhyperior',
                id: 464,
                types: ['Tierra', 'Roca'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png',
                location: 'Mt. Coronet',
                role: '💪 Físico',
                item: 'Gafas de Precisión',
                nature: 'Audaz',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Piedra Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Martillazo', type: 'Lucha', category: 'Físico' },
                    { name: 'Avalancha', type: 'Hielo', category: 'Físico' }
                ]
            }
        ]
    },

    favorites: {
        id: 'favorites',
        name: '🌟 Favoritos',
        category: 'difficulty',
        description: 'Los Pokémon más queridos de Sinnoh. Equipo sentimental pero competitivo.',
        pokemon: [
            {
                name: 'Dialga',
                id: 483,
                types: ['Acero', 'Dragón'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
                location: 'Spear Pillar',
                role: '💎 Legendario',
                item: 'Placa Resistente',
                nature: 'Modesto',
                moves: [
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' },
                    { name: 'Meteorobús', type: 'Acero', category: 'Especial' },
                    { name: 'Trueno', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' }
                ]
            },
            {
                name: 'Palkia',
                id: 484,
                types: ['Agua', 'Dragón'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
                location: 'Spear Pillar',
                role: '💎 Legendario',
                item: 'Placa Húmeda',
                nature: 'Modesto',
                moves: [
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' },
                    { name: 'Hidrobomba', type: 'Agua', category: 'Especial' },
                    { name: 'Tormenta de Truenos', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Rayo de Hielo', type: 'Hielo', category: 'Especial' }
                ]
            },
            {
                name: 'Giratina',
                id: 487,
                types: ['Fantasma', 'Dragón'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png',
                location: 'Distorsión del Espacio',
                role: '💎 Legendario',
                item: 'Gafas de Precisión',
                nature: 'Tímido',
                moves: [
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' },
                    { name: 'Bola Sombra', type: 'Fantasma', category: 'Especial' },
                    { name: 'Foco Energético', type: 'Normal', category: 'Especial' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' }
                ]
            },
            {
                name: 'Cresselia',
                id: 488,
                types: ['Psíquico'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png',
                location: 'Isla Valor',
                role: '✨ Apoyo',
                item: 'Restos',
                nature: 'Modesto',
                moves: [
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Rayo Aurora', type: 'Hielo', category: 'Especial' },
                    { name: 'Defensa Lunar', type: 'Psíquico', category: 'Estado' },
                    { name: 'Amnesia', type: 'Psíquico', category: 'Estado' }
                ]
            },
            {
                name: 'Togekiss',
                id: 468,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png',
                location: 'Ruta 210-211',
                role: '✨ Apoyo',
                item: 'Restos',
                nature: 'Modesto',
                moves: [
                    { name: 'Aire Cortante', type: 'Volador', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Fuego Fatuo', type: 'Fuego', category: 'Estado' },
                    { name: 'Agilidad', type: 'Psíquico', category: 'Estado' }
                ]
            },
            {
                name: 'Salamence',
                id: 373,
                types: ['Dragón', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png',
                location: 'Mt. Coronet',
                role: '🚀 Físico',
                item: 'Vida Orbe',
                nature: 'Audaz',
                moves: [
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Piedra Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Golpe Aéreo', type: 'Volador', category: 'Especial' }
                ]
            }
        ]
    },

    balanced_team: {
        id: 'balanced_team',
        name: '⚖️ Equipo Balanceado',
        category: 'thematic',
        description: 'Cobertura de tipos perfecta. Equipo versátil diseñado alrededor de Empoleon.',
        pokemon: [
            {
                name: 'Empoleon',
                id: 395,
                types: ['Agua', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
                location: 'Starter',
                role: '🛡️ Especial / Tanque',
                item: 'Restos',
                nature: 'Modesta',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Foco Resplandor', type: 'Acero', category: 'Especial' },
                    { name: 'Rayo Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Agility', type: 'Psíquico', category: 'Estado' }
                ]
            },
            {
                name: 'Garchomp',
                id: 445,
                types: ['Dragón', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
                location: 'Cueva Extravío',
                role: '💪 Físico',
                item: 'Banda Focus',
                nature: 'Alegre',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Garra Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Colmillo Ígneo', type: 'Fuego', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Staraptor',
                id: 398,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
                location: 'Ruta 201',
                role: '🚀 Atacante Veloz',
                item: 'Cinta Elegida',
                nature: 'Firme',
                moves: [
                    { name: 'Pájaro Osado', type: 'Volador', category: 'Físico' },
                    { name: 'A bocajarro', type: 'Lucha', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' },
                    { name: 'Ataque Rápido', type: 'Normal', category: 'Físico' }
                ]
            },
            {
                name: 'Luxray',
                id: 405,
                types: ['Eléctrico'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png',
                location: 'Ruta 202',
                role: '⚡ Atacante Físico',
                item: 'Magneto',
                nature: 'Firme',
                moves: [
                    { name: 'Chispazo', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Colmillo Rayo', type: 'Eléctrico', category: 'Físico' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' },
                    { name: 'Superpotencia', type: 'Lucha', category: 'Físico' }
                ]
            },
            {
                name: 'Roserade',
                id: 407,
                types: ['Planta', 'Veneno'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png',
                location: 'Ruta 204',
                role: '🌹 Atacante Especial',
                item: 'Lodo Negro',
                nature: 'Miedosa',
                moves: [
                    { name: 'Bomba Lodo', type: 'Veneno', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Recurso', type: 'Normal', category: 'Estado' },
                    { name: 'Extrasensorial', type: 'Psíquico', category: 'Especial' }
                ]
            },
            {
                name: 'Gallade',
                id: 475,
                types: ['Psíquico', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png',
                location: 'Ruta 208',
                role: '🗡️ Atacante Físico',
                item: 'Periscopio',
                nature: 'Firme',
                moves: [
                    { name: 'A bocajarro', type: 'Lucha', category: 'Físico' },
                    { name: 'Psicocorte', type: 'Psíquico', category: 'Físico' },
                    { name: 'Tajo Umbrío', type: 'Siniestro', category: 'Físico' },
                    { name: 'Hoja Aguda', type: 'Planta', category: 'Físico' }
                ]
            }
        ]
    },

    // More teams can be added following the same pattern
    monotype_water: {
        id: 'monotype_water',
        name: '💧 Monotype Agua',
        category: 'thematic',
        description: 'Equipo 100% tipo Agua. Dominio completo de las aguas de Sinnoh.',
        pokemon: [
            {
                name: 'Empoleon',
                id: 395,
                types: ['Agua', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
                location: 'Starter',
                role: '🛡️ Especial',
                item: 'Placa Resistente',
                nature: 'Modesto',
                moves: [
                    { name: 'Hidrobomba', type: 'Agua', category: 'Especial' },
                    { name: 'Onda Voltio', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Rayo de Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Cabeza de Hierro', type: 'Acero', category: 'Físico' }
                ]
            },
            {
                name: 'Floatzel',
                id: 419,
                types: ['Agua'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png',
                location: 'Ruta 203',
                role: '⚡ Físico',
                item: 'Banda Muscular',
                nature: 'Audaz',
                moves: [
                    { name: 'Acuatierra', type: 'Agua', category: 'Físico' },
                    { name: 'Golpe', type: 'Lucha', category: 'Físico' },
                    { name: 'Giro Hidro', type: 'Agua', category: 'Físico' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' }
                ]
            },
            {
                name: 'Lapras',
                id: 131,
                types: ['Agua', 'Hielo'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png',
                location: 'Lago Valor',
                role: '🛡️ Especial',
                item: 'Restos',
                nature: 'Modesto',
                moves: [
                    { name: 'Hidrobomba', type: 'Agua', category: 'Especial' },
                    { name: 'Rayo de Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Trueno', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Calmia', type: 'Agua', category: 'Estado' }
                ]
            },
            {
                name: 'Milotic',
                id: 350,
                types: ['Agua'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png',
                location: 'Ruta 222',
                role: '🛡️ Especial',
                item: 'Restos',
                nature: 'Modesto',
                moves: [
                    { name: 'Hidrobomba', type: 'Agua', category: 'Especial' },
                    { name: 'Rayo Aurora', type: 'Hielo', category: 'Especial' },
                    { name: 'Raya Lumínica', type: 'Agua', category: 'Especial' },
                    { name: 'Calmia', type: 'Agua', category: 'Estado' }
                ]
            },
            {
                name: 'Gastrodon',
                id: 423,
                types: ['Agua', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png',
                location: 'Gran Ciénaga',
                role: '🛡️ Especial',
                item: 'Restos',
                nature: 'Modesto',
                moves: [
                    { name: 'Hidrobomba', type: 'Agua', category: 'Especial' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Tierra de Poder', type: 'Tierra', category: 'Especial' },
                    { name: 'Calmia', type: 'Agua', category: 'Estado' }
                ]
            },
            {
                name: 'Manaphy',
                id: 490,
                types: ['Agua'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png',
                location: 'Isla Valor',
                role: '💎 Legendario',
                item: 'Restos',
                nature: 'Modesto',
                moves: [
                    { name: 'Raya Lumínica', type: 'Agua', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Trueno', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Calmia', type: 'Agua', category: 'Estado' }
                ]
            }
        ]
    },

    monotype_dragon: {
        id: 'monotype_dragon',
        name: '🐉 Monotype Dragón',
        category: 'thematic',
        description: 'Equipo 100% tipo Dragón. Poder absoluto del tipo Dragón.',
        pokemon: [
            {
                name: 'Garchomp',
                id: 445,
                types: ['Dragón', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
                location: 'Mt. Coronet',
                role: '💪 Físico',
                item: 'Gafas de Precisión',
                nature: 'Audaz',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Garra Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Piedra Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Demolición', type: 'Lucha', category: 'Físico' }
                ]
            },
            {
                name: 'Dialga',
                id: 483,
                types: ['Acero', 'Dragón'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
                location: 'Spear Pillar',
                role: '💎 Legendario',
                item: 'Placa Resistente',
                nature: 'Modesto',
                moves: [
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' },
                    { name: 'Meteorobús', type: 'Acero', category: 'Especial' },
                    { name: 'Trueno', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' }
                ]
            },
            {
                name: 'Palkia',
                id: 484,
                types: ['Agua', 'Dragón'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
                location: 'Spear Pillar',
                role: '💎 Legendario',
                item: 'Placa Húmeda',
                nature: 'Modesto',
                moves: [
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' },
                    { name: 'Hidrobomba', type: 'Agua', category: 'Especial' },
                    { name: 'Tormenta de Truenos', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Rayo de Hielo', type: 'Hielo', category: 'Especial' }
                ]
            },
            {
                name: 'Giratina',
                id: 487,
                types: ['Fantasma', 'Dragón'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png',
                location: 'Distorsión del Espacio',
                role: '💎 Legendario',
                item: 'Gafas de Precisión',
                nature: 'Tímido',
                moves: [
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' },
                    { name: 'Bola Sombra', type: 'Fantasma', category: 'Especial' },
                    { name: 'Foco Energético', type: 'Normal', category: 'Especial' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' }
                ]
            },
            {
                name: 'Dragonite',
                id: 149,
                types: ['Dragón', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
                location: 'Mt. Coronet',
                role: '💪 Físico',
                item: 'Vida Orbe',
                nature: 'Audaz',
                moves: [
                    { name: 'Garra Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Piedra Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Golpe Aéreo', type: 'Volador', category: 'Especial' }
                ]
            },
            {
                name: 'Salamence',
                id: 373,
                types: ['Dragón', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png',
                location: 'Mt. Coronet',
                role: '🚀 Físico',
                item: 'Vida Orbe',
                nature: 'Audaz',
                moves: [
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' },
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Piedra Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Golpe Aéreo', type: 'Volador', category: 'Especial' }
                ]
            }
        ]
    },

    starter_turtwig: {
        id: 'starter_turtwig',
        name: '🌿 Team Turtwig',
        category: 'thematic',
        description: 'Equipo basado en Torterra. Defensa sólida y potencia terrestre.',
        pokemon: [
            {
                name: 'Torterra',
                id: 389,
                types: ['Planta', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png',
                location: 'Starter',
                role: '🌳 Tanque Físico',
                item: 'Restos',
                nature: 'Firme',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Mazo en la Cabeza', type: 'Planta', category: 'Físico' },
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Maldición', type: 'Fantasma', category: 'Estado' }
                ]
            },
            {
                name: 'Staraptor',
                id: 398,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
                location: 'Ruta 201',
                role: '🚀 Atacante Veloz',
                item: 'Cinta Elegida',
                nature: 'Alegre',
                moves: [
                    { name: 'Pájaro Osado', type: 'Volador', category: 'Físico' },
                    { name: 'A bocajarro', type: 'Lucha', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' },
                    { name: 'Ataque Rápido', type: 'Normal', category: 'Físico' }
                ]
            },
            {
                name: 'Magmortar',
                id: 467,
                types: ['Fuego'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png',
                location: 'Forja Fuego',
                role: '💥 Cañón Especial',
                item: 'Vidasfera',
                nature: 'Modesta',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Rayo', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Onda Certera', type: 'Lucha', category: 'Especial' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' }
                ]
            },
            {
                name: 'Milotic',
                id: 350,
                types: ['Agua'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png',
                location: 'Mt. Corona (Pesca)',
                role: '💧 Muralla Especial',
                item: 'Restos',
                nature: 'Osada',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Rayo Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Recuperación', type: 'Normal', category: 'Estado' },
                    { name: 'Tóxico', type: 'Veneno', category: 'Estado' }
                ]
            },
            {
                name: 'Lucario',
                id: 448,
                types: ['Lucha', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
                location: 'Isla Hierro (Huevo)',
                role: '👊 Atacante Mixto',
                item: 'Cinta Experto',
                nature: 'Firme',
                moves: [
                    { name: 'A bocajarro', type: 'Lucha', category: 'Físico' },
                    { name: 'Puño Incremento', type: 'Lucha', category: 'Físico' },
                    { name: 'Foco Resplandor', type: 'Acero', category: 'Especial' },
                    { name: 'Velocidad Extrema', type: 'Normal', category: 'Físico' }
                ]
            },
            {
                name: 'Jolteon',
                id: 135,
                types: ['Eléctrico'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png',
                location: 'Eevee (Corazón de Ciudad)',
                role: '⚡ Atacante Veloz',
                item: 'Imán',
                nature: 'Miedosa',
                moves: [
                    { name: 'Rayo', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Onda Voltio', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Bola Sombra', type: 'Fantasma', category: 'Especial' },
                    { name: 'Doble Rayo', type: 'Bicho', category: 'Especial' }
                ]
            }
        ]
    },

    starter_chimchar: {
        id: 'starter_chimchar',
        name: '🔥 Team Chimchar',
        category: 'thematic',
        description: 'Equipo basado en Infernape. Poder de fuego y lucha veloz.',
        pokemon: [
            {
                name: 'Infernape',
                id: 392,
                types: ['Fuego', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
                location: 'Starter',
                role: '🔥 Cañón de Fuego Veloz',
                item: 'Vidasfera',
                nature: 'Activa',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'A bocajarro', type: 'Lucha', category: 'Físico' },
                    { name: 'Puño Trueno', type: 'Eléctrico', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Floatzel',
                id: 419,
                types: ['Agua'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png',
                location: 'Ruta 203',
                role: '🚤 Atacante Veloz',
                item: 'Cinta Experto',
                nature: 'Firme',
                moves: [
                    { name: 'Cascada', type: 'Agua', category: 'Físico' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' },
                    { name: 'Puño Hielo', type: 'Hielo', category: 'Físico' },
                    { name: 'Acua Jet', type: 'Agua', category: 'Físico' }
                ]
            },
            {
                name: 'Roserade',
                id: 407,
                types: ['Planta', 'Veneno'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png',
                location: 'Ruta 204',
                role: '🌹 Atacante Especial',
                item: 'Lodo Negro',
                nature: 'Miedosa',
                moves: [
                    { name: 'Bomba Lodo', type: 'Veneno', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Somnífero', type: 'Planta', category: 'Estado' },
                    { name: 'Brillo Mágico', type: 'Hada', category: 'Especial' }
                ]
            },
            {
                name: 'Staraptor',
                id: 398,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
                location: 'Ruta 201',
                role: '🚀 Atacante Veloz',
                item: 'Cinta Elegida',
                nature: 'Alegre',
                moves: [
                    { name: 'Pájaro Osado', type: 'Volador', category: 'Físico' },
                    { name: 'A bocajarro', type: 'Lucha', category: 'Físico' },
                    { name: 'Ataque Rápido', type: 'Normal', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Garchomp',
                id: 445,
                types: ['Dragón', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
                location: 'Cueva Extravío',
                role: '🐉 Power Bruto',
                item: 'Colmillo Dragón',
                nature: 'Alegre',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Garra Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' },
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' }
                ]
            },
            {
                name: 'Luxray',
                id: 405,
                types: ['Eléctrico'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png',
                location: 'Ruta 202',
                role: '⚡ Atacante Físico',
                item: 'Magneto',
                nature: 'Firme',
                moves: [
                    { name: 'Colmillo Rayo', type: 'Eléctrico', category: 'Físico' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' },
                    { name: 'Superpotencia', type: 'Lucha', category: 'Físico' },
                    { name: 'Voltiocambio', type: 'Eléctrico', category: 'Especial' }
                ]
            }
        ]
    },

    starter_piplup: {
        id: 'starter_piplup',
        name: '🌊 Team Piplup',
        category: 'thematic',
        description: 'Equipo basado en Empoleon. Elegancia real y dominio del acero.',
        pokemon: [
            {
                name: 'Empoleon',
                id: 395,
                types: ['Agua', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
                location: 'Starter',
                role: '🛡️ Tanque Especial',
                item: 'Restos',
                nature: 'Modesta',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Foco Resplandor', type: 'Acero', category: 'Especial' },
                    { name: 'Rayo Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Nudo Hierba', type: 'Planta', category: 'Especial' }
                ]
            },
            {
                name: 'Rapidash',
                id: 78,
                types: ['Fuego'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
                location: 'Ruta 206',
                role: '🏇 Atacante Veloz',
                item: 'Banda Muscular',
                nature: 'Alegre',
                moves: [
                    { name: 'Envite Ígneo', type: 'Fuego', category: 'Físico' },
                    { name: 'Megacuerno', type: 'Bicho', category: 'Físico' },
                    { name: 'Cuerpo Llama', type: 'Fuego', category: 'Estado' },
                    { name: 'Patada Salto Alta', type: 'Lucha', category: 'Físico' }
                ]
            },
            {
                name: 'Roserade',
                id: 407,
                types: ['Planta', 'Veneno'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png',
                location: 'Ruta 204',
                role: '🌹 Atacante Especial',
                item: 'Lodo Negro',
                nature: 'Miedosa',
                moves: [
                    { name: 'Bomba Lodo', type: 'Veneno', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Extrasensorial', type: 'Psíquico', category: 'Especial' },
                    { name: 'Paralizador', type: 'Planta', category: 'Estado' }
                ]
            },
            {
                name: 'Staraptor',
                id: 398,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
                location: 'Ruta 201',
                role: '🚀 Atacante Veloz',
                item: 'Cinta Elegida',
                nature: 'Firme',
                moves: [
                    { name: 'Pájaro Osado', type: 'Volador', category: 'Físico' },
                    { name: 'A bocajarro', type: 'Lucha', category: 'Físico' },
                    { name: 'Ataque Rápido', type: 'Normal', category: 'Físico' },
                    { name: 'Ida y Vuelta', type: 'Bicho', category: 'Físico' }
                ]
            },
            {
                name: 'Garchomp',
                id: 445,
                types: ['Dragón', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
                location: 'Cueva Extravío',
                role: '🐉 Sweeper Físico',
                item: 'Banda Focus',
                nature: 'Alegre',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Garra Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Roca Afilada', type: 'Roca', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Lucario',
                id: 448,
                types: ['Lucha', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
                location: 'Isla Hierro (Huevo)',
                role: '👊 Atacante Mixto',
                item: 'Cinta Experto',
                nature: 'Ingenua',
                moves: [
                    { name: 'A bocajarro', type: 'Lucha', category: 'Físico' },
                    { name: 'Esfera Aural', type: 'Lucha', category: 'Especial' },
                    { name: 'Foco Resplandor', type: 'Acero', category: 'Especial' },
                    { name: 'Velocidad Extrema', type: 'Normal', category: 'Físico' }
                ]
            }
        ]
    },

    sun_team: {
        id: 'sun_team',
        name: '☀️ Equipo Sol',
        description: 'Aprovecha Día Soleado. Potencia bajo el sol.',
        category: 'mechanic',
        pokemon: [
            {
                name: 'Infernape',
                id: 392,
                types: ['Fuego', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
                location: 'Starter',
                role: '🔥 Sol Sweeper',
                item: 'Vida Orbe',
                nature: 'Activa',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'A bocajarro', type: 'Lucha', category: 'Físico' },
                    { name: 'Hierba Lazo', type: 'Planta', category: 'Especial' },
                    { name: 'Día Soleado', type: 'Fuego', category: 'Estado' }
                ]
            },
            {
                name: 'Cherrim',
                id: 421,
                types: ['Planta'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png',
                location: 'Ruta 221',
                role: '☀️ Soporte Sol',
                item: 'Roca Calor',
                nature: 'Miedosa',
                moves: [
                    { name: 'Día Soleado', type: 'Fuego', category: 'Estado' },
                    { name: 'Rayo Solar', type: 'Planta', category: 'Especial' },
                    { name: 'Deseo', type: 'Normal', category: 'Estado' },
                    { name: 'Ayuda', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Rapidash',
                id: 78,
                types: ['Fuego'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
                location: 'Ruta 206',
                role: '🏇 Atacante Veloz',
                item: 'Banda Muscular',
                nature: 'Alegre',
                moves: [
                    { name: 'Envite Ígneo', type: 'Fuego', category: 'Físico' },
                    { name: 'Megacuerno', type: 'Bicho', category: 'Físico' },
                    { name: 'Patada Salto Alta', type: 'Lucha', category: 'Físico' },
                    { name: 'Nitrocarga', type: 'Fuego', category: 'Físico' }
                ]
            },
            {
                name: 'Leafeon',
                id: 470,
                types: ['Planta'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png',
                location: 'Bosque Eterna (Eevee)',
                role: '🍃 Clorofila Físico',
                item: 'Tabla Pradal',
                nature: 'Firme',
                moves: [
                    { name: 'Hoja Aguda', type: 'Planta', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' },
                    { name: 'X-Scissor', type: 'Bicho', category: 'Físico' },
                    { name: 'Sustituto', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Garchomp',
                id: 445,
                types: ['Dragón', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png',
                location: 'Cueva Extravío',
                role: '🐉 Power Bruto',
                item: 'Banda Focus',
                nature: 'Alegre',
                moves: [
                    { name: 'Terremoto', type: 'Tierra', category: 'Físico' },
                    { name: 'Carga Dragón', type: 'Dragón', category: 'Físico' },
                    { name: 'Colmillo Ígneo', type: 'Fuego', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Magmortar',
                id: 467,
                types: ['Fuego'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png',
                location: 'Forja Fuego',
                role: '💥 Cañón Especial',
                item: 'Gafas Elegid.',
                nature: 'Modesta',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Rayo', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Onda Certera', type: 'Lucha', category: 'Especial' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' }
                ]
            }
        ]
    },

    rain_team: {
        id: 'rain_team',
        name: '🌧️ Equipo Lluvia',
        description: 'Aprovecha Danza Lluvia. Control del clima acuoso.',
        category: 'mechanic',
        pokemon: [
            {
                name: 'Empoleon',
                id: 395,
                types: ['Agua', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
                location: 'Starter',
                role: '🛡️ Tanque Lluvia',
                item: 'Restos',
                nature: 'Modesta',
                moves: [
                    { name: 'Surf', type: 'Agua', category: 'Especial' },
                    { name: 'Foco Resplandor', type: 'Acero', category: 'Especial' },
                    { name: 'Rayo Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Danza Lluvia', type: 'Agua', category: 'Estado' }
                ]
            },
            {
                name: 'Floatzel',
                id: 419,
                types: ['Agua'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png',
                location: 'Ruta 213',
                role: '🛶 Nado Rápido Swimmer',
                item: 'Tabla Agua',
                nature: 'Firme',
                moves: [
                    { name: 'Cascada', type: 'Agua', category: 'Físico' },
                    { name: 'Triturar', type: 'Siniestro', category: 'Físico' },
                    { name: 'Puño Hielo', type: 'Hielo', category: 'Físico' },
                    { name: 'Acua Jet', type: 'Agua', category: 'Físico' }
                ]
            },
            {
                name: 'Toxicroak',
                id: 454,
                types: ['Veneno', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png',
                location: 'Gran Pantano',
                role: '🐸 Piel Seca Sweeper',
                item: 'Lodo Negro',
                nature: 'Alegre',
                moves: [
                    { name: 'Puño Drenaje', type: 'Lucha', category: 'Físico' },
                    { name: 'Puya Nociva', type: 'Veneno', category: 'Físico' },
                    { name: 'Tajo Umbrío', type: 'Siniestro', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Bronzong',
                id: 437,
                types: ['Acero', 'Psíquico'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png',
                location: 'Monte Corona',
                role: '🔔 Soporte Defensivo',
                item: 'Roca Lluvia',
                nature: 'Plácida',
                moves: [
                    { name: 'Danza Lluvia', type: 'Agua', category: 'Estado' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Giro Bola', type: 'Acero', category: 'Físico' },
                    { name: 'Hipnosis', type: 'Psíquico', category: 'Estado' }
                ]
            },
            {
                name: 'Lumineon',
                id: 457,
                types: ['Agua'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png',
                location: 'Ruta 223',
                role: '🐟 Soporte Veloz',
                item: 'Roca Lluvia',
                nature: 'Miedosa',
                moves: [
                    { name: 'Viento Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Danza Lluvia', type: 'Agua', category: 'Estado' },
                    { name: 'U-turn', type: 'Bicho', category: 'Físico' },
                    { name: 'Escaldar', type: 'Agua', category: 'Especial' }
                ]
            },
            {
                name: 'Rotom-Wash',
                id: 479,
                types: ['Eléctrico', 'Agua'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png',
                location: 'Mansión Vieja',
                role: '🌪️ STAB Trueno',
                item: 'Restos',
                nature: 'Modesta',
                moves: [
                    { name: 'Hidrobomba', type: 'Agua', category: 'Especial' },
                    { name: 'Trueno', type: 'Eléctrico', category: 'Especial' },
                    { name: 'Fuego Fatuo', type: 'Fuego', category: 'Estado' },
                    { name: 'Divide Dolor', type: 'Normal', category: 'Estado' }
                ]
            }
        ]
    },

    legendary: {
        id: 'legendary',
        name: '⭐ Legendarios',
        description: 'El equipo definitivo de Sinnoh. Los seres más poderosos de la creación.',
        category: 'mechanic',
        pokemon: [
            {
                name: 'Arceus',
                id: 493,
                types: ['Normal'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png',
                location: 'Sala del Origen',
                role: '👑 El Dios Pokémon',
                item: 'Tabla Alfa',
                nature: 'Firme',
                moves: [
                    { name: 'Velocidad Extrema', type: 'Normal', category: 'Físico' },
                    { name: 'Danza Espada', type: 'Normal', category: 'Estado' },
                    { name: 'Garra Umbría', type: 'Fantasma', category: 'Físico' },
                    { name: 'Recuperación', type: 'Normal', category: 'Estado' }
                ]
            },
            {
                name: 'Darkrai',
                id: 491,
                types: ['Siniestro'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png',
                location: 'Isla Nueva Luna',
                role: '🌙 Maestro de las Pesadillas',
                item: 'Banda Focus',
                nature: 'Miedosa',
                moves: [
                    { name: 'Brecha Negra', type: 'Siniestro', category: 'Estado' },
                    { name: 'Maquinación', type: 'Siniestro', category: 'Estado' },
                    { name: 'Pulso Umbrío', type: 'Siniestro', category: 'Especial' },
                    { name: 'Onda Certera', type: 'Lucha', category: 'Especial' }
                ]
            },
            {
                name: 'Shaymin-Sky',
                id: 492,
                types: ['Planta', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png',
                location: 'Vía del Agradecimiento',
                role: '🍃 Velocista de los Cielos',
                item: 'Vidasfera',
                nature: 'Miedosa',
                moves: [
                    { name: 'Fogonazo', type: 'Planta', category: 'Especial' },
                    { name: 'Tajo Aéreo', type: 'Volador', category: 'Especial' },
                    { name: 'Tierra Viva', type: 'Tierra', category: 'Especial' },
                    { name: 'Síntesis', type: 'Planta', category: 'Estado' }
                ]
            },
            {
                name: 'Giratina-O',
                id: 487,
                types: ['Fantasma', 'Dragón'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png',
                location: 'Mundo Distorsión',
                role: '👻 Guardián del Mundo Inverso',
                item: 'Griseosfera',
                nature: 'Audaz',
                moves: [
                    { name: 'Golpe Umbrío', type: 'Fantasma', category: 'Físico' },
                    { name: 'Cometa Draco', type: 'Dragón', category: 'Especial' },
                    { name: 'Esfera Aural', type: 'Lucha', category: 'Especial' },
                    { name: 'Fuego Fatuo', type: 'Fuego', category: 'Estado' }
                ]
            },
            {
                name: 'Dialga',
                id: 483,
                types: ['Acero', 'Dragón'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
                location: 'Columna Lanza',
                role: '⏳ Señor del Tiempo',
                item: 'Diamansfera',
                nature: 'Modesta',
                moves: [
                    { name: 'Distorsión', type: 'Dragón', category: 'Especial' },
                    { name: 'Foco Resplandor', type: 'Acero', category: 'Especial' },
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Trueno', type: 'Eléctrico', category: 'Especial' }
                ]
            },
            {
                name: 'Palkia',
                id: 484,
                types: ['Agua', 'Dragón'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
                location: 'Columna Lanza',
                role: '🌌 Señor del Espacio',
                item: 'Lustrosfera',
                nature: 'Miedosa',
                moves: [
                    { name: 'Corte Vacío', type: 'Dragón', category: 'Especial' },
                    { name: 'Hidrobomba', type: 'Agua', category: 'Especial' },
                    { name: 'Rayo Hielo', type: 'Hielo', category: 'Especial' },
                    { name: 'Esfera Aural', type: 'Lucha', category: 'Especial' }
                ]
            }
        ]
    }
};
