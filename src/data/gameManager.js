// Game version manager - Controls which game's data is displayed

export const GAMES = {
    EMERALD: 'emerald',
    PLATINUM: 'platinum'
};

export function getSelectedGame() {
    return localStorage.getItem('selectedGame') || GAMES.EMERALD;
}

export function setSelectedGame(game) {
    if (Object.values(GAMES).includes(game)) {
        localStorage.setItem('selectedGame', game);
    }
}

export function getGameDisplayName(game) {
    return game === GAMES.PLATINUM ? 'Pokémon Platino' : 'Pokémon Esmeralda';
}

// Utility to reload all components when game changes
export function notifyGameChange() {
    window.dispatchEvent(new CustomEvent('gameChanged', { detail: getSelectedGame() }));
}
