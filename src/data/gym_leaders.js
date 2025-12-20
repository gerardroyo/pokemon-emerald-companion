export const gymLeaders = [
    {
        name: "Petra",
        city: "Ciudad Férrica",
        type: "Roca",
        badge: "Medalla Piedra",
        strategy: "Los ataques de tipo Agua y Planta son debilidades x4 para sus Geodude. Ten cuidado con Tumba Rocas, que reduce tu Velocidad.",
        pokemon: [
            {
                name: "Geodude",
                id: 74,
                level: 12,
                types: ["Roca", "Tierra"],
                moves: ["Placaje", "Rizo Defensa", "Lanza Rocas", "Tumba Rocas"]
            },
            {
                name: "Geodude",
                id: 74,
                level: 12,
                types: ["Roca", "Tierra"],
                moves: ["Placaje", "Rizo Defensa", "Lanza Rocas", "Tumba Rocas"]
            },
            {
                name: "Nosepass",
                id: 299,
                level: 15,
                types: ["Roca"],
                moves: ["Bloqueo", "Fortaleza", "Placaje", "Tumba Rocas"],
                item: "Baya Aranja"
            }
        ]
    },
    {
        name: "Marcial",
        city: "Pueblo Azuliza",
        type: "Lucha",
        badge: "Medalla Puño",
        strategy: "Usa tipos Volador o Psíquico. Meditite puede usar Reflejo, lo que reduce el daño físico que recibe su equipo.",
        pokemon: [
            {
                name: "Machop",
                id: 66,
                level: 16,
                types: ["Lucha"],
                moves: ["Patada Baja", "Corpulencia", "Foco Energía", "Venganza"]
            },
            {
                name: "Meditite",
                id: 307,
                level: 16,
                types: ["Lucha", "Psíquico"],
                moves: ["Foco Energía", "Confusión", "Detección", "Corpulencia"]
            },
            {
                name: "Makuhita",
                id: 296,
                level: 19,
                types: ["Lucha"],
                moves: ["Empujón", "Vigor", "Corpulencia", "Tiro Vital"],
                item: "Baya Aranja"
            }
        ]
    },
    {
        name: "Erico",
        city: "Ciudad Malvalona",
        type: "Eléctrico",
        badge: "Medalla Dinamo",
        strategy: "Un tipo Tierra es indispensable aquí para ser inmune a sus ataques eléctricos. Cuidado con el Autodestrucción de Voltorb.",
        pokemon: [
            {
                name: "Voltorb",
                id: 100,
                level: 20,
                types: ["Eléctrico"],
                moves: ["Desenrollar", "Chispa", "Autodestrucción", "Onda Voltio"]
            },
            {
                name: "Electrike",
                id: 309,
                level: 20,
                types: ["Eléctrico"],
                moves: ["Ataque Rápido", "Malicioso", "Aullido", "Onda Voltio"]
            },
            {
                name: "Magneton",
                id: 82,
                level: 22,
                types: ["Eléctrico", "Acero"],
                moves: ["Supersónico", "Onda Trueno", "Bomba Sónica", "Onda Voltio"]
            },
            {
                name: "Manectric",
                id: 310,
                level: 24,
                types: ["Eléctrico"],
                moves: ["Ataque Rápido", "Onda Trueno", "Aullido", "Onda Voltio"]
            }
        ]
    },
    {
        name: "Candela",
        city: "Pueblo Lavacalda",
        type: "Fuego",
        badge: "Medalla Calor",
        strategy: "El movimiento Sofoco es devastador pero reduce su Ataque Especial. El clima soleado de Sequía potencia sus ataques.",
        pokemon: [
            {
                name: "Numel",
                id: 322,
                level: 24,
                types: ["Fuego", "Tierra"],
                moves: ["Día Soleado", "Velo Sagrado", "Magnitud", "Sofoco"]
            },
            {
                name: "Slugma",
                id: 218,
                level: 24,
                types: ["Fuego"],
                moves: ["Día Soleado", "Polución", "Pantalla Luz", "Sofoco"]
            },
            {
                name: "Camerupt",
                id: 323,
                level: 26,
                types: ["Fuego", "Tierra"],
                moves: ["Día Soleado", "Atracción", "Magnitud", "Sofoco"]
            },
            {
                name: "Torkoal",
                id: 324,
                level: 29,
                types: ["Fuego"],
                moves: ["Día Soleado", "Cuerpo Llama", "Atracción", "Sofoco"],
                item: "Hierba Blanca"
            }
        ]
    },
    {
        name: "Norman",
        city: "Ciudad Petalia",
        type: "Normal",
        badge: "Medalla Equilibrio",
        strategy: "Usa ataques de tipo Lucha. Slaking tiene estadísticas de legendario pero solo ataca cada dos turnos por Ausente.",
        pokemon: [
            {
                name: "Spinda",
                id: 327,
                level: 27,
                types: ["Normal"],
                moves: ["Psicorrayo", "Otra Vez", "Danza Caos", "Imagen"]
            },
            {
                name: "Vigoroth",
                id: 288,
                level: 27,
                types: ["Normal"],
                moves: ["Cuchillada", "Finta", "Otra Vez", "Imagen"]
            },
            {
                name: "Linoone",
                id: 264,
                level: 29,
                types: ["Normal"],
                moves: ["Cuchillada", "Tambor", "Golpe Cabeza", "Imagen"]
            },
            {
                name: "Slaking",
                id: 289,
                level: 31,
                types: ["Normal"],
                moves: ["Bostezo", "Finta", "Contador", "Imagen"],
                item: "Baya Ziuela"
            }
        ]
    },
    {
        name: "Alana",
        city: "Ciudad Arborada",
        type: "Volador",
        badge: "Medalla Pluma",
        strategy: "Altaria con Danza Dragón es el mayor peligro. Un ataque de Hielo fuerte puede acabar con ella rápidamente.",
        pokemon: [
            {
                name: "Swablu",
                id: 333,
                level: 29,
                types: ["Normal", "Volador"],
                moves: ["Golpe Aéreo", "Mov. Espejo", "Velo Sagrado", "Canto Mortal"]
            },
            {
                name: "Tropius",
                id: 357,
                level: 29,
                types: ["Planta", "Volador"],
                moves: ["Día Soleado", "Rayo Solar", "Golpe Aéreo", "Síntesis"]
            },
            {
                name: "Pelipper",
                id: 279,
                level: 30,
                types: ["Agua", "Volador"],
                moves: ["Pistola Agua", "Protección", "Supersónico", "Golpe Aéreo"]
            },
            {
                name: "Skarmory",
                id: 227,
                level: 31,
                types: ["Acero", "Volador"],
                moves: ["Ataque Arena", "Ala de Acero", "Ataque Furia", "Golpe Aéreo"]
            },
            {
                name: "Altaria",
                id: 334,
                level: 33,
                types: ["Dragón", "Volador"],
                moves: ["Dragoaliento", "Danza Dragón", "Terremoto", "Golpe Aéreo"],
                item: "Baya Ziuela"
            }
        ]
    },
    {
        name: "Vito y Leti",
        city: "Ciudad Algaria",
        type: "Psíquico",
        badge: "Medalla Mente",
        strategy: "Combate Doble. Claydol puede usar Terremoto sin dañar a sus aliados si son tipo Volador o tienen Levitación.",
        pokemon: [
            {
                name: "Claydol",
                id: 344,
                level: 41,
                types: ["Tierra", "Psíquico"],
                moves: ["Poder Pasado", "Psíquico", "Terremoto", "Pantalla Luz"]
            },
            {
                name: "Xatu",
                id: 178,
                level: 41,
                types: ["Psíquico", "Volador"],
                moves: ["Psíquico", "Rayo Confuso", "Paz Mental", "Teletransporte"]
            },
            {
                name: "Lunatone",
                id: 337,
                level: 42,
                types: ["Roca", "Psíquico"],
                moves: ["Psíquico", "Hipnosis", "Pantalla Luz", "Rayo Confuso"]
            },
            {
                name: "Solrock",
                id: 338,
                level: 42,
                types: ["Roca", "Psíquico"],
                moves: ["Psíquico", "Lanzallamas", "Día Soleado", "Reflejo"]
            }
        ]
    },
    {
        name: "Juan",
        city: "Arrecípolis",
        type: "Agua",
        badge: "Medalla Lluvia",
        strategy: "Kingdra es su as. Usa Doble Equipo y Descanso para desesperarte. Los ataques de tipo Dragón son los únicos efectivos.",
        pokemon: [
            {
                name: "Luvdisc",
                id: 370,
                level: 41,
                types: ["Agua"],
                moves: ["Hidropulso", "Atracción", "Beso Dulce", "Azote"]
            },
            {
                name: "Whiscash",
                id: 340,
                level: 41,
                types: ["Agua", "Tierra"],
                moves: ["Danza Lluvia", "Hidropulso", "Amnesia", "Terremoto"]
            },
            {
                name: "Sealeo",
                id: 364,
                level: 43,
                types: ["Hielo", "Agua"],
                moves: ["Otra Vez", "Golpe Cuerpo", "Rayo Aurora", "Hidropulso"]
            },
            {
                name: "Crawdaunt",
                id: 342,
                level: 43,
                types: ["Agua", "Siniestro"],
                moves: ["Martillazo", "Hidropulso", "Malicioso", "Mofa"]
            },
            {
                name: "Kingdra",
                id: 230,
                level: 46,
                types: ["Agua", "Dragón"],
                moves: ["Hidropulso", "Doble Equipo", "Rayo Hielo", "Descanso"],
                item: "Baya Atania"
            }
        ]
    }
];

export const eliteFour = [
    {
        name: "Sixto",
        type: "Siniestro",
        strategy: "Usa tipos Lucha o Bicho. Ten cuidado con Intimidación de Mightyena y los counters de Absol.",
        pokemon: [
            {
                name: "Mightyena",
                id: 262,
                level: 46,
                types: ["Siniestro"],
                moves: ["Triturar", "Doble Filo", "Ataque Arena", "Rugido"]
            },
            {
                name: "Cacturne",
                id: 332,
                level: 46,
                types: ["Planta", "Siniestro"],
                moves: ["Finta", "Brazo Pincho", "Drenadoras", "Espora Alg."]
            },
            {
                name: "Shiftry",
                id: 275,
                level: 46,
                types: ["Planta", "Siniestro"],
                moves: ["Paranormal", "Doble Equipo", "Contoneo", "Tormento"]
            },
            {
                name: "Crawdaunt",
                id: 342,
                level: 48,
                types: ["Agua", "Siniestro"],
                moves: ["Danza Espada", "Fuerza", "Imagen", "Surf"]
            },
            {
                name: "Absol",
                id: 359,
                level: 49,
                types: ["Siniestro"],
                moves: ["Danza Espada", "Avalancha", "Golpe Aéreo", "Acuchillar"],
                item: "Baya Ziuela"
            }
        ]
    },
    {
        name: "Fátima",
        type: "Fantasma",
        strategy: "Los ataques tipo Siniestro o Fantasma son clave. Sableye no tiene debilidades en esta generación.",
        pokemon: [
            {
                name: "Dusclops",
                id: 356,
                level: 48,
                types: ["Fantasma"],
                moves: ["Protección", "Maldición", "Rayo Confuso", "Puño Sombra"]
            },
            {
                name: "Banette",
                id: 354,
                level: 49,
                types: ["Fantasma"],
                moves: ["Rabia", "Fuego Fatuo", "Finta", "Bola Sombra"]
            },
            {
                name: "Sableye",
                id: 302,
                level: 50,
                types: ["Siniestro", "Fantasma"],
                moves: ["Doble Equipo", "Tinieblas", "Finta", "Bola Sombra"]
            },
            {
                name: "Banette",
                id: 354,
                level: 49,
                types: ["Fantasma"],
                moves: ["Bola Sombra", "Rayo", "Psíquico", "Imagen"]
            },
            {
                name: "Dusclops",
                id: 356,
                level: 51,
                types: ["Fantasma"],
                moves: ["Rayo Hielo", "Bola Sombra", "Avalancha", "Terremoto"],
                item: "Baya Ziuela"
            }
        ]
    },
    {
        name: "Nívea",
        type: "Hielo",
        strategy: "Tipos Lucha, Fuego, Roca o Eléctrico. Walrein puede usar Frío Agudo, un movimiento que debilita de un golpe.",
        pokemon: [
            {
                name: "Sealeo",
                id: 364,
                level: 50,
                types: ["Hielo", "Agua"],
                moves: ["Bola Hielo", "Golpe Cuerpo", "Rayo Aurora", "Granizo"]
            },
            {
                name: "Glalie",
                id: 362,
                level: 50,
                types: ["Hielo"],
                moves: ["Rayo Hielo", "Triturar", "Pantalla Luz", "Granizo"]
            },
            {
                name: "Sealeo",
                id: 364,
                level: 52,
                types: ["Hielo", "Agua"],
                moves: ["Rayo Hielo", "Ventisca", "Atracción", "Granizo"]
            },
            {
                name: "Glalie",
                id: 362,
                level: 52,
                types: ["Hielo"],
                moves: ["Rayo Hielo", "Terremoto", "Explosión", "Granizo"]
            },
            {
                name: "Walrein",
                id: 365,
                level: 53,
                types: ["Hielo", "Agua"],
                moves: ["Rayo Hielo", "Surf", "Golpe Cuerpo", "Frío Agudo"],
                item: "Baya Ziuela"
            }
        ]
    },
    {
        name: "Dracón",
        type: "Dragón",
        strategy: "Ataques de Hielo son x4 efectivos contra Altaria, Salamence y Flygon. Kingdra solo es débil a Dragón.",
        pokemon: [
            {
                name: "Shelgon",
                id: 372,
                level: 52,
                types: ["Dragón"],
                moves: ["Garra Dragón", "Tumba Rocas", "Protección", "Dragoaliento"]
            },
            {
                name: "Altaria",
                id: 334,
                level: 54,
                types: ["Dragón", "Volador"],
                moves: ["Danza Dragón", "Dragoaliento", "Golpe Aéreo", "Doble Filo"]
            },
            {
                name: "Kingdra",
                id: 230,
                level: 53,
                types: ["Agua", "Dragón"],
                moves: ["Surf", "Golpe Cuerpo", "Danza Dragón", "Pantalla Humo"]
            },
            {
                name: "Flygon",
                id: 330,
                level: 53,
                types: ["Tierra", "Dragón"],
                moves: ["Dragoaliento", "Tormenta Arena", "Terremoto", "Triturar"]
            },
            {
                name: "Salamence",
                id: 373,
                level: 55,
                types: ["Dragón", "Volador"],
                moves: ["Garra Dragón", "Lanzallamas", "Triturar", "Avalancha"],
                item: "Baya Ziuela"
            }
        ]
    },
    {
        name: "Plubio",
        type: "Campeón / Agua",
        strategy: "Un equipo equilibrado con ataques eléctricos y de planta es vital. Milotic con Recuperación y Tóxico es muy resistente.",
        pokemon: [
            {
                name: "Wailord",
                id: 321,
                level: 57,
                types: ["Agua"],
                moves: ["Danza Lluvia", "Salpicar", "Doble Filo", "Ventisca"]
            },
            {
                name: "Tentacruel",
                id: 73,
                level: 55,
                types: ["Agua", "Veneno"],
                moves: ["Hidrobomba", "Bomba Lodo", "Rayo Hielo", "Tóxico"]
            },
            {
                name: "Ludicolo",
                id: 272,
                level: 56,
                types: ["Agua", "Planta"],
                moves: ["Giga Drenado", "Surf", "Drenadoras", "Doble Equipo"]
            },
            {
                name: "Whiscash",
                id: 340,
                level: 56,
                types: ["Agua", "Tierra"],
                moves: ["Terremoto", "Surf", "Hiperrayo", "Amnesia"]
            },
            {
                name: "Gyarados",
                id: 130,
                level: 56,
                types: ["Agua", "Volador"],
                moves: ["Danza Dragón", "Hiperrayo", "Terremoto", "Surf"]
            },
            {
                name: "Milotic",
                id: 350,
                level: 58,
                types: ["Agua"],
                moves: ["Recuperación", "Surf", "Rayo Hielo", "Tóxico"],
                item: "Baya Ziuela"
            }
        ]
    }
];

