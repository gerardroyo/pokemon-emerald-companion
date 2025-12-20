// Pokémon Platino Gym Leaders and Elite Four

export const platino_gymLeaders = [
    {
        name: "Roco",
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
            { name: "Mismagius", id: 429, level: 26, types: ["Fantasma"], moves: ["Bola Sombra", "Psicorrayo", "Hoja Mágica", "Rayo Confuso"] }
        ]
    },
    {
        name: "Brega",
        city: "Ciudad Rocavelo",
        type: "Lucha",
        badge: "Medalla Cobalto",
        strategy: "Los tipos Volador y Psíquico son claves. Lucario puede resistir mucho gracias a su tipo Acero secundario.",
        pokemon: [
            { name: "Meditite", id: 307, level: 28, types: ["Lucha", "Psíquico"], moves: ["Sorpresa", "Confusión", "Tumba Rocas", "Puño Drenaje"] },
            { name: "Machoke", id: 67, level: 29, types: ["Lucha"], moves: ["Foco Energía", "Karate-choque", "Tumba Rocas", "Fuerza"] },
            { name: "Lucario", id: 448, level: 32, types: ["Lucha", "Acero"], moves: ["Puño Drenaje", "Palmeo", "Garra Metal", "Ataque Óseo"], item: "Baya Ziuela" }
        ]
    },
    {
        name: "Mananti",
        city: "Ciudad Pradera",
        type: "Agua",
        badge: "Medalla Ciénaga",
        strategy: "Tipo Eléctrico y Planta son necesarios. Cuidado con Quagsire, que es inmune a la electricidad por ser tipo Tierra.",
        pokemon: [
            { name: "Gyarados", id: 130, level: 27, types: ["Agua", "Volador"], moves: ["Salmuera", "Mordisco", "Furia Dragón", "Contoneo"] },
            { name: "Quagsire", id: 195, level: 27, types: ["Agua", "Tierra"], moves: ["Portazo", "Bomba Lodo", "Mudar Agua", "Látigo"] },
            { name: "Floatzel", id: 419, level: 30, types: ["Agua"], moves: ["Salmuera", "Colmillo Hielo", "Persecución", "Ataque Rápido"], item: "Baya Ziuela" }
        ]
    },
    {
        name: "Acerón",
        city: "Ciudad Canal",
        type: "Acero",
        badge: "Medalla Mina",
        strategy: "Tipo Fuego, Lucha y Tierra. Bastiodon tiene una defensa física y especial inmensa, intenta desgastarlo.",
        pokemon: [
            { name: "Bronzor", id: 436, level: 36, types: ["Acero", "Psíquico"], moves: ["Trampa Rocas", "Hipnosis", "Rayo Confuso", "Giro Bola"] },
            { name: "Steelix", id: 208, level: 36, types: ["Acero", "Tierra"], moves: ["Colmillo Hielo", "Colmillo Rayo", "Colmillo Ígneo", "Terremoto"] },
            { name: "Bastiodon", id: 411, level: 39, types: ["Roca", "Acero"], moves: ["Roca Afilada", "Defensa Férrea", "Mofa", "Represión Metal"], item: "Baya Ziuela" }
        ]
    },
    {
        name: "Inverna",
        city: "Ciudad Puntaneva",
        type: "Hielo",
        badge: "Medalla Glaciar",
        strategy: "Fuego, Lucha, Acero y Roca. Su Abomasnow invoca Granizo nada más salir.",
        pokemon: [
            { name: "Snover", id: 459, level: 38, types: ["Planta", "Hielo"], moves: ["Alud", "Arraigo", "Ventisca", "Hierba Lazo"] },
            { name: "Sneasel", id: 215, level: 38, types: ["Siniestro", "Hielo"], moves: ["Alud", "Ataque Rápido", "Chirrido", "Canto Helado"] },
            { name: "Medicham", id: 308, level: 40, types: ["Lucha", "Psíquico"], moves: ["Puño Hielo", "Psicocorte", "Detección", "Sorpresa"] },
            { name: "Abomasnow", id: 460, level: 42, types: ["Planta", "Hielo"], moves: ["Alud", "Mazazo", "Onda Certera", "Granizo"], item: "Baya Ziuela" }
        ]
    },
    {
        name: "Lectro",
        city: "Ciudad Marina",
        type: "Eléctrico",
        badge: "Medalla Faro",
        strategy: "Tipo Tierra es indispensable. Electivire tiene una cobertura de movimientos muy amplia con los Puños Elementales.",
        pokemon: [
            { name: "Jolteon", id: 135, level: 46, types: ["Eléctrico"], moves: ["Rayo Carga", "Onda Trueno", "Cola Férrea", "Ataque Rápido"] },
            { name: "Raichu", id: 26, level: 46, types: ["Eléctrico"], moves: ["Rayo Carga", "Doble Rayo", "Onda Certera", "Ataque Rápido"] },
            { name: "Luxray", id: 405, level: 48, types: ["Eléctrico"], moves: ["Colmillo Rayo", "Colmillo Hielo", "Colmillo Ígneo", "Triturar"] },
            { name: "Electivire", id: 466, level: 50, types: ["Eléctrico"], moves: ["Puño Trueno", "Puño Fuego", "Giga Impacto", "Ataque Rápido"], item: "Baya Ziuela" }
        ]
    }
];

export const platino_eliteFour = [
    {
        name: "Alecrán",
        type: "Bicho",
        strategy: "Usa tipos Fuego, Volador o Roca. Drapion es su Pokémon más peligroso y solo es débil a Tierra.",
        pokemon: [
            { name: "Yanomega", id: 469, level: 49, types: ["Bicho", "Volador"], moves: ["Tajo Aéreo", "Zumbido", "Ida y Vuelta", "Doble Equipo"] },
            { name: "Scizor", id: 212, level: 49, types: ["Bicho", "Acero"], moves: ["Cabeza de Hierro", "Tajo X", "Tajo Umbrío", "Ataque Rápido"] },
            { name: "Vespiquen", id: 416, level: 50, types: ["Bicho", "Volador"], moves: ["Al Ataque", "A Defender", "Auxilio", "Gema Robusta"] },
            { name: "Heracross", id: 214, level: 51, types: ["Bicho", "Lucha"], moves: ["Megacuerno", "A Bocajarro", "Tajo Umbrío", "Roca Afilada"] },
            { name: "Drapion", id: 452, level: 53, types: ["Veneno", "Siniestro"], moves: ["Tajo X", "Veneno X", "Colmillo Hielo", "Golpe Aéreo"] }
        ]
    },
    {
        name: "Gaia",
        type: "Tierra",
        strategy: "Ataques de Agua y Planta (especialmente especial) destrozan a la mayoría de su equipo.",
        pokemon: [
            { name: "Whiscash", id: 340, level: 50, types: ["Agua", "Tierra"], moves: ["Tierra Viva", "Tormenta Arena", "Cabezazo Zen", "Acua Cola"] },
            { name: "Gliscor", id: 472, level: 53, types: ["Tierra", "Volador"], moves: ["Terremoto", "Colmillo Ígneo", "Colmillo Hielo", "Colmillo Rayo"] },
            { name: "Hippowdon", id: 450, level: 52, types: ["Tierra"], moves: ["Terremoto", "Piedra Afilada", "Triturar", "Bostezo"] },
            { name: "Golem", id: 76, level: 52, types: ["Roca", "Tierra"], moves: ["Puño Fuego", "Puño Trueno", "Terremoto", "Tormenta Arena"] },
            { name: "Rhyperior", id: 464, level: 55, types: ["Tierra", "Roca"], moves: ["Alud", "Megacuerno", "Terremoto", "Romperrocas"], item: "Baya Ziuela" }
        ]
    },
    {
        name: "Fausto",
        type: "Fuego",
        strategy: "Tierra, Agua y Roca. Su Magmortar y su Infernape son atacantes mixtos muy peligrosos.",
        pokemon: [
            { name: "Houndoom", id: 229, level: 52, types: ["Siniestro", "Fuego"], moves: ["Lanzallamas", "Bomba Lodo", "Pulso Umbrío", "Día Soleado"] },
            { name: "Flareon", id: 136, level: 55, types: ["Fuego"], moves: ["Sofoco", "Giga Impacto", "Ataque Rápido", "Fuego Fatuo"] },
            { name: "Rapidash", id: 78, level: 53, types: ["Fuego"], moves: ["Envite Ígneo", "Rayo Solar", "Bote", "Día Soleado"] },
            { name: "Infernape", id: 392, level: 55, types: ["Fuego", "Lucha"], moves: ["Envite Ígneo", "Puño Trueno", "Ultrapuño", "Terremoto"] },
            { name: "Magmortar", id: 467, level: 57, types: ["Fuego"], moves: ["Lanzallamas", "Rayo", "Rayo Solar", "Hiperrayo"] }
        ]
    },
    {
        name: "Delos",
        type: "Psíquico",
        strategy: "Siniestro, Fantasma y Bicho. Gallade usa ataques físicos de lucha para cubrir sus debilidades.",
        pokemon: [
            { name: "Mr. Mime", id: 122, level: 53, types: ["Psíquico"], moves: ["Psíquico", "Pantalla Luz", "Reflejo", "Rayo"] },
            { name: "Espeon", id: 196, level: 55, types: ["Psíquico"], moves: ["Psíquico", "Ataque Rápido", "Bola Sombra", "Doble Rayo"] },
            { name: "Bronzong", id: 437, level: 54, types: ["Acero", "Psíquico"], moves: ["Psíquico", "Giro Bola", "Paz Mental", "Terremoto"], item: "Refleluz" },
            { name: "Alakazam", id: 65, level: 56, types: ["Psíquico"], moves: ["Psíquico", "Onda Certera", "Recuperación", "Energibola"] },
            { name: "Gallade", id: 475, level: 59, types: ["Psíquico", "Lucha"], moves: ["Psicocorte", "Puño Drenaje", "Hoja Aguda", "Roca Afilada"], item: "Cinta Experto" }
        ]
    },
    {
        name: "Cintia",
        type: "Campeona",
        strategy: "La campeona definitiva. Su Garchomp es legendariamente fuerte. Necesitas un ataque de Hielo sí o sí.",
        pokemon: [
            { name: "Spiritomb", id: 442, level: 58, types: ["Fantasma", "Siniestro"], moves: ["Pulso Umbrío", "Viento Plata", "Bola Sombra", "Psíquico"] },
            { name: "Roserade", id: 407, level: 58, types: ["Planta", "Veneno"], moves: ["Bomba Lodo", "Energibola", "Tóxico", "Extrasensorial"] },
            { name: "Togekiss", id: 468, level: 60, types: ["Normal", "Volador"], moves: ["Tajo Aéreo", "Esfera Aural", "Hidropulso", "Velocidad Extrema"] },
            { name: "Lucario", id: 448, level: 60, types: ["Lucha", "Acero"], moves: ["Esfera Aural", "Bola Sombra", "Roca Afilada", "Velocidad Extrema"] },
            { name: "Milotic", id: 350, level: 58, types: ["Agua"], moves: ["Surf", "Rayo Hielo", "Espejo Manto", "Acua Aro"] },
            { name: "Garchomp", id: 445, level: 62, types: ["Dragón", "Tierra"], moves: ["Carga Dragón", "Terremoto", "Lanzallamas", "Giga Impacto"], item: "Baya Ziuela" }
        ]
    }
];
