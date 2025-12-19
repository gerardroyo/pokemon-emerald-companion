// Pokémon Platino Gym Leaders and Elite Four

export const platino_gymLeaders = [
    {
        name: "Roark",
        city: "Oreburgh City",
        type: "Roca",
        badge: "Medalla Roca",
        strategy: "Domina los ataques de tipo Roca con defensas fuertes.",
        pokemon: [
            {
                name: "Geodude",
                id: 74,
                level: 12,
                types: ["Roca", "Tierra"],
                moves: ["Lanzarrocas", "Defensa", "Magnitud", "Explosión"]
            },
            {
                name: "Onix",
                id: 95,
                level: 12,
                types: ["Roca", "Tierra"],
                moves: ["Lanzarrocas", "Bofetón Lodo", "Anticipo", "Terremoto"]
            },
            {
                name: "Cranidos",
                id: 408,
                level: 14,
                types: ["Roca"],
                moves: ["Lanzarrocas", "Golpe de Cabeza", "Buena Defensa", "Represalia"]
            }
        ]
    },
    {
        name: "Fantina",
        city: "Hearthome City",
        type: "Fantasma",
        badge: "Medalla Espíritu",
        strategy: "Usa Pokémon fantasma que esquivan y confunden.",
        pokemon: [
            {
                name: "Misdreavus",
                id: 200,
                level: 28,
                types: ["Fantasma"],
                moves: ["Bola Sombra", "Confusión", "Maldición", "Fuego Fatuo"]
            },
            {
                name: "Haunter",
                id: 93,
                level: 28,
                types: ["Fantasma", "Veneno"],
                moves: ["Bola Sombra", "Hipnosis", "Maldición", "Paranormal"]
            },
            {
                name: "Gengar",
                id: 94,
                level: 30,
                types: ["Fantasma", "Veneno"],
                moves: ["Bola Sombra", "Enfoque Energético", "Maldición", "Sombra Nocturna"]
            }
        ]
    },
    {
        name: "Maylene",
        city: "Veilstone City",
        type: "Lucha",
        badge: "Medalla Combate",
        strategy: "Pokémon de lucha ágiles y poderosos.",
        pokemon: [
            {
                name: "Meditite",
                id: 307,
                level: 32,
                types: ["Lucha", "Psíquico"],
                moves: ["Enfoque Energético", "Paz Mental", "Confusión", "Foco Energético"]
            },
            {
                name: "Machoke",
                id: 67,
                level: 32,
                types: ["Lucha"],
                moves: ["Demolición", "Terremoto", "Piedra Afilada", "Enfoque Energético"]
            },
            {
                name: "Machamp",
                id: 68,
                level: 34,
                types: ["Lucha"],
                moves: ["Demolición", "Terremoto", "Piedra Afilada", "Martillazo"]
            }
        ]
    },
    {
        name: "Byron",
        city: "Canalave City",
        type: "Acero",
        badge: "Medalla Mina",
        strategy: "Defensa de acero impenetrable.",
        pokemon: [
            {
                name: "Steelix",
                id: 208,
                level: 36,
                types: ["Acero", "Tierra"],
                moves: ["Cabeza de Hierro", "Terremoto", "Piedra Afilada", "Bofetón Lodo"]
            },
            {
                name: "Magneton",
                id: 82,
                level: 36,
                types: ["Eléctrico", "Acero"],
                moves: ["Cabeza de Hierro", "Rayo", "Onda Voltio", "Trueno"]
            },
            {
                name: "Bronzong",
                id: 437,
                level: 38,
                types: ["Acero", "Psíquico"],
                moves: ["Meteorobús", "Psíquico", "Tierra de Poder", "Reflejo"]
            }
        ]
    },
    {
        name: "Candice",
        city: "Snowpoint City",
        type: "Hielo",
        badge: "Medalla Escarcha",
        strategy: "Pokémon helados que congelan al rival.",
        pokemon: [
            {
                name: "Sealeo",
                id: 364,
                level: 40,
                types: ["Agua", "Hielo"],
                moves: ["Hidrobomba", "Rayo Aurora", "Raya Lumínica", "Calmia"]
            },
            {
                name: "Piloswine",
                id: 221,
                level: 40,
                types: ["Hielo", "Tierra"],
                moves: ["Avalancha", "Terremoto", "Piedra Afilada", "Destello"]
            },
            {
                name: "Froslass",
                id: 478,
                level: 42,
                types: ["Hielo", "Fantasma"],
                moves: ["Rayo de Hielo", "Bola Sombra", "Confusión", "Tormenta de Arena"]
            }
        ]
    }
];

export const platino_eliteFour = [
    {
        name: "Aaron",
        type: "Bicho",
        strategy: "Experto en Pokémon de tipo Bicho.",
        pokemon: [
            {
                name: "Drapion",
                id: 452,
                level: 46,
                types: ["Bicho", "Veneno"],
                moves: ["Pulso Oscuro", "Tóxico", "Triturar", "Acuchillar"]
            },
            {
                name: "Heracross",
                id: 214,
                level: 46,
                types: ["Bicho", "Lucha"],
                moves: ["Demolición", "Terremoto", "Piedra Afilada", "Megacuerno"]
            },
            {
                name: "Vespiquen",
                id: 416,
                level: 46,
                types: ["Bicho", "Volador"],
                moves: ["Poder de Poder", "Ataque Aéreo", "Defensa", "Esporas Tóxicas"]
            },
            {
                name: "Scizor",
                id: 212,
                level: 48,
                types: ["Bicho", "Acero"],
                moves: ["Cabeza de Hierro", "Demolición", "Golpe de Fuego", "Espada Santa"]
            }
        ]
    },
    {
        name: "Bertha",
        type: "Tierra",
        strategy: "Domina los ataques sísmicos de tipo Tierra.",
        pokemon: [
            {
                name: "Whiscash",
                id: 340,
                level: 46,
                types: ["Agua", "Tierra"],
                moves: ["Hidrobomba", "Terremoto", "Avalancha", "Tierra de Poder"]
            },
            {
                name: "Golem",
                id: 76,
                level: 46,
                types: ["Roca", "Tierra"],
                moves: ["Terremoto", "Piedra Afilada", "Explosión", "Magnitud"]
            },
            {
                name: "Rhyperior",
                id: 464,
                level: 46,
                types: ["Tierra", "Roca"],
                moves: ["Terremoto", "Piedra Afilada", "Martillazo", "Avalancha"]
            },
            {
                name: "Hippowdon",
                id: 450,
                level: 48,
                types: ["Tierra"],
                moves: ["Terremoto", "Piedra Afilada", "Tormenta Arena", "Enfoque Energético"]
            }
        ]
    },
    {
        name: "Flannery",
        type: "Fuego",
        strategy: "Ataques de fuego devastadores.",
        pokemon: [
            {
                name: "Rapidash",
                id: 78,
                level: 46,
                types: ["Fuego"],
                moves: ["Llamarada", "Giro Fuego", "Sofoco", "Psíquico"]
            },
            {
                name: "Magcargo",
                id: 219,
                level: 46,
                types: ["Fuego", "Roca"],
                moves: ["Llamarada", "Piedra Afilada", "Tierra de Poder", "Amnesia"]
            },
            {
                name: "Flareon",
                id: 136,
                level: 46,
                types: ["Fuego"],
                moves: ["Llamarada", "Sofoco", "Enfoque Energético", "Foco Energético"]
            },
            {
                name: "Houndoom",
                id: 229,
                level: 48,
                types: ["Fuego", "Siniestro"],
                moves: ["Llamarada", "Pulso Oscuro", "Fuego Fatuo", "Acuchillar"]
            }
        ]
    },
    {
        name: "Lucian",
        type: "Psíquico",
        strategy: "Pokémon psíquicos que controlan la mente.",
        pokemon: [
            {
                name: "Mr. Mime",
                id: 122,
                level: 46,
                types: ["Psíquico"],
                moves: ["Psíquico", "Foco Energético", "Defensa Lunar", "Reflejo"]
            },
            {
                name: "Gallade",
                id: 475,
                level: 46,
                types: ["Psíquico", "Lucha"],
                moves: ["Demolición", "Psíquico", "Tiro Vital", "Terremoto"]
            },
            {
                name: "Alakazam",
                id: 65,
                level: 46,
                types: ["Psíquico"],
                moves: ["Psíquico", "Foco Energético", "Tormenta de Truenos", "Rayo de Hielo"]
            },
            {
                name: "Bronzong",
                id: 437,
                level: 48,
                types: ["Acero", "Psíquico"],
                moves: ["Meteorobús", "Psíquico", "Tierra de Poder", "Reflejo"]
            }
        ]
    },
    {
        name: "Cynthia",
        type: "Múltiples",
        strategy: "Campeona del Torneo Pokémon. Equipo balanceado y formidable.",
        pokemon: [
            {
                name: "Spiritomb",
                id: 442,
                level: 46,
                types: ["Fantasma", "Siniestro"],
                moves: ["Bola Sombra", "Pulso Oscuro", "Confusión", "Fuego Fatuo"]
            },
            {
                name: "Roserade",
                id: 407,
                level: 46,
                types: ["Planta", "Veneno"],
                moves: ["Rayo Solar", "Energibola", "Tóxico", "Síntesis"]
            },
            {
                name: "Gastrodon",
                id: 423,
                level: 46,
                types: ["Agua", "Tierra"],
                moves: ["Hidrobomba", "Terremoto", "Tierra de Poder", "Calmia"]
            },
            {
                name: "Togekiss",
                id: 468,
                level: 46,
                types: ["Normal", "Volador"],
                moves: ["Aire Cortante", "Energibola", "Agilidad", "Defensa Lunar"]
            },
            {
                name: "Lucario",
                id: 445,
                level: 46,
                types: ["Lucha", "Acero"],
                moves: ["Demolición", "Cabeza de Hierro", "Enfoque Energético", "Velocidad Extrema"]
            },
            {
                name: "Garchomp",
                id: 445,
                level: 48,
                types: ["Dragón", "Tierra"],
                moves: ["Terremoto", "Garra Dragón", "Piedra Afilada", "Demolición"]
            }
        ]
    }
];
