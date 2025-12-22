
export const natures = [
    { name: "Huraña (Lonely)", up: "Atk", down: "Def" },
    { name: "Audaz (Brave)", up: "Atk", down: "Spe" },
    { name: "Firme (Adamant)", up: "Atk", down: "SpA" },
    { name: "Pícara (Naughty)", up: "Atk", down: "SpD" },
    { name: "Osada (Bold)", up: "Def", down: "Atk" },
    { name: "Plácida (Relaxed)", up: "Def", down: "Spe" },
    { name: "Agitada (Impish)", up: "Def", down: "SpA" },
    { name: "Floja (Lax)", up: "Def", down: "SpD" },
    { name: "Miedosa (Timid)", up: "Spe", down: "Atk" },
    { name: "Activa (Hasty)", up: "Spe", down: "Def" },
    { name: "Alegre (Jolly)", up: "Spe", down: "SpA" },
    { name: "Ingenua (Naive)", up: "Spe", down: "SpD" },
    { name: "Modesta (Modest)", up: "SpA", down: "Atk" },
    { name: "Afable (Mild)", up: "SpA", down: "Def" },
    { name: "Mansa (Quiet)", up: "SpA", down: "Spe" },
    { name: "Alocada (Rash)", up: "SpA", down: "SpD" },
    { name: "Serena (Calm)", up: "SpD", down: "Atk" },
    { name: "Amable (Gentle)", up: "SpD", down: "Def" },
    { name: "Grosera (Sassy)", up: "SpD", down: "Spe" },
    { name: "Cauta (Careful)", up: "SpD", down: "SpA" },
    { name: "Fuerte (Hardy)", up: "---", down: "---" },
    { name: "Dócil (Docile)", up: "---", down: "---" },
    { name: "Seria (Serious)", up: "---", down: "---" },
    { name: "Tímida (Bashful)", up: "---", down: "---" },
    { name: "Rara (Quirky)", up: "---", down: "---" }
];

// Backward compatibility for Reference.js
export const naturesLocalized = natures.map(n => ({
    name: n.name.split(' (')[0], // Use just the Spanish name if preferred, or full name. Reference.js logic seems to handle strings. 
    // Wait, Reference.js renders names directly.
    // Let's keep the full name or just Spanish?
    // Reference.js output: "Huraña (Lonely)" looks fine.
    name: n.name,
    plus: n.up === '---' ? '-' : n.up,
    minus: n.down === '---' ? '-' : n.down
}));
