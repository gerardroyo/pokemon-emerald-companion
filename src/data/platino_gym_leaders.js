// Pokémon Platino Gym Leaders and Elite Four

export const platino_gymLeaders = [
    {
        name: "Roark",
        city: "Ciudad Pirita",
        type: "Roca",
        badge: "Medalla Lignito",
        strategy: "Los ataques de Agua, Planta y Lucha son letales. Cranidos tiene un Ataque altísimo para ser el primer gimnasio.",
        pokemon: [
            { name: "Geodude", id: 74, level: 12, types: ["Roca", "Tierra"], moves: ["Trampa Rocas", "Desenrollar", "Empujón"] },
            { name: "Onix", id: 95, level: 12, types: ["Roca", "Tierra"], moves: ["Trampa Rocas", "Chirrido", "Lanzarrocas"] },
            { name: "Cranidos", id: 408, level: 14, types: ["Roca"], moves: ["Golpe Cabeza", "Malicioso", "Persecución"] }
        ]
    },
    {
        name: "Gardenia",
        city: "Ciudad Eterna",
        type: "Planta",
        badge: "Medalla Bosque",
        strategy: "Usa tipos Fuego, Volador o Bicho. Su Roserade usa Hierba Lazo, que hace más daño a Pokémon pesados.",
        pokemon: [
            { name: "Turtwig", id: 387, level: 20, types: ["Planta"], moves: ["Reflejo", "Hoja Afilada", "Día Soleado"] },
            { name: "Cherrim", id: 421, level: 20, types: ["Planta"], moves: ["Día Soleado", "Bomba Germen", "Drenadoras"] },
            { name: "Roserade", id: 407, level: 22, types: ["Planta", "Veneno"], moves: ["Hierba Lazo", "Hoja Mágica", "Paralizador", "Ponzoña"] }
        ]
    },
    {
        name: "Fantina",
        city: "Ciudad Corazón",
        type: "Fantasma",
        badge: "Medalla Reliquia",
        strategy: "El tipo Siniestro es tu mejor aliado. Su Mismagius es muy rápido y golpea fuerte por el lado especial.",
        pokemon: [
            { name: "Duskull", id: 355, level: 24, types: ["Fantasma"], moves: ["Sombra Nocturna", "Fuego Fatuo", "Rayo Confuso"] },
            { name: "Haunter", id: 93, level: 24, types: ["Fantasma", "Veneno"], moves: ["Puño Sombra", "Rayo Confuso", "Hipnosis"] },
            { name: "Mismagius", id: 429, level: 26, types: ["Fantasma"], moves: ["Bola Sombra", "Psicorrayo", "Hoja Mágica", "Rayos Confusos"] }
        ]
    },
    {
        name: "Maylene",
        city: "Ciudad Rocavelo",
        type: "Lucha",
        badge: "Medalla Cobalto",
        strategy: "Los tipos Volador y Psíquico son claves. Lucario puede resistir mucho gracias a su tipo Acero secundario.",
        pokemon: [
            { name: "Meditite", id: 307, level: 28, types: ["Lucha", "Psíquico"], moves: ["Detección", "Confusión", "Puño Hielo"] },
            { name: "Machoke", id: 67, level: 29, types: ["Lucha"], moves: ["Puntapié", "Tiro Vital", "Corpulencia"] },
            { name: "Lucario", id: 448, level: 32, types: ["Lucha", "Acero"], moves: ["Palmeo", "Garra Metal", "Ataque Óseo"] }
        ]
    },
    {
        name: "Crasher Wake",
        city: "Ciudad Pradera",
        type: "Agua",
        badge: "Medalla Ciénaga",
        strategy: "Tipo Eléctrico y Planta son necesarios. Cuidado con Quagsire, que es inmune a la electricidad por ser tipo Tierra.",
        pokemon: [
            { name: "Gyarados", id: 130, level: 33, types: ["Agua", "Volador"], moves: ["Cascada", "Mordisco", "Salmuera"] },
            { name: "Quagsire", id: 195, level: 34, types: ["Agua", "Tierra"], moves: ["Bofetón Lodo", "Disparo Lodo", "Golpe Cuerpo"] },
            { name: "Floatzel", id: 419, level: 37, types: ["Agua"], moves: ["Salmuera", "Acua-Jet", "Colmillo Hielo"] }
        ]
    },
    {
        name: "Byron",
        city: "Ciudad Canal",
        type: "Acero",
        badge: "Medalla Mina",
        strategy: "Tipo Fuego, Lucha y Tierra. Bastiodon tiene una defensa física y especial inmensa, intenta desgastarlo.",
        pokemon: [
            { name: "Magneton", id: 82, level: 37, types: ["Eléctrico", "Acero"], moves: ["Foco Resplandor", "Triataque", "Rayo"] },
            { name: "Steelix", id: 208, level: 38, types: ["Acero", "Tierra"], moves: ["Terremoto", "Colmillo Hielo", "Cabeza de Hierro"] },
            { name: "Bastiodon", id: 411, level: 41, types: ["Roca", "Acero"], moves: ["Cabeza de Hierro", "Cuerpo Pesado", "Poder Pasado"] }
        ]
    },
    {
        name: "Candice",
        city: "Ciudad Puntaneva",
        type: "Hielo",
        badge: "Medalla Glaciar",
        strategy: "Fuego, Lucha, Acero y Roca. Su Froslass usa Granizo y Manto Níveo para que falles tus ataques.",
        pokemon: [
            { name: "Sneasel", id: 215, level: 40, types: ["Siniestro", "Hielo"], moves: ["Tajo Umbrío", "Canto Helado", "Finta"] },
            { name: "Piloswine", id: 221, level: 40, types: ["Hielo", "Tierra"], moves: ["Terremoto", "Avalancha", "Canto Helado"] },
            { name: "Abomasnow", id: 460, level: 42, types: ["Planta", "Hielo"], moves: ["Mazazo", "Puño Hielo", "Arraigo"] },
            { name: "Froslass", id: 478, level: 44, types: ["Hielo", "Fantasma"], moves: ["Ventisca", "Bola Sombra", "Rayo Confuso"] }
        ]
    },
    {
        name: "Volkner",
        city: "Ciudad Marina",
        type: "Eléctrico",
        badge: "Medalla Faro",
        strategy: "Tipo Tierra es indispensable. Electivire tiene una cobertura de movimientos muy amplia con los Puños Elementales.",
        pokemon: [
            { name: "Jolteon", id: 135, level: 46, types: ["Eléctrico"], moves: ["Rayo", "Carga", "Doble Rayo"] },
            { name: "Raichu", id: 26, level: 46, types: ["Eléctrico"], moves: ["Rayo", "Onda Trueno", "Carga"] },
            { name: "Luxray", id: 405, level: 48, types: ["Eléctrico"], moves: ["Colmillo Rayo", "Triturar", "Colmillo Hielo"] },
            { name: "Electivire", id: 466, level: 50, types: ["Eléctrico"], moves: ["Puño Trueno", "Puño Fuego", "Puño Hielo", "Giga Impacto"] }
        ]
    }
];

export const platino_eliteFour = [
    {
        name: "Aaron",
        type: "Bicho",
        strategy: "Usa tipos Fuego, Volador o Roca. Drapion es su Pokémon más peligroso y solo es débil a Tierra.",
        pokemon: [
            { name: "Yanomega", id: 469, level: 49, types: ["Bicho", "Volador"], moves: ["Tajo Aéreo", "Zumbido", "Ida y Vuelta"] },
            { name: "Scizor", id: 212, level: 49, types: ["Bicho", "Acero"], moves: ["Cabeza de Hierro", "Tajo Umbrío", "Ataque Rápido"] },
            { name: "Vespiquen", id: 416, level: 50, types: ["Bicho", "Volador"], moves: ["Al ataque", "A defender", "Auxilio"] },
            { name: "Heracross", id: 214, level: 51, types: ["Bicho", "Lucha"], moves: ["A bocajarro", "Megacuerno", "Tajo Umbrío"] },
            { name: "Drapion", id: 452, level: 53, types: ["Veneno", "Siniestro"], moves: ["Veneno X", "Tajo Umbrío", "Colmillo Hielo"] }
        ]
    },
    {
        name: "Bertha",
        type: "Tierra",
        strategy: "Ataques de Agua y Planta (especialmente especial) destrozan a la mayoría de su equipo.",
        pokemon: [
            { name: "Whiscash", id: 340, level: 50, types: ["Agua", "Tierra"], moves: ["Tierra Viva", "Acua-Aro", "Cede Paso"] },
            { name: "Gliscor", id: 472, level: 53, types: ["Tierra", "Volador"], moves: ["Terremoto", "Colmillo Ígneo", "Colmillo Rayo"] },
            { name: "Hippowdon", id: 450, level: 52, types: ["Tierra"], moves: ["Terremoto", "Piedra Afilada", "Relajo"] },
            { name: "Golem", id: 76, level: 52, types: ["Roca", "Tierra"], moves: ["Terremoto", "Piedra Afilada", "Explosión"] },
            { name: "Rhyperior", id: 464, level: 55, types: ["Tierra", "Roca"], moves: ["Terremoto", "Roca Afilada", "Megacuerno"] }
        ]
    },
    {
        name: "Flint",
        type: "Fuego",
        strategy: "Tierra, Agua y Roca. Su Magmortar y su Infernape son atacantes mixtos muy peligrosos.",
        pokemon: [
            { name: "Houndoom", id: 229, level: 52, types: ["Siniestro", "Fuego"], moves: ["Lanzallamas", "Pulso Umbrío", "Mofa"] },
            { name: "Flareon", id: 136, level: 55, types: ["Fuego"], moves: ["Envite Ígneo", "Ataque Rápido", "Fuego Fatuo"] },
            { name: "Rapidash", id: 78, level: 53, types: ["Fuego"], moves: ["Envite Ígneo", "Bote", "Día Soleado"] },
            { name: "Magmortar", id: 467, level: 57, types: ["Fuego"], moves: ["Llamarada", "Rayo", "Onda Certera"] },
            { name: "Infernape", id: 392, level: 55, types: ["Fuego", "Lucha"], moves: ["A bocajarro", "Envite Ígneo", "Puño Trueno"] }
        ]
    },
    {
        name: "Lucian",
        type: "Psíquico",
        strategy: "Siniestro, Fantasma y Bicho. Gallade usa ataques físicos de lucha para cubrir sus debilidades.",
        pokemon: [
            { name: "Mr. Mime", id: 122, level: 53, types: ["Psíquico"], moves: ["Psíquico", "Reflejo", "Pantalla Luz"] },
            { name: "Espeon", id: 196, level: 55, types: ["Psíquico"], moves: ["Psíquico", "Bola Sombra", "Paz Mental"] },
            { name: "Bronzong", id: 437, level: 54, types: ["Acero", "Psíquico"], moves: ["Giro Bola", "Psíquico", "Terremoto"] },
            { name: "Alakazam", id: 65, level: 56, types: ["Psíquico"], moves: ["Psíquico", "Recuperación", "Onda Certera"] },
            { name: "Gallade", id: 475, level: 59, types: ["Psíquico", "Lucha"], moves: ["Psicocorte", "A bocajarro", "Tajo Umbrío", "Hoja Aguda"] }
        ]
    },
    {
        name: "Cynthia",
        type: "Campeona",
        strategy: "La campeona definitiva. Su Garchomp es legendariamente fuerte. Necesitas un ataque de Hielo sí o sí.",
        pokemon: [
            { name: "Spiritomb", id: 442, level: 58, types: ["Fantasma", "Siniestro"], moves: ["Bola Sombra", "Pulso Umbrío", "Viento Plata"] },
            { name: "Roserade", id: 407, level: 58, types: ["Planta", "Veneno"], moves: ["Bomba Lodo", "Energibola", "Extrasensorial"] },
            { name: "Togekiss", id: 468, level: 60, types: ["Normal", "Volador"], moves: ["Tajo Aéreo", "Esfera Aural", "Pulso Ondulado"] },
            { name: "Lucario", id: 448, level: 60, types: ["Lucha", "Acero"], moves: ["Esfera Aural", "Foco Resplandor", "Psíquico"] },
            { name: "Milotic", id: 350, level: 58, types: ["Agua"], moves: ["Surf", "Rayo Hielo", "Espejo Manto"] },
            { name: "Garchomp", id: 445, level: 62, types: ["Dragón", "Tierra"], moves: ["Carga Dragón", "Terremoto", "Llamarada", "Giga Impacto"] }
        ]
    }
];
