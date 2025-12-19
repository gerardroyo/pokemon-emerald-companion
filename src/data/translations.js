export const typeTranslations = {
    "Normal": "Normal",
    "Fire": "Fuego",
    "Water": "Agua",
    "Grass": "Planta",
    "Electric": "Eléctrico",
    "Ice": "Hielo",
    "Fighting": "Lucha",
    "Poison": "Veneno",
    "Ground": "Tierra",
    "Flying": "Volador",
    "Psychic": "Psíquico",
    "Bug": "Bicho",
    "Rock": "Roca",
    "Ghost": "Fantasma",
    "Dragon": "Dragón",
    "Steel": "Acero",
    "Dark": "Siniestro"
};

export const statTranslations = {
    "hp": "PS",
    "attack": "Ataque",
    "defense": "Defensa",
    "special-attack": "At. Esp",
    "special-defense": "Def. Esp",
    "speed": "Velocidad",
    "accuracy": "Precisión",
    "evasion": "Evasión"
};

// Helper function to translate
export function translateType(type) {
    if (!type) return "";
    // Capitalize first letter if not already
    const key = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
    return typeTranslations[key] || type;
}

export function translateStat(stat) {
    if (!stat) return "";
    return statTranslations[stat.toLowerCase()] || stat;
}
