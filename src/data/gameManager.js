import { THEMES } from './themes.js';

// Game version manager - Controls which game's data is displayed

export const GAMES = {
    EMERALD: 'emerald',
    PLATINUM: 'platinum',
    WHITE: 'white'
};

export function getSelectedGame() {
    return localStorage.getItem('selectedGame') || GAMES.EMERALD;
}

export function setSelectedGame(game) {
    if (Object.values(GAMES).includes(game)) {
        localStorage.setItem('selectedGame', game);
        notifyGameChange();
    }
}

export function getGameDisplayName(game) {
    switch (game) {
        case GAMES.PLATINUM: return 'Pokémon Platino';
        case GAMES.WHITE: return 'Pokémon Blanco';
        default: return 'Pokémon Esmeralda';
    }
}

// Utility to reload all components when game changes
export function notifyGameChange() {
    const game = getSelectedGame();
    updateTheme(game);
    window.dispatchEvent(new CustomEvent('gameChanged', { detail: game }));
}

export function updateTheme(game) {
    const theme = THEMES[game] || THEMES[GAMES.EMERALD];

    // Apply all CSS variables from the theme config
    Object.entries(theme).forEach(([property, value]) => {
        document.documentElement.style.setProperty(property, value);
    });
}
