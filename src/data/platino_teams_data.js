// Platino Teams Data - Similar structure to Emerald teams
export const platino_teamCategories = [
    { id: 'difficulty', name: 'Dificultad', icon: '⚔️' },
    { id: 'playstyle', name: 'Estilo de Juego', icon: '🎯' },
    { id: 'theme', name: 'Temático', icon: '🌟' }
];

export const platino_teams = {
    // Difficulty Category
    competitive: {
        id: 'competitive',
        name: '🏆 Competitivo',
        category: 'difficulty',
        description: 'Equipo de alto nivel para entrenamientos serios. Pokémon con stats competitive y movimientos óptimos.',
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
                name: 'Infernape',
                id: 392,
                types: ['Fuego', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
                location: 'Starter Pokémon',
                role: '⚡ Especial',
                item: 'Vida Orbe',
                nature: 'Tímido',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Sombra Nocturna', type: 'Fantasma', category: 'Especial' }
                ]
            },
            {
                name: 'Empoleon',
                id: 395,
                types: ['Agua', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
                location: 'Starter Pokémon',
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
                name: 'Staraptor',
                id: 398,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
                location: 'Ruta 201-202',
                role: '🚀 Físico',
                item: 'Banda Muscular',
                nature: 'Audaz',
                moves: [
                    { name: 'Pico Definitivo', type: 'Volador', category: 'Físico' },
                    { name: 'Ciclón', type: 'Volador', category: 'Especial' },
                    { name: 'Represalia', type: 'Normal', category: 'Físico' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' }
                ]
            },
            {
                name: 'Crobat',
                id: 169,
                types: ['Veneno', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
                location: 'Cueva Ébano',
                role: '⚡ Especial',
                item: 'Pluma Voladora',
                nature: 'Tímido',
                moves: [
                    { name: 'Tóxico', type: 'Veneno', category: 'Estado' },
                    { name: 'Aire Cortante', type: 'Volador', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' }
                ]
            },
            {
                name: 'Weavile',
                id: 461,
                types: ['Siniestro', 'Hielo'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png',
                location: 'Mt. Coronet',
                role: '💨 Velocidad',
                item: 'Vida Orbe',
                nature: 'Tímido',
                moves: [
                    { name: 'Golpe Bajo', type: 'Siniestro', category: 'Físico' },
                    { name: 'Avalancha', type: 'Hielo', category: 'Físico' },
                    { name: 'Puño Certero', type: 'Lucha', category: 'Físico' },
                    { name: 'Persecución', type: 'Siniestro', category: 'Físico' }
                ]
            }
        ]
    },

    speedrun: {
        id: 'speedrun',
        name: '🏃 Speedrun',
        category: 'difficulty',
        description: 'Equipo optimizado para completar el juego rápidamente. Pokémon con buenos tipos y niveles progresivos.',
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
        description: 'Equipo defensivo para Nuzlocke. Pokémon resistentes con buena cobertura de tipos.',
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
        name: '⭐ Favoritos',
        category: 'difficulty',
        description: 'Equipo con Pokémon icónicos de Sinnoh. Para disfrutar el juego sin preocupaciones.',
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
        name: '⚖️ Equilibrado',
        category: 'playstyle',
        description: 'Equipo balanceado con variedad de tipos y roles defensivos/ofensivos.',
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
                name: 'Infernape',
                id: 392,
                types: ['Fuego', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
                location: 'Starter',
                role: '⚡ Especial',
                item: 'Vida Orbe',
                nature: 'Tímido',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Sombra Nocturna', type: 'Fantasma', category: 'Especial' }
                ]
            },
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
                name: 'Staraptor',
                id: 398,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
                location: 'Ruta 201',
                role: '🚀 Físico',
                item: 'Banda Muscular',
                nature: 'Audaz',
                moves: [
                    { name: 'Pico Definitivo', type: 'Volador', category: 'Físico' },
                    { name: 'Ciclón', type: 'Volador', category: 'Especial' },
                    { name: 'Represalia', type: 'Normal', category: 'Físico' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' }
                ]
            },
            {
                name: 'Bronzong',
                id: 437,
                types: ['Acero', 'Psíquico'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png',
                location: 'Mt. Coronet',
                role: '🛡️ Especial',
                item: 'Restos',
                nature: 'Modesto',
                moves: [
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Meteorobús', type: 'Acero', category: 'Especial' },
                    { name: 'Tierra de Poder', type: 'Tierra', category: 'Especial' },
                    { name: 'Reflejo', type: 'Psíquico', category: 'Estado' }
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
            }
        ]
    },

    // More teams can be added following the same pattern
    monotype_water: {
        id: 'monotype_water',
        name: '💧 Monotipos Agua',
        category: 'theme',
        description: 'Equipo mono-tipo Agua. Para maestros de las olas.',
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
        name: '🐲 Monotipos Dragón',
        category: 'theme',
        description: 'Equipo mono-tipo Dragón. Para entrenadores valientes.',
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
        name: '🌿 Starter: Turtwig',
        category: 'theme',
        description: 'Equipo basado en elegir a Turtwig como starter.',
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
                name: 'Infernape',
                id: 392,
                types: ['Fuego', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
                location: 'Ruta 203-204',
                role: '⚡ Especial',
                item: 'Vida Orbe',
                nature: 'Tímido',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Sombra Nocturna', type: 'Fantasma', category: 'Especial' }
                ]
            },
            {
                name: 'Empoleon',
                id: 395,
                types: ['Agua', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
                location: 'Gran Ciénaga',
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
                name: 'Staraptor',
                id: 398,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
                location: 'Ruta 201-202',
                role: '🚀 Físico',
                item: 'Banda Muscular',
                nature: 'Audaz',
                moves: [
                    { name: 'Pico Definitivo', type: 'Volador', category: 'Físico' },
                    { name: 'Ciclón', type: 'Volador', category: 'Especial' },
                    { name: 'Represalia', type: 'Normal', category: 'Físico' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' }
                ]
            },
            {
                name: 'Crobat',
                id: 169,
                types: ['Veneno', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
                location: 'Cueva Ébano',
                role: '⚡ Especial',
                item: 'Pluma Voladora',
                nature: 'Tímido',
                moves: [
                    { name: 'Tóxico', type: 'Veneno', category: 'Estado' },
                    { name: 'Aire Cortante', type: 'Volador', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' }
                ]
            },
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
            }
        ]
    },

    starter_chimchar: {
        id: 'starter_chimchar',
        name: '🔥 Starter: Chimchar',
        category: 'theme',
        description: 'Equipo basado en elegir a Chimchar como starter.',
        pokemon: [
            {
                name: 'Infernape',
                id: 392,
                types: ['Fuego', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
                location: 'Starter',
                role: '⚡ Especial',
                item: 'Vida Orbe',
                nature: 'Tímido',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Sombra Nocturna', type: 'Fantasma', category: 'Especial' }
                ]
            },
            {
                name: 'Torterra',
                id: 389,
                types: ['Planta', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png',
                location: 'Ruta 203-204',
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
                name: 'Empoleon',
                id: 395,
                types: ['Agua', 'Acero'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png',
                location: 'Gran Ciénaga',
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
                name: 'Staraptor',
                id: 398,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
                location: 'Ruta 201-202',
                role: '🚀 Físico',
                item: 'Banda Muscular',
                nature: 'Audaz',
                moves: [
                    { name: 'Pico Definitivo', type: 'Volador', category: 'Físico' },
                    { name: 'Ciclón', type: 'Volador', category: 'Especial' },
                    { name: 'Represalia', type: 'Normal', category: 'Físico' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' }
                ]
            },
            {
                name: 'Crobat',
                id: 169,
                types: ['Veneno', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
                location: 'Cueva Ébano',
                role: '⚡ Especial',
                item: 'Pluma Voladora',
                nature: 'Tímido',
                moves: [
                    { name: 'Tóxico', type: 'Veneno', category: 'Estado' },
                    { name: 'Aire Cortante', type: 'Volador', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' }
                ]
            },
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
            }
        ]
    },

    starter_piplup: {
        id: 'starter_piplup',
        name: '🌊 Starter: Piplup',
        category: 'theme',
        description: 'Equipo basado en elegir a Piplup como starter.',
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
                name: 'Infernape',
                id: 392,
                types: ['Fuego', 'Lucha'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png',
                location: 'Ruta 203-204',
                role: '⚡ Especial',
                item: 'Vida Orbe',
                nature: 'Tímido',
                moves: [
                    { name: 'Llamarada', type: 'Fuego', category: 'Especial' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' },
                    { name: 'Psíquico', type: 'Psíquico', category: 'Especial' },
                    { name: 'Sombra Nocturna', type: 'Fantasma', category: 'Especial' }
                ]
            },
            {
                name: 'Torterra',
                id: 389,
                types: ['Planta', 'Tierra'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png',
                location: 'Ruta 203-204',
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
                name: 'Staraptor',
                id: 398,
                types: ['Normal', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png',
                location: 'Ruta 201-202',
                role: '🚀 Físico',
                item: 'Banda Muscular',
                nature: 'Audaz',
                moves: [
                    { name: 'Pico Definitivo', type: 'Volador', category: 'Físico' },
                    { name: 'Ciclón', type: 'Volador', category: 'Especial' },
                    { name: 'Represalia', type: 'Normal', category: 'Físico' },
                    { name: 'Enfoque Energético', type: 'Lucha', category: 'Especial' }
                ]
            },
            {
                name: 'Crobat',
                id: 169,
                types: ['Veneno', 'Volador'],
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png',
                location: 'Cueva Ébano',
                role: '⚡ Especial',
                item: 'Pluma Voladora',
                nature: 'Tímido',
                moves: [
                    { name: 'Tóxico', type: 'Veneno', category: 'Estado' },
                    { name: 'Aire Cortante', type: 'Volador', category: 'Especial' },
                    { name: 'Energibola', type: 'Planta', category: 'Especial' },
                    { name: 'Pulso Dragón', type: 'Dragón', category: 'Especial' }
                ]
            },
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
            }
        ]
    }
};
