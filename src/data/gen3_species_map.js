/**
 * gen3_species_map.js
 * Maps Gen 3 Internal Index (0-411) to National Dex Number
 * Based on pokeemerald/include/constants/species.h
 * 
 * Internal 0: None
 * Internal 1-251: National 1-251 (Gen 1-2, 1:1 mapping)
 * Internal 252-276: Old Unown forms (invalid, map to Unown = 201)
 * Internal 277-411: Gen 3 Pokemon (Treecko onwards)
 */

// Gen 3 (Hoenn) Pokemon in INTERNAL INDEX order starting from 277
// Index in this array + 252 = National Dex Number
const HOENN_ORDER = [
    'Treecko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken',
    'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena', 'Zigzagoon',
    'Linoone', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox',
    'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf', 'Shiftry',
    'Nincada', 'Ninjask', 'Shedinja', 'Taillow', 'Swellow', 'Shroomish',
    'Breloom', 'Spinda', 'Wingull', 'Pelipper', 'Surskit', 'Masquerain',
    'Wailmer', 'Wailord', 'Skitty', 'Delcatty', 'Kecleon', 'Baltoy',
    'Claydol', 'Nosepass', 'Torkoal', 'Sableye', 'Barboach', 'Whiscash',
    'Luvdisc', 'Corphish', 'Crawdaunt', 'Feebas', 'Milotic', 'Carvanha',
    'Sharpedo', 'Trapinch', 'Vibrava', 'Flygon', 'Makuhita', 'Hariyama',
    'Electrike', 'Manectric', 'Numel', 'Camerupt', 'Spheal', 'Sealeo',
    'Walrein', 'Cacnea', 'Cacturne', 'Snorunt', 'Glalie', 'Lunatone',
    'Solrock', 'Azurill', 'Spoink', 'Grumpig', 'Plusle', 'Minun',
    'Mawile', 'Meditite', 'Medicham', 'Swablu', 'Altaria', 'Wynaut',
    'Duskull', 'Dusclops', 'Roselia', 'Slakoth', 'Vigoroth', 'Slaking',
    'Gulpin', 'Swalot', 'Tropius', 'Whismur', 'Loudred', 'Exploud',
    'Clamperl', 'Huntail', 'Gorebyss', 'Absol', 'Shuppet', 'Banette',
    'Seviper', 'Zangoose', 'Relicanth', 'Aron', 'Lairon', 'Aggron',
    'Castform', 'Volbeat', 'Illumise', 'Lileep', 'Cradily', 'Anorith',
    'Armaldo', 'Ralts', 'Kirlia', 'Gardevoir', 'Bagon', 'Shelgon',
    'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regirock', 'Regice',
    'Registeel', 'Kyogre', 'Groudon', 'Rayquaza', 'Latias', 'Latios',
    'Jirachi', 'Deoxys', 'Chimecho'
];

// Build the National Dex lookup from Internal Index
// This array: internalToNational[internalIndex] = nationalDexNumber
export const internalToNational = new Array(412).fill(0);

// Gen 1-2: Internal = National (1-251)
for (let i = 1; i <= 251; i++) {
    internalToNational[i] = i;
}

// Old Unown forms (252-276) -> map to Unown #201
for (let i = 252; i <= 276; i++) {
    internalToNational[i] = 201; // Unown
}

// Gen 3 Pokemon (Internal 277-411)
// The HOENN_ORDER array is in the game's internal order
// We need to find each Pokemon's National Dex number

// National Dex numbers for Gen 3 Pokemon (252-386)
const NATIONAL_DEX_GEN3 = {
    'Treecko': 252, 'Grovyle': 253, 'Sceptile': 254, 'Torchic': 255, 'Combusken': 256, 'Blaziken': 257,
    'Mudkip': 258, 'Marshtomp': 259, 'Swampert': 260, 'Poochyena': 261, 'Mightyena': 262, 'Zigzagoon': 263,
    'Linoone': 264, 'Wurmple': 265, 'Silcoon': 266, 'Beautifly': 267, 'Cascoon': 268, 'Dustox': 269,
    'Lotad': 270, 'Lombre': 271, 'Ludicolo': 272, 'Seedot': 273, 'Nuzleaf': 274, 'Shiftry': 275,
    'Taillow': 276, 'Swellow': 277, 'Wingull': 278, 'Pelipper': 279, 'Ralts': 280, 'Kirlia': 281,
    'Gardevoir': 282, 'Surskit': 283, 'Masquerain': 284, 'Shroomish': 285, 'Breloom': 286, 'Slakoth': 287,
    'Vigoroth': 288, 'Slaking': 289, 'Nincada': 290, 'Ninjask': 291, 'Shedinja': 292, 'Whismur': 293,
    'Loudred': 294, 'Exploud': 295, 'Makuhita': 296, 'Hariyama': 297, 'Azurill': 298, 'Nosepass': 299,
    'Skitty': 300, 'Delcatty': 301, 'Sableye': 302, 'Mawile': 303, 'Aron': 304, 'Lairon': 305,
    'Aggron': 306, 'Meditite': 307, 'Medicham': 308, 'Electrike': 309, 'Manectric': 310, 'Plusle': 311,
    'Minun': 312, 'Volbeat': 313, 'Illumise': 314, 'Roselia': 315, 'Gulpin': 316, 'Swalot': 317,
    'Carvanha': 318, 'Sharpedo': 319, 'Wailmer': 320, 'Wailord': 321, 'Numel': 322, 'Camerupt': 323,
    'Torkoal': 324, 'Spoink': 325, 'Grumpig': 326, 'Spinda': 327, 'Trapinch': 328, 'Vibrava': 329,
    'Flygon': 330, 'Cacnea': 331, 'Cacturne': 332, 'Swablu': 333, 'Altaria': 334, 'Zangoose': 335,
    'Seviper': 336, 'Lunatone': 337, 'Solrock': 338, 'Barboach': 339, 'Whiscash': 340, 'Corphish': 341,
    'Crawdaunt': 342, 'Baltoy': 343, 'Claydol': 344, 'Lileep': 345, 'Cradily': 346, 'Anorith': 347,
    'Armaldo': 348, 'Feebas': 349, 'Milotic': 350, 'Castform': 351, 'Kecleon': 352, 'Shuppet': 353,
    'Banette': 354, 'Duskull': 355, 'Dusclops': 356, 'Tropius': 357, 'Chimecho': 358, 'Absol': 359,
    'Wynaut': 360, 'Snorunt': 361, 'Glalie': 362, 'Spheal': 363, 'Sealeo': 364, 'Walrein': 365,
    'Clamperl': 366, 'Huntail': 367, 'Gorebyss': 368, 'Relicanth': 369, 'Luvdisc': 370, 'Bagon': 371,
    'Shelgon': 372, 'Salamence': 373, 'Beldum': 374, 'Metang': 375, 'Metagross': 376, 'Regirock': 377,
    'Regice': 378, 'Registeel': 379, 'Latias': 380, 'Latios': 381, 'Kyogre': 382, 'Groudon': 383,
    'Rayquaza': 384, 'Jirachi': 385, 'Deoxys': 386
};

// Map Internal 277+ to National using HOENN_ORDER
for (let i = 0; i < HOENN_ORDER.length; i++) {
    const internalIndex = 277 + i;
    const pokemonName = HOENN_ORDER[i];
    const nationalDex = NATIONAL_DEX_GEN3[pokemonName];
    if (nationalDex) {
        internalToNational[internalIndex] = nationalDex;
    }
}

// Export helper function
export function getSpeciesName(nationalDex) {
    // Reverse lookup
    for (const [name, dex] of Object.entries(NATIONAL_DEX_GEN3)) {
        if (dex === nationalDex) return name;
    }
    return null;
}

// Gen 3 Character Encoding (International)
export const GEN3_CHAR_MAP = {
    0x00: ' ', 0x01: 'À', 0x02: 'Á', 0x03: 'Â', 0x04: 'Ç', 0x05: 'È', 0x06: 'É', 0x07: 'Ê',
    0x08: 'Ë', 0x09: 'Ì', 0x0B: 'Î', 0x0C: 'Ï', 0x0D: 'Ò', 0x0E: 'Ó', 0x0F: 'Ô',
    0x10: 'Œ', 0x11: 'Ù', 0x12: 'Ú', 0x13: 'Û', 0x14: 'Ñ', 0x15: 'ß', 0x16: 'à', 0x17: 'á',
    0x19: 'ç', 0x1A: 'è', 0x1B: 'é', 0x1C: 'ê', 0x1D: 'ë', 0x1E: 'ì', 0x20: 'î', 0x21: 'ï',
    0x22: 'ò', 0x23: 'ó', 0x24: 'ô', 0x25: 'œ', 0x26: 'ù', 0x27: 'ú', 0x28: 'û', 0x29: 'ñ',
    0x2D: '&', 0x2E: '+',
    0x35: '=',
    0x50: '▯', 0x51: '¿', 0x52: '¡',
    0x5A: 'Í', 0x5B: '%', 0x5C: '(', 0x5D: ')',
    0x68: 'â', 0x6F: 'í',
    0x79: '⬆', 0x7A: '⬇', 0x7B: '⬅', 0x7C: '➡',
    0x85: '<', 0x86: '>',

    // Numbers
    0xA1: '0', 0xA2: '1', 0xA3: '2', 0xA4: '3', 0xA5: '4',
    0xA6: '5', 0xA7: '6', 0xA8: '7', 0xA9: '8', 0xAA: '9',
    0xAB: '!', 0xAC: '?', 0xAD: '.', 0xAE: '-',
    0xB0: '...', 0xB1: '"', 0xB2: '"', 0xB3: "'", 0xB4: "'",
    0xB5: 'M', 0xB6: 'F', 0xB8: ',', 0xB9: 'x', 0xBA: '/',

    // Uppercase
    0xBB: 'A', 0xBC: 'B', 0xBD: 'C', 0xBE: 'D', 0xBF: 'E', 0xC0: 'F', 0xC1: 'G', 0xC2: 'H',
    0xC3: 'I', 0xC4: 'J', 0xC5: 'K', 0xC6: 'L', 0xC7: 'M', 0xC8: 'N', 0xC9: 'O', 0xCA: 'P',
    0xCB: 'Q', 0xCC: 'R', 0xCD: 'S', 0xCE: 'T', 0xCF: 'U', 0xD0: 'V', 0xD1: 'W', 0xD2: 'X',
    0xD3: 'Y', 0xD4: 'Z',

    // Lowercase
    0xD5: 'a', 0xD6: 'b', 0xD7: 'c', 0xD8: 'd', 0xD9: 'e', 0xDA: 'f', 0xDB: 'g', 0xDC: 'h',
    0xDD: 'i', 0xDE: 'j', 0xDF: 'k', 0xE0: 'l', 0xE1: 'm', 0xE2: 'n', 0xE3: 'o', 0xE4: 'p',
    0xE5: 'q', 0xE6: 'r', 0xE7: 's', 0xE8: 't', 0xE9: 'u', 0xEA: 'v', 0xEB: 'w', 0xEC: 'x',
    0xED: 'y', 0xEE: 'z',

    // Special
    0xEF: '▶', 0xF0: ':', 0xF1: 'Ä', 0xF2: 'Ö', 0xF3: 'Ü', 0xF4: 'ä', 0xF5: 'ö', 0xF6: 'ü',

    // Terminators
    0xFF: '', // String terminator
    0x00: ' '
};

export function decodeGen3String(bytes) {
    let str = '';
    for (let i = 0; i < bytes.length; i++) {
        if (bytes[i] === 0xFF) break; // Terminator
        str += GEN3_CHAR_MAP[bytes[i]] || '';
    }
    return str.trim();
}
