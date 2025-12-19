export const team = [
  {
    name: "Swampert",
    id: 260,
    types: ["Water", "Ground"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    location: "Inicial (Mudkip)",
    role: "Tanque Mixto / Líder",
    item: "Soft Sand (Arena Fina)",
    nature: "Relaxed (Plácida) / Brave (Audaz)",
    moves: [
      { name: "Surf", type: "Water", category: "Special" },
      { name: "Earthquake", type: "Ground", category: "Physical" },
      { name: "Ice Beam", type: "Ice", category: "Special" },
      { name: "Waterfall", type: "Water", category: "Physical" }
    ]
  },
  {
    name: "Gardevoir",
    id: 282,
    types: ["Psychic"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    location: "Ruta 102 (Ralts)",
    role: "Atacante Especial",
    item: "TwistedSpoon (Cuchara Torcida)",
    nature: "Modest (Modesta) / Timid (Miedosa)",
    moves: [
      { name: "Psychic", type: "Psychic", category: "Special" },
      { name: "Thunderbolt", type: "Electric", category: "Special" },
      { name: "Calm Mind", type: "Psychic", category: "Status" },
      { name: "Shadow Ball", type: "Ghost", category: "Physical" } // Special in Gen 3? No, Ghost is Phys in Gen 3. But Gardevoir has low Atk. Maybe better Hidden Power? Or Hypnosis. Keeping per plan but Shadow Ball IS Physical in Gen 3. Wait, plan said Shadow Ball. I will verify if I should swap logic or keep. Plan says Shadow Ball. I'll add a note or keep it. Actually, for in-game, Shadow Ball is coverage against Ghosts.
    ]
  },
  {
    name: "Breloom",
    id: 286,
    types: ["Grass", "Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    location: "Bosque Petalia (Shroomish)",
    role: "Físico / Espora",
    item: "Miracle Seed (Semilla Milagro)",
    nature: "Adamant (Firme) / Jolly (Alegre)",
    moves: [
      { name: "Spore", type: "Grass", category: "Status" },
      { name: "Sky Uppercut", type: "Fighting", category: "Physical" },
      { name: "Giga Drain", type: "Grass", category: "Special" },
      { name: "Bulk Up", type: "Fighting", category: "Status" }
    ]
  },
  {
    name: "Manectric",
    id: 310,
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    location: "Ruta 110 (Electrike)",
    role: "Velocidad Especial",
    item: "Magnet (Imán)",
    nature: "Modest (Modesta) / Timid (Miedosa)",
    moves: [
      { name: "Thunderbolt", type: "Electric", category: "Special" },
      { name: "Bite", type: "Dark", category: "Special" }, // Dark is Special in Gen 3
      { name: "Thunder Wave", type: "Electric", category: "Status" },
      { name: "Quick Attack", type: "Normal", category: "Physical" }
    ]
  },
  {
    name: "Flygon",
    id: 330,
    types: ["Ground", "Dragon"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    location: "Ruta 111 (Trapinch)",
    role: "Atacante Físico",
    item: "Soft Sand (Arena Fina)",
    nature: "Adamant (Firme) / Jolly (Alegre)",
    moves: [
      { name: "Earthquake", type: "Ground", category: "Physical" },
      { name: "Rock Slide", type: "Rock", category: "Physical" },
      { name: "Dragon Claw", type: "Dragon", category: "Special" }, // Dragon is Special in Gen 3. Flygon has decent SpA.
      { name: "Fly", type: "Flying", category: "Physical" }
    ]
  },
  {
    name: "Salamence",
    id: 373,
    types: ["Dragon", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    location: "Cascada Meteoro (Bagon)",
    role: "Potencia Bruta",
    item: "Dragon Fang (Colmillo Dragón)",
    nature: "Naughty (Pícara) / Naive (Ingenua)",
    moves: [
      { name: "Fly", type: "Flying", category: "Physical" },
      { name: "Dragon Claw", type: "Dragon", category: "Special" }, 
      { name: "Flamethrower", type: "Fire", category: "Special" },
      { name: "Brick Break", type: "Fighting", category: "Physical" }
    ]
  }
];
