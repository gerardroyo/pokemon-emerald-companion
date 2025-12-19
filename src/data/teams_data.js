/**
 * teams_data.js
 * Multiple predefined teams for Pokemon Emerald
 * Organized by category: difficulty, thematic, mechanic
 */

const baseMovesets = {
  swampert: [
    { name: "Surf", type: "Agua", category: "Especial" },
    { name: "Terremoto", type: "Tierra", category: "Físico" },
    { name: "Rayo Hielo", type: "Hielo", category: "Especial" },
    { name: "Cascada", type: "Agua", category: "Físico" }
  ],
  gardevoir: [
    { name: "Psíquico", type: "Psíquico", category: "Especial" },
    { name: "Rayo", type: "Eléctrico", category: "Especial" },
    { name: "Paz Mental", type: "Psíquico", category: "Estado" },
    { name: "Bola Sombra", type: "Fantasma", category: "Especial" }
  ],
  breloom: [
    { name: "Espora", type: "Planta", category: "Estado" },
    { name: "Gancho Alto", type: "Lucha", category: "Físico" },
    { name: "Giga Drenado", type: "Planta", category: "Especial" },
    { name: "Corpulencia", type: "Lucha", category: "Estado" }
  ],
  manectric: [
    { name: "Rayo", type: "Eléctrico", category: "Especial" },
    { name: "Mordisco", type: "Siniestro", category: "Especial" },
    { name: "Onda Trueno", type: "Eléctrico", category: "Estado" },
    { name: "Ataque Rápido", type: "Normal", category: "Físico" }
  ],
  flygon: [
    { name: "Terremoto", type: "Tierra", category: "Físico" },
    { name: "Avalancha", type: "Roca", category: "Físico" },
    { name: "Garra Dragón", type: "Dragón", category: "Especial" },
    { name: "Vuelo", type: "Volador", category: "Físico" }
  ],
  salamence: [
    { name: "Vuelo", type: "Volador", category: "Físico" },
    { name: "Garra Dragón", type: "Dragón", category: "Especial" },
    { name: "Lanzallamas", type: "Fuego", category: "Especial" },
    { name: "Demolición", type: "Lucha", category: "Físico" }
  ],
  blaziken: [
    { name: "Patada de Fuego", type: "Fuego", category: "Físico" },
    { name: "Patada Alta", type: "Lucha", category: "Físico" },
    { name: "Piedra Fría", type: "Hielo", category: "Especial" },
    { name: "Rayo", type: "Eléctrico", category: "Especial" }
  ],
  metagross: [
    { name: "Meteoro", type: "Acero", category: "Especial" },
    { name: "Terremoto", type: "Tierra", category: "Físico" },
    { name: "Garra Dragón", type: "Dragón", category: "Especial" },
    { name: "Rayo", type: "Eléctrico", category: "Especial" }
  ],
  milotic: [
    { name: "Surf", type: "Agua", category: "Especial" },
    { name: "Rayo Hielo", type: "Hielo", category: "Especial" },
    { name: "Descanso", type: "Psíquico", category: "Estado" },
    { name: "Recuperación", type: "Normal", category: "Estado" }
  ],
  altaria: [
    { name: "Rayo Hielo", type: "Hielo", category: "Especial" },
    { name: "Psicocarga", type: "Psíquico", category: "Especial" },
    { name: "Lanzallamas", type: "Fuego", category: "Especial" },
    { name: "Danza Dragón", type: "Dragón", category: "Estado" }
  ],
  aggron: [
    { name: "Cabezazo", type: "Acero", category: "Físico" },
    { name: "Terremoto", type: "Tierra", category: "Físico" },
    { name: "Piedra Potencia", type: "Roca", category: "Físico" },
    { name: "Cabeza de Hierro", type: "Acero", category: "Físico" }
  ],
  rayquaza: [
    { name: "Garra Dragón", type: "Dragón", category: "Especial" },
    { name: "Terremoto", type: "Tierra", category: "Físico" },
    { name: "Lanzallamas", type: "Fuego", category: "Especial" },
    { name: "Avinazo", type: "Volador", category: "Físico" }
  ],
  groudon: [
    { name: "Terremoto", type: "Tierra", category: "Físico" },
    { name: "Lanzallamas", type: "Fuego", category: "Especial" },
    { name: "Sequia", type: "Fuego", category: "Estado" },
    { name: "Garra Dragón", type: "Dragón", category: "Especial" }
  ],
  kyogre: [
    { name: "Surf", type: "Agua", category: "Especial" },
    { name: "Lluvia", type: "Agua", category: "Estado" },
    { name: "Rayo", type: "Eléctrico", category: "Especial" },
    { name: "Rayo Hielo", type: "Hielo", category: "Especial" }
  ],
  sceptile: [
    { name: "Hoja Afilada", type: "Planta", category: "Físico" },
    { name: "Danza Espada", type: "Normal", category: "Estado" },
    { name: "Rayo", type: "Eléctrico", category: "Especial" },
    { name: "Terremoto", type: "Tierra", category: "Físico" }
  ],
  swampertSpeedrun: [
    { name: "Surf", type: "Agua", category: "Especial" },
    { name: "Terremoto", type: "Tierra", category: "Físico" },
    { name: "Cascada", type: "Agua", category: "Físico" },
    { name: "Rayo Hielo", type: "Hielo", category: "Especial" }
  ],
  kingdra: [
    { name: "Surf", type: "Agua", category: "Especial" },
    { name: "Rayo Hielo", type: "Hielo", category: "Especial" },
    { name: "Garra Dragón", type: "Dragón", category: "Especial" },
    { name: "Lluvia", type: "Agua", category: "Estado" }
  ],
  gyarados: [
    { name: "Terremoto", type: "Tierra", category: "Físico" },
    { name: "Mordedura", type: "Siniestro", category: "Físico" },
    { name: "Avalancha", type: "Hielo", category: "Físico" },
    { name: "Vuelo", type: "Volador", category: "Físico" }
  ],
  sharpedo: [
    { name: "Mordedura", type: "Siniestro", category: "Físico" },
    { name: "Pirueta Ictio", type: "Agua", category: "Físico" },
    { name: "Niebla", type: "Agua", category: "Estado" },
    { name: "Terremoto", type: "Tierra", category: "Físico" }
  ],
  sceptile: [
    { name: "Hoja Afilada", type: "Planta", category: "Físico" },
    { name: "Danza Espada", type: "Normal", category: "Estado" },
    { name: "Rayo", type: "Eléctrico", category: "Especial" },
    { name: "Terremoto", type: "Tierra", category: "Físico" }
  ]
};

export const teamCategories = [
  { id: "difficulty", name: "Por Objetivo", icon: "🎯" },
  { id: "thematic", name: "Por Temática", icon: "🎨" },
  { id: "mechanic", name: "Por Mecánica", icon: "⚙️" }
];

export const teams = {
  // Difficulty/Objective Teams
  competitive: {
    id: "competitive",
    name: "🏆 Competitivo",
    description: "Equipo óptimo para derrotar al Alto Mando y ser campeón. Balanceado y potente.",
    category: "difficulty",
    pokemon: [
      {
        name: "Swampert",
        id: 260,
        types: ["Agua", "Tierra"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
        location: "Inicial (Mudkip)",
        role: "Tanque Mixto / Líder",
        item: "Arena Fina",
        nature: "Plácida / Audaz",
        moves: baseMovesets.swampert
      },
      {
        name: "Gardevoir",
        id: 282,
        types: ["Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
        location: "Ruta 102 (Ralts)",
        role: "Atacante Especial",
        item: "Cuchara Torcida",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.gardevoir
      },
      {
        name: "Breloom",
        id: 286,
        types: ["Planta", "Lucha"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
        location: "Bosque Petalia (Shroomish)",
        role: "Físico / Espora",
        item: "Semilla Milagro",
        nature: "Firme / Alegre",
        moves: baseMovesets.breloom
      },
      {
        name: "Manectric",
        id: 310,
        types: ["Eléctrico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
        location: "Ruta 110 (Electrike)",
        role: "Velocidad Especial",
        item: "Imán",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.manectric
      },
      {
        name: "Flygon",
        id: 330,
        types: ["Tierra", "Dragón"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
        location: "Ruta 111 (Trapinch)",
        role: "Atacante Físico",
        item: "Arena Fina",
        nature: "Firme / Alegre",
        moves: baseMovesets.flygon
      },
      {
        name: "Salamence",
        id: 373,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
        location: "Cascada Meteoro (Bagon)",
        role: "Potencia Bruta",
        item: "Colmillo Dragón",
        nature: "Pícara / Ingenua",
        moves: baseMovesets.salamence
      }
    ]
  },
  speedrun: {
    id: "speedrun",
    name: "⚡ Speedrun",
    description: "Pokémon rápidos y poderosos para terminar el juego velozmente. Máxima velocidad y power.",
    category: "difficulty",
    pokemon: [
      {
        name: "Blaziken",
        id: 257,
        types: ["Fuego", "Lucha"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
        location: "Inicial (Torchic)",
        role: "Atacante Físico Veloz",
        item: "Banda Enfoque",
        nature: "Alegre / Activa",
        moves: baseMovesets.blaziken
      },
      {
        name: "Manectric",
        id: 310,
        types: ["Eléctrico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
        location: "Ruta 110 (Electrike)",
        role: "Velocidad Especial",
        item: "Imán",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.manectric
      },
      {
        name: "Altaria",
        id: 334,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
        location: "Ruta 119 (Swablu)",
        role: "Velocidad Dragón",
        item: "Capa Suave",
        nature: "Pícara / Ingenua",
        moves: baseMovesets.altaria
      },
      {
        name: "Salamence",
        id: 373,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
        location: "Cascada Meteoro (Bagon)",
        role: "Velocidad Física Explosiva",
        item: "Colmillo Dragón",
        nature: "Pícara / Ingenua",
        moves: baseMovesets.salamence
      },
      {
        name: "Metagross",
        id: 376,
        types: ["Acero", "Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
        location: "Cascada Meteoro (Beldum)",
        role: "Atacante Mixto Rápido",
        item: "Lentes de Precisión",
        nature: "Pícara / Activa",
        moves: baseMovesets.metagross
      },
      {
        name: "Sharpedo",
        id: 319,
        types: ["Agua", "Siniestro"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
        location: "Ruta 110 (Carvanha)",
        role: "Velocidad Física Agua",
        item: "Banda Enfoque",
        nature: "Alegre / Activa",
        moves: baseMovesets.sharpedo
      }
    ]
  },
  nuzlocke: {
    id: "nuzlocke",
    name: "💀 Nuzlocke",
    description: "Pokémon resistentes para sobrevivir a los ataques del Alto Mando. Máxima defensa.",
    category: "difficulty",
    pokemon: [
      {
        name: "Swampert",
        id: 260,
        types: ["Agua", "Tierra"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
        location: "Inicial (Mudkip)",
        role: "Tanque Mixto / Líder",
        item: "Arena Fina",
        nature: "Plácida / Audaz",
        moves: baseMovesets.swampert
      },
      {
        name: "Milotic",
        id: 350,
        types: ["Agua"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
        location: "Ruta 119 (Feebas)",
        role: "Tanque Especial",
        item: "Banda Defensiva",
        nature: "Plácida / Prudente",
        moves: baseMovesets.milotic
      },
      {
        name: "Altaria",
        id: 334,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
        location: "Ruta 119 (Swablu)",
        role: "Tanque Mixto Volador",
        item: "Capa Suave",
        nature: "Plácida / Prudente",
        moves: baseMovesets.altaria
      },
      {
        name: "Aggron",
        id: 306,
        types: ["Acero", "Roca"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
        location: "Ruta 112 (Aron)",
        role: "Tanque Físico",
        item: "Armadura Defensiva",
        nature: "Plácida / Audaz",
        moves: baseMovesets.aggron
      },
      {
        name: "Gyarados",
        id: 130,
        types: ["Agua", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        location: "Ruta 119 (Magikarp)",
        role: "Tanque Mixto Volador",
        item: "Escudo Especial",
        nature: "Plácida / Prudente",
        moves: baseMovesets.gyarados
      },
      {
        name: "Metagross",
        id: 376,
        types: ["Acero", "Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
        location: "Cascada Meteoro (Beldum)",
        role: "Acero Defensivo",
        item: "Lentes de Precisión",
        nature: "Prudente / Plácida",
        moves: baseMovesets.metagross
      }
    ]
  },
  favorites: {
    id: "favorites",
    name: "🌟 Favoritos",
    description: "Los Pokémon más queridos de Hoenn. Equipo sentimental pero competitivo.",
    category: "difficulty",
    pokemon: [
      {
        name: "Swampert",
        id: 260,
        types: ["Agua", "Tierra"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
        location: "Inicial (Mudkip)",
        role: "Estrella Principal",
        item: "Arena Fina",
        nature: "Plácida / Audaz",
        moves: baseMovesets.swampert
      },
      {
        name: "Gardevoir",
        id: 282,
        types: ["Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
        location: "Ruta 102 (Ralts)",
        role: "Favorito Especial",
        item: "Cuchara Torcida",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.gardevoir
      },
      {
        name: "Salamence",
        id: 373,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
        location: "Cascada Meteoro (Bagon)",
        role: "Dragón Legendario",
        item: "Colmillo Dragón",
        nature: "Pícara / Ingenua",
        moves: baseMovesets.salamence
      },
      {
        name: "Metagross",
        id: 376,
        types: ["Acero", "Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
        location: "Cascada Meteoro (Beldum)",
        role: "Máquina Legendaria",
        item: "Lentes de Precisión",
        nature: "Pícara / Activa",
        moves: baseMovesets.metagross
      },
      {
        name: "Milotic",
        id: 350,
        types: ["Agua"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
        location: "Ruta 119 (Feebas)",
        role: "Belleza del Agua",
        item: "Banda Asalto",
        nature: "Modesta / Tímida",
        moves: baseMovesets.milotic
      },
      {
        name: "Altaria",
        id: 334,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
        location: "Ruta 119 (Swablu)",
        role: "Nube Voladora",
        item: "Capa Suave",
        nature: "Plácida / Prudente",
        moves: baseMovesets.altaria
      }
    ]
  },

  // Thematic/Style Teams
  balanced_team: {
    id: "balanced_team",
    name: "⚖️ Equipo Balanceado",
    description: "Cobertura de tipos perfecta. Equipo versátil sin starters legendarios.",
    category: "thematic",
    pokemon: [
      {
        name: "Sceptile",
        id: 254,
        types: ["Planta"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
        location: "Inicial (Treecko)",
        role: "Velocidad Planta",
        item: "Banda Enfoque",
        nature: "Alegre / Activa",
        moves: baseMovesets.sceptile
      },
      {
        name: "Crobat",
        id: 169,
        types: ["Veneno", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
        location: "Ruta 110 (Zubat)",
        role: "Velocidad Volador",
        item: "Banda Enfoque",
        nature: "Alegre / Activa",
        moves: [
          { name: "Mordisco", type: "Siniestro", category: "Físico" },
          { name: "Arañazo", type: "Normal", category: "Físico" },
          { name: "Supersónico", type: "Normal", category: "Estado" },
          { name: "Polvareda", type: "Normal", category: "Estado" }
        ]
      },
      {
        name: "Gyarados",
        id: 130,
        types: ["Agua", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        location: "Ruta 119 (Magikarp)",
        role: "Físico Agua",
        item: "Escudo Especial",
        nature: "Firme / Alegre",
        moves: baseMovesets.gyarados
      },
      {
        name: "Manectric",
        id: 310,
        types: ["Eléctrico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
        location: "Ruta 110 (Electrike)",
        role: "Velocidad Especial",
        item: "Imán",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.manectric
      },
      {
        name: "Absol",
        id: 359,
        types: ["Siniestro"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
        location: "Ruta 120 (Absol)",
        role: "Físico Siniestro",
        item: "Banda Enfoque",
        nature: "Pícara / Alegre",
        moves: [
          { name: "Rayo Oscuro", type: "Siniestro", category: "Físico" },
          { name: "Garra Metálica", type: "Acero", category: "Físico" },
          { name: "Demolición", type: "Lucha", category: "Físico" },
          { name: "Roca Afilada", type: "Roca", category: "Físico" }
        ]
      },
      {
        name: "Claydol",
        id: 344,
        types: ["Tierra", "Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
        location: "Ruta 111 (Baltoy)",
        role: "Tanque Mixto Tierra",
        item: "Gema Tierra",
        nature: "Plácida / Audaz",
        moves: [
          { name: "Terremoto", type: "Tierra", category: "Físico" },
          { name: "Psíquico", type: "Psíquico", category: "Especial" },
          { name: "Roca Afilada", type: "Roca", category: "Físico" },
          { name: "Avalancha", type: "Hielo", category: "Especial" }
        ]
      }
    ]
  },
  monotype_water: {
    id: "monotype_water",
    name: "💧 Monotype Agua",
    description: "Equipo 100% tipo Agua. Dominio completo de las aguas de Hoenn.",
    category: "thematic",
    pokemon: [
      {
        name: "Swampert",
        id: 260,
        types: ["Agua", "Tierra"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
        location: "Inicial (Mudkip)",
        role: "Agua Líder",
        item: "Arena Fina",
        nature: "Plácida / Audaz",
        moves: baseMovesets.swampert
      },
      {
        name: "Milotic",
        id: 350,
        types: ["Agua"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
        location: "Ruta 119 (Feebas)",
        role: "Agua Especial",
        item: "Banda Asalto",
        nature: "Modesta / Tímida",
        moves: baseMovesets.milotic
      },
      {
        name: "Kingdra",
        id: 230,
        types: ["Agua", "Dragón"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
        location: "Ruta 119 (Horsea)",
        role: "Agua Dragón",
        item: "Gema Agua",
        nature: "Modesta / Tímida",
        moves: baseMovesets.kingdra
      },
      {
        name: "Gyarados",
        id: 130,
        types: ["Agua", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        location: "Ruta 119 (Magikarp)",
        role: "Agua Volador",
        item: "Escudo Especial",
        nature: "Plácida / Prudente",
        moves: baseMovesets.gyarados
      },
      {
        name: "Sharpedo",
        id: 319,
        types: ["Agua", "Siniestro"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
        location: "Ruta 110 (Carvanha)",
        role: "Agua Físico",
        item: "Banda Enfoque",
        nature: "Alegre / Activa",
        moves: baseMovesets.sharpedo
      },
      {
        name: "Wailord",
        id: 321,
        types: ["Agua"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
        location: "Ruta 110 (Wailmer)",
        role: "Agua Tanque",
        item: "Armadura Defensiva",
        nature: "Plácida / Prudente",
        moves: [
          { name: "Surf", type: "Agua", category: "Especial" },
          { name: "Rayo Hielo", type: "Hielo", category: "Especial" },
          { name: "Recuperación", type: "Normal", category: "Estado" },
          { name: "Avalancha", type: "Hielo", category: "Físico" }
        ]
      }
    ]
  },
  monotype_dragon: {
    id: "monotype_dragon",
    name: "🐉 Monotype Dragón",
    description: "Equipo 100% tipo Dragón. Poder absoluto del tipo Dragón.",
    category: "thematic",
    pokemon: [
      {
        name: "Salamence",
        id: 373,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
        location: "Cascada Meteoro (Bagon)",
        role: "Dragón Líder",
        item: "Colmillo Dragón",
        nature: "Pícara / Ingenua",
        moves: baseMovesets.salamence
      },
      {
        name: "Flygon",
        id: 330,
        types: ["Tierra", "Dragón"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
        location: "Ruta 111 (Trapinch)",
        role: "Dragón Tierra",
        item: "Arena Fina",
        nature: "Firme / Alegre",
        moves: baseMovesets.flygon
      },
      {
        name: "Rayquaza",
        id: 384,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
        location: "Cascada Meteoro (Rayquaza)",
        role: "Dragón Legendario",
        item: "Vida Orbe",
        nature: "Pícara / Activa",
        moves: baseMovesets.rayquaza
      },
      {
        name: "Kingdra",
        id: 230,
        types: ["Agua", "Dragón"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
        location: "Ruta 119 (Horsea)",
        role: "Dragón Agua",
        item: "Gema Agua",
        nature: "Modesta / Tímida",
        moves: baseMovesets.kingdra
      },
      {
        name: "Metagross",
        id: 376,
        types: ["Acero", "Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
        location: "Cascada Meteoro (Beldum)",
        role: "Soporte Mixto",
        item: "Lentes de Precisión",
        nature: "Pícara / Activa",
        moves: baseMovesets.metagross
      },
      {
        name: "Altaria",
        id: 334,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
        location: "Ruta 119 (Swablu)",
        role: "Dragón Nube",
        item: "Capa Suave",
        nature: "Plácida / Prudente",
        moves: baseMovesets.altaria
      }
    ]
  },
  starter_treecko: {
    id: "starter_treecko",
    name: "🌿 Team Treecko",
    description: "Equipo basado en Sceptile. Velocidad y precisión Grass.",
    category: "thematic",
    pokemon: [
      {
        name: "Sceptile",
        id: 254,
        types: ["Planta"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
        location: "Inicial (Treecko)",
        role: "Velocidad Planta Líder",
        item: "Banda Enfoque",
        nature: "Alegre / Activa",
        moves: baseMovesets.sceptile
      },
      {
        name: "Breloom",
        id: 286,
        types: ["Planta", "Lucha"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
        location: "Bosque Petalia (Shroomish)",
        role: "Planta Lucha",
        item: "Semilla Milagro",
        nature: "Firme / Alegre",
        moves: baseMovesets.breloom
      },
      {
        name: "Flygon",
        id: 330,
        types: ["Tierra", "Dragón"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
        location: "Ruta 111 (Trapinch)",
        role: "Velocidad Tierra",
        item: "Arena Fina",
        nature: "Firme / Alegre",
        moves: baseMovesets.flygon
      },
      {
        name: "Manectric",
        id: 310,
        types: ["Eléctrico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
        location: "Ruta 110 (Electrike)",
        role: "Velocidad Eléctrico",
        item: "Imán",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.manectric
      },
      {
        name: "Gardevoir",
        id: 282,
        types: ["Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
        location: "Ruta 102 (Ralts)",
        role: "Psíquico Especial",
        item: "Cuchara Torcida",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.gardevoir
      },
      {
        name: "Salamence",
        id: 373,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
        location: "Cascada Meteoro (Bagon)",
        role: "Dragón Volador",
        item: "Colmillo Dragón",
        nature: "Pícara / Ingenua",
        moves: baseMovesets.salamence
      }
    ]
  },
  starter_torchic: {
    id: "starter_torchic",
    name: "🔥 Team Torchic",
    description: "Equipo basado en Blaziken. Poder físico y lucha feroz.",
    category: "thematic",
    pokemon: [
      {
        name: "Blaziken",
        id: 257,
        types: ["Fuego", "Lucha"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
        location: "Inicial (Torchic)",
        role: "Fuego Lucha Líder",
        item: "Banda Enfoque",
        nature: "Alegre / Activa",
        moves: baseMovesets.blaziken
      },
      {
        name: "Breloom",
        id: 286,
        types: ["Planta", "Lucha"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
        location: "Bosque Petalia (Shroomish)",
        role: "Lucha Planta",
        item: "Semilla Milagro",
        nature: "Firme / Alegre",
        moves: baseMovesets.breloom
      },
      {
        name: "Aggron",
        id: 306,
        types: ["Acero", "Roca"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
        location: "Ruta 112 (Aron)",
        role: "Defensa Acero",
        item: "Armadura Defensiva",
        nature: "Plácida / Audaz",
        moves: baseMovesets.aggron
      },
      {
        name: "Salamence",
        id: 373,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
        location: "Cascada Meteoro (Bagon)",
        role: "Dragón Físico",
        item: "Colmillo Dragón",
        nature: "Pícara / Ingenua",
        moves: baseMovesets.salamence
      },
      {
        name: "Manectric",
        id: 310,
        types: ["Eléctrico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
        location: "Ruta 110 (Electrike)",
        role: "Velocidad Eléctrico",
        item: "Imán",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.manectric
      },
      {
        name: "Milotic",
        id: 350,
        types: ["Agua"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
        location: "Ruta 119 (Feebas)",
        role: "Agua Soporte",
        item: "Banda Asalto",
        nature: "Modesta / Tímida",
        moves: baseMovesets.milotic
      }
    ]
  },
  starter_mudkip: {
    id: "starter_mudkip",
    name: "💧 Team Mudkip",
    description: "Equipo basado en Swampert. Dominio de agua y tierra.",
    category: "thematic",
    pokemon: [
      {
        name: "Swampert",
        id: 260,
        types: ["Agua", "Tierra"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
        location: "Inicial (Mudkip)",
        role: "Agua Tierra Líder",
        item: "Arena Fina",
        nature: "Plácida / Audaz",
        moves: baseMovesets.swampert
      },
      {
        name: "Milotic",
        id: 350,
        types: ["Agua"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
        location: "Ruta 119 (Feebas)",
        role: "Agua Especial",
        item: "Banda Asalto",
        nature: "Modesta / Tímida",
        moves: baseMovesets.milotic
      },
      {
        name: "Flygon",
        id: 330,
        types: ["Tierra", "Dragón"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
        location: "Ruta 111 (Trapinch)",
        role: "Tierra Dragón",
        item: "Arena Fina",
        nature: "Firme / Alegre",
        moves: baseMovesets.flygon
      },
      {
        name: "Gardevoir",
        id: 282,
        types: ["Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
        location: "Ruta 102 (Ralts)",
        role: "Psíquico Especial",
        item: "Cuchara Torcida",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.gardevoir
      },
      {
        name: "Salamence",
        id: 373,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
        location: "Cascada Meteoro (Bagon)",
        role: "Dragón Volador",
        item: "Colmillo Dragón",
        nature: "Pícara / Ingenua",
        moves: baseMovesets.salamence
      },
      {
        name: "Manectric",
        id: 310,
        types: ["Eléctrico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
        location: "Ruta 110 (Electrike)",
        role: "Eléctrico Soporte",
        item: "Imán",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.manectric
      }
    ]
  },

  // Mechanic Teams
  sun_team: {
    id: "sun_team",
    name: "☀️ Equipo Sol",
    description: "Aprovecha Sequía y Día Soleado. Potencia bajo el sol.",
    category: "mechanic",
    pokemon: [
      {
        name: "Blaziken",
        id: 257,
        types: ["Fuego", "Lucha"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
        location: "Inicial (Torchic)",
        role: "Fuego Sol",
        item: "Banda Enfoque",
        nature: "Alegre / Activa",
        moves: baseMovesets.blaziken
      },
      {
        name: "Salamence",
        id: 373,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
        location: "Cascada Meteoro (Bagon)",
        role: "Dragón Sol",
        item: "Colmillo Dragón",
        nature: "Pícara / Ingenua",
        moves: baseMovesets.salamence
      },
      {
        name: "Groudon",
        id: 383,
        types: ["Tierra"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
        location: "Cámara de Magma (Groudon)",
        role: "Tierra Sequía",
        item: "Vida Orbe",
        nature: "Firme / Alegre",
        moves: baseMovesets.groudon
      },
      {
        name: "Altaria",
        id: 334,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
        location: "Ruta 119 (Swablu)",
        role: "Dragón Volador Sol",
        item: "Capa Suave",
        nature: "Plácida / Prudente",
        moves: baseMovesets.altaria
      },
      {
        name: "Metagross",
        id: 376,
        types: ["Acero", "Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
        location: "Cascada Meteoro (Beldum)",
        role: "Acero Psíquico",
        item: "Lentes de Precisión",
        nature: "Pícara / Activa",
        moves: baseMovesets.metagross
      },
      {
        name: "Manectric",
        id: 310,
        types: ["Eléctrico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
        location: "Ruta 110 (Electrike)",
        role: "Eléctrico Soporte",
        item: "Imán",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.manectric
      }
    ]
  },
  rain_team: {
    id: "rain_team",
    name: "🌧️ Equipo Lluvia",
    description: "Aprovecha Llovizna y Danza Lluvia. Control del clima acuoso.",
    category: "mechanic",
    pokemon: [
      {
        name: "Swampert",
        id: 260,
        types: ["Agua", "Tierra"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
        location: "Inicial (Mudkip)",
        role: "Agua Lluvia Líder",
        item: "Arena Fina",
        nature: "Plácida / Audaz",
        moves: baseMovesets.swampert
      },
      {
        name: "Milotic",
        id: 350,
        types: ["Agua"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
        location: "Ruta 119 (Feebas)",
        role: "Agua Lluvia",
        item: "Banda Asalto",
        nature: "Modesta / Tímida",
        moves: baseMovesets.milotic
      },
      {
        name: "Kingdra",
        id: 230,
        types: ["Agua", "Dragón"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
        location: "Ruta 119 (Horsea)",
        role: "Agua Dragón Lluvia",
        item: "Gema Agua",
        nature: "Modesta / Tímida",
        moves: baseMovesets.kingdra
      },
      {
        name: "Kyogre",
        id: 382,
        types: ["Agua"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
        location: "Cueva Primordial (Kyogre)",
        role: "Agua Legendaria Lluvia",
        item: "Vida Orbe",
        nature: "Modesta / Tímida",
        moves: baseMovesets.kyogre
      },
      {
        name: "Gardevoir",
        id: 282,
        types: ["Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
        location: "Ruta 102 (Ralts)",
        role: "Psíquico Soporte",
        item: "Cuchara Torcida",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.gardevoir
      },
      {
        name: "Metagross",
        id: 376,
        types: ["Acero", "Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
        location: "Cascada Meteoro (Beldum)",
        role: "Acero Psíquico",
        item: "Lentes de Precisión",
        nature: "Pícara / Activa",
        moves: baseMovesets.metagross
      }
    ]
  },
  legendary: {
    id: "legendary",
    name: "⭐ Con Legendarios",
    description: "Incluye los tres legendarios de Hoenn. Poder absoluto.",
    category: "mechanic",
    pokemon: [
      {
        name: "Rayquaza",
        id: 384,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
        location: "Cascada Meteoro (Rayquaza)",
        role: "Dragón Legendario Líder",
        item: "Vida Orbe",
        nature: "Pícara / Activa",
        moves: baseMovesets.rayquaza
      },
      {
        name: "Groudon",
        id: 383,
        types: ["Tierra"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
        location: "Cámara de Magma (Groudon)",
        role: "Tierra Legendario",
        item: "Vida Orbe",
        nature: "Firme / Alegre",
        moves: baseMovesets.groudon
      },
      {
        name: "Kyogre",
        id: 382,
        types: ["Agua"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
        location: "Cueva Primordial (Kyogre)",
        role: "Agua Legendaria",
        item: "Vida Orbe",
        nature: "Modesta / Tímida",
        moves: baseMovesets.kyogre
      },
      {
        name: "Salamence",
        id: 373,
        types: ["Dragón", "Volador"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
        location: "Cascada Meteoro (Bagon)",
        role: "Dragón Volador",
        item: "Colmillo Dragón",
        nature: "Pícara / Ingenua",
        moves: baseMovesets.salamence
      },
      {
        name: "Metagross",
        id: 376,
        types: ["Acero", "Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
        location: "Cascada Meteoro (Beldum)",
        role: "Acero Psíquico",
        item: "Lentes de Precisión",
        nature: "Pícara / Activa",
        moves: baseMovesets.metagross
      },
      {
        name: "Gardevoir",
        id: 282,
        types: ["Psíquico"],
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
        location: "Ruta 102 (Ralts)",
        role: "Psíquico Soporte",
        item: "Cuchara Torcida",
        nature: "Modesta / Miedosa",
        moves: baseMovesets.gardevoir
      }
    ]
  }
};
