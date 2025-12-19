export const natures = [
    { name: "Firme", plus: "Ataque", minus: "At. Esp" },
    { name: "Tímida", plus: "-", minus: "-" },
    { name: "Osada", plus: "Defensa", minus: "Ataque" },
    { name: "Audaz", plus: "Ataque", minus: "Velocidad" },
    { name: "Serena", plus: "Def. Esp", minus: "Ataque" },
    { name: "Cauta", plus: "Def. Esp", minus: "At. Esp" },
    { name: "Dócil", plus: "-", minus: "-" },
    { name: "Amable", plus: "Def. Esp", minus: "Defensa" },
    { name: "Fuerte", plus: "-", minus: "-" },
    { name: "Activa", plus: "Velocidad", minus: "Defensa" },
    { name: "Agitada", plus: "Defensa", minus: "At. Esp" },
    { name: "Alegre", plus: "Velocidad", minus: "At. Esp" },
    { name: "Floja", plus: "Defensa", minus: "Def. Esp" },
    { name: "Huraña", plus: "Ataque", minus: "Defensa" },
    { name: "Afable", plus: "At. Esp", minus: "Defensa" },
    { name: "Modesta", plus: "At. Esp", minus: "Ataque" },
    { name: "Ingenua", plus: "Velocidad", minus: "Def. Esp" },
    { name: "Pícara", plus: "Ataque", minus: "Def. Esp" },
    { name: "Mansa", plus: "At. Esp", minus: "Velocidad" },
    { name: "Rara", plus: "-", minus: "-" },
    { name: "Alocada", plus: "At. Esp", minus: "Def. Esp" },
    { name: "Plácida", plus: "Defensa", minus: "Velocidad" },
    { name: "Grosera", plus: "Def. Esp", minus: "Velocidad" },
    { name: "Seria", plus: "-", minus: "-" },
    { name: "Miedosa", plus: "Velocidad", minus: "Ataque" }
];

// In Emerald/Gen 3, natures are:
// Adamant: +Atk, -SpA (Correct in list)
// Modest: +SpA, -Atk (Correct in list)
// Jolly: +Spe, -SpA (Correct in list)
// Timid: +Spe, -Atk (Correct in list)
// The user thought something was wrong. 
// Maybe the translation of 'Sp. Atk' to Spanish in the UI? 
// Or maybe they want the Spanish name FIRST? "Firme (Adamant)"
// I will swap them to "Spanish (English)" for better localization.

export const naturesLocalized = natures;
