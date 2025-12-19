export const natures = [
    { name: "Adamant (Firme)", plus: "Attack", minus: "Sp. Atk" },
    { name: "Bashful (Tímida)", plus: "-", minus: "-" },
    { name: "Bold (Osada)", plus: "Defense", minus: "Attack" },
    { name: "Brave (Audaz)", plus: "Attack", minus: "Speed" },
    { name: "Calm (Serena)", plus: "Sp. Def", minus: "Attack" },
    { name: "Careful (Cauta)", plus: "Sp. Def", minus: "Sp. Atk" },
    { name: "Docile (Dócil)", plus: "-", minus: "-" },
    { name: "Gentle (Amable)", plus: "Sp. Def", minus: "Defense" },
    { name: "Hardy (Fuerte)", plus: "-", minus: "-" },
    { name: "Hasty (Activa)", plus: "Speed", minus: "Defense" },
    { name: "Impish (Agitada)", plus: "Defense", minus: "Sp. Atk" },
    { name: "Jolly (Alegre)", plus: "Speed", minus: "Sp. Atk" },
    { name: "Lax (Floja)", plus: "Defense", minus: "Sp. Def" },
    { name: "Lonely (Huraña)", plus: "Attack", minus: "Defense" },
    { name: "Mild (Afable)", plus: "Sp. Atk", minus: "Defense" },
    { name: "Modest (Modesta)", plus: "Sp. Atk", minus: "Attack" },
    { name: "Naive (Ingenua)", plus: "Speed", minus: "Sp. Def" },
    { name: "Naughty (Pícara)", plus: "Attack", minus: "Sp. Def" },
    { name: "Quiet (Mansa)", plus: "Sp. Atk", minus: "Speed" },
    { name: "Quirky (Rara)", plus: "-", minus: "-" },
    { name: "Rash (Alocada)", plus: "Sp. Atk", minus: "Sp. Def" },
    { name: "Relaxed (Plácida)", plus: "Defense", minus: "Speed" },
    { name: "Sassy (Grosera)", plus: "Sp. Def", minus: "Speed" },
    { name: "Serious (Seria)", plus: "-", minus: "-" },
    { name: "Timid (Miedosa)", plus: "Speed", minus: "Attack" }
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

export const naturesLocalized = natures.map(n => {
    const parts = n.name.match(/(.*) \((.*)\)/);
    if (parts) {
        return { ...n, name: `${parts[2]} (${parts[1]})` };
    }
    return n;
});
