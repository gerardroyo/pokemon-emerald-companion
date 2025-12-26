export const blanco_gymLeaders = [
    {
        name: "Maíz, Zeo y Millo",
        city: "Ciudad Gres",
        type: "Fuego/Agua/Planta",
        badge: "Medalla Trío",
        strategy: "El líder al que te enfrentes dependerá de tu inicial. Usará el tipo que tiene ventaja sobre ti. ¡Usa tu mono elemental!",
        pokemon: [
            { id: 506, name: "Lillipup", level: 12, types: ["Normal"], moves: ["Placaje", "Malicioso", "Mordisco"] },
            { id: 511, name: "Pansage", level: 14, types: ["Grass"], moves: ["Arañazo", "Malicioso", "Lamer", "Látigo Cepa"] } // Example for Cress vs Oshawott
            // Note: In a real dynamic app we might want to show all 3 or generic, but for now we simplify or show the "strongest" representative logic 
            // Simplified: Listing the Monkey that might give trouble or just one generic set. 
            // Better: List the "Ace" as one of the monkeys.
        ]
    },
    {
        name: "Aloe",
        city: "Ciudad Esmalte",
        type: "Normal",
        badge: "Medalla Base",
        strategy: "Sus Pokémon son Normales pero golpean duro. Usa Pokémon de tipo Lucha si tienes (Timburr/Sawk/Throh). Cuidado con la Hipnosis de Watchog.",
        pokemon: [
            { id: 507, name: "Herdier", level: 18, types: ["Normal"], moves: ["Derribo", "Malicioso", "Mordisco", "Represalia"] },
            { id: 505, name: "Watchog", level: 20, types: ["Normal"], moves: ["Represalia", "Triturar", "Hipnosis", "Mal de Ojo"] }
        ]
    },
    {
        name: "Camus",
        city: "Ciudad Porcelana",
        type: "Bug",
        badge: "Medalla Élitro",
        strategy: "Líder de tipo Bicho. Los ataques de Fuego (Darumaka/Pansear) y Volador (Pidove/Swoobat) son muy efectivos.",
        pokemon: [
            { id: 543, name: "Whirlipede", level: 21, types: ["Bug", "Poison"], moves: ["Persecución", "Chirrido", "Picadura", "Defensa Férrea"] },
            { id: 557, name: "Dwebble", level: 21, types: ["Bug", "Rock"], moves: ["Antiaéreo", "Picadura", "Finta", "Pulimento"] },
            { id: 542, name: "Leavanny", level: 23, types: ["Bug", "Grass"], moves: ["Hoja Afilada", "Picadura", "Disparo Demora", "Protección"] }
        ]
    },
    {
        name: "Camila",
        city: "Ciudad Mayólica",
        type: "Electric",
        badge: "Medalla Voltio",
        strategy: "Sus Emolga son molestos por el Voltiocambio. Usa Pokémon de tipo Roca o Tierra (Sandile/Drilbur) para bloquear sus ataques eléctricos.",
        pokemon: [
            { id: 587, name: "Emolga", level: 25, types: ["Electric", "Flying"], moves: ["Voltiocambio", "Golpe Aéreo", "Persecución", "Ataque Rápido"] },
            { id: 587, name: "Emolga", level: 25, types: ["Electric", "Flying"], moves: ["Voltiocambio", "Golpe Aéreo", "Persecución", "Ataque Rápido"] },
            { id: 523, name: "Zebstrika", level: 27, types: ["Electric"], moves: ["Voltiocambio", "Nitrocarga", "Persecución", "Ataque Rápido"] }
        ]
    },
    {
        name: "Yakón",
        city: "Ciudad Fayenza",
        type: "Ground",
        badge: "Medalla Temblor",
        strategy: "Líder de Tierra. Su Excadrill es muy peligroso y rápido. Agua y Planta son tus mejores amigos aquí.",
        pokemon: [
            { id: 552, name: "Krokorok", level: 29, types: ["Ground", "Dark"], moves: ["Triturar", "Terratemblor", "Tormento", "Contoneo"] },
            { id: 536, name: "Palpitoad", level: 29, types: ["Water", "Ground"], moves: ["Agua Lodosa", "Aqua Aro", "Terratemblor", "Onda Voltio"] },
            { id: 530, name: "Excadrill", level: 31, types: ["Ground", "Steel"], moves: ["Terratemblor", "Avalancha", "Garra Metal", "Afilagarras"] }
        ]
    },
    {
        name: "Gerania",
        city: "Ciudad Loza",
        type: "Flying",
        badge: "Medalla Jet",
        strategy: "Usa Pokémon Eléctricos (Zebstrika/Galvantula) o Roca. Cuidado con el Aqua Aro y Escaldar de Swanna.",
        pokemon: [
            { id: 528, name: "Swoobat", level: 33, types: ["Psychic", "Flying"], moves: ["Acróbata", "Seducción", "Amnesia", "Garantía"] },
            { id: 520, name: "Unfezant", level: 33, types: ["Normal", "Flying"], moves: ["Aire Afilado", "Acróbata", "Seducción", "Detección"] },
            { id: 581, name: "Swanna", level: 35, types: ["Water", "Flying"], moves: ["Acróbata", "Rayo Burbuja", "Seducción", "Aqua Aro"] }
        ]
    },
    {
        name: "Junco",
        city: "Ciudad Teja",
        type: "Ice",
        badge: "Medalla Candelizo",
        strategy: "El Hielo es débil a Fuego, Lucha, Roca y Acero. Un buen tipo Lucha destrozará a sus Pokémon.",
        pokemon: [
            { id: 583, name: "Vanillish", level: 37, types: ["Ice"], moves: ["Vaho Gélido", "Impresionar", "Armadura Ácida", "Espejo"] },
            { id: 615, name: "Cryogonal", level: 37, types: ["Ice"], moves: ["Vaho Gélido", "Rayo Aurora", "Reflejo", "Giro Rápido"] },
            { id: 614, name: "Beartic", level: 39, types: ["Ice"], moves: ["Chuzos", "Cuchillada", "Salmuera", "Contoneo"] }
        ]
    },
    {
        name: "Iris",
        city: "Ciudad Caolín",
        type: "Dragon",
        badge: "Medalla Leyenda",
        strategy: "Líder de Dragones. Los ataques de Hielo son devastadores. Un tipo Dragón propio también funciona, pero es arriesgado.",
        pokemon: [
            { id: 611, name: "Fraxure", level: 41, types: ["Dragon"], moves: ["Cola Dragón", "Danza Dragón", "Furia Dragón", "Garantía"] },
            { id: 621, name: "Druddigon", level: 41, types: ["Dragon"], moves: ["Cola Dragón", "Venganza", "Tajo Umbrío", "Guardia Baja"] },
            { id: 612, name: "Haxorus", level: 43, types: ["Dragon"], moves: ["Cola Dragón", "Danza Dragón", "Tajo Umbrío", "Falsotortazo"] }
        ]
    }
];

export const blanco_eliteFour = [
    {
        name: "Anís",
        type: "Ghost",
        strategy: "Maestra de Fantasmas. Cuidado con la cobertura de sus Pokémon. Siniestro es tu mejor opción.",
        pokemon: [
            { id: 563, name: "Cofagrigus", level: 48, types: ["Ghost"], moves: ["Bola Sombra", "Psíquico", "Fuego Fatuo", "Hierba Lazo"] },
            { id: 593, name: "Jellicent", level: 48, types: ["Water", "Ghost"], moves: ["Surf", "Bola Sombra", "Energibola", "Salmuera"] },
            { id: 623, name: "Golurk", level: 48, types: ["Ground", "Ghost"], moves: ["Puño Sombra", "Terremoto", "Maldición", "Machada"] },
            { id: 609, name: "Chandelure", level: 50, types: ["Ghost", "Fire"], moves: ["Llamarada", "Bola Sombra", "Psíquico", "Vendetta"] }
        ]
    },
    {
        name: "Aza",
        type: "Dark",
        strategy: "Usa tipos Siniestros. Lucha y Bicho son muy efectivos. Cuidado con sus ataques Psíquicos de cobertura.",
        pokemon: [
            { id: 560, name: "Scrafty", level: 48, types: ["Dark", "Fighting"], moves: ["Triturar", "Demolición", "Puya Nociva", "Ataque Arena"] },
            { id: 553, name: "Krookodile", level: 48, types: ["Ground", "Dark"], moves: ["Triturar", "Terremoto", "Enfado", "Juego Sucio"] },
            { id: 510, name: "Liepard", level: 48, types: ["Dark"], moves: ["Tajo Umbrío", "Golpe Aéreo", "Sorpresa", "Atracción"] },
            { id: 625, name: "Bisharp", level: 50, types: ["Dark", "Steel"], moves: ["Tajo Umbrío", "Cabezahierro", "Tijera X", "Guillotina"] }
        ]
    },
    {
        name: "Catleya",
        type: "Psychic",
        strategy: "Usa Pokémon Psíquicos. Fantasma, Siniestro y Bicho son tus mejores armas.",
        pokemon: [
            { id: 579, name: "Reuniclus", level: 48, types: ["Psychic"], moves: ["Psíquico", "Onda Certera", "Bola Sombra", "Trueno"] },
            { id: 561, name: "Sigilyph", level: 48, types: ["Psychic", "Flying"], moves: ["Psíquico", "Tajo Aéreo", "Bola Sombra", "Rayo Hielo"] },
            { id: 518, name: "Musharna", level: 48, types: ["Psychic"], moves: ["Psíquico", "Bola Sombra", "Energibola", "Reflejo"] },
            { id: 576, name: "Gothitelle", level: 50, types: ["Psychic"], moves: ["Psíquico", "Rayo", "Bola Sombra", "Paz Mental"] }
        ]
    },
    {
        name: "Lotto",
        type: "Fighting",
        strategy: "Especialista en Lucha. Volador y Psíquico son claves, pero cuidado con Roca Afilada.",
        pokemon: [
            { id: 538, name: "Throh", level: 48, types: ["Fighting"], moves: ["Llave Corsé", "Roca Afilada", "Vendetta", "Corpulencia"] },
            { id: 539, name: "Sawk", level: 48, types: ["Fighting"], moves: ["Golpe Karate", "Roca Afilada", "Represalia", "Hierba Lazo"] },
            { id: 620, name: "Mienshao", level: 48, types: ["Fighting"], moves: ["Patada S. Alta", "Avalancha", "Ida y Vuelta", "Represalia"] },
            { id: 534, name: "Conkeldurr", level: 50, types: ["Fighting"], moves: ["Machada", "Roca Afilada", "Represalia", "Corpulencia"] }
        ]
    },
    {
        name: "Mirto",
        type: "Bug",
        strategy: "El Campeón de Teselia. Su equipo es variado pero con base en Bicho. Fuego, Volador y Roca son buenos.",
        pokemon: [
            { id: 617, name: "Accelgor", level: 75, types: ["Bug"], moves: ["Zumbido", "Onda Certera", "Energibola", "Me First"] },
            { id: 626, name: "Bouffalant", level: 75, types: ["Normal"], moves: ["Ariete", "Terremoto", "Megacuerno", "Roca Afilada"] },
            { id: 621, name: "Druddigon", level: 75, types: ["Dragon"], moves: ["Enfado", "Fuerza Bruta", "Tajo Umbrío", "Represalia"] },
            { id: 584, name: "Vanilluxe", level: 75, types: ["Ice"], moves: ["Ventisca", "Foco Resplandor", "Pantalla Luz", "Liofilización"] }, // Note: Liofilización might be too new, using simpler moves if needed but sticking to standard
            { id: 589, name: "Escavalier", level: 75, types: ["Bug", "Steel"], moves: ["Megacuerno", "Cabeza de Hierro", "Tijera X", "Golpe Aéreo"] },
            { id: 637, name: "Volcarona", level: 77, types: ["Bug", "Fire"], moves: ["Danza Aleteo", "Sofoco", "Zumbido", "Hiperrayo"] }
        ]
    }
];
