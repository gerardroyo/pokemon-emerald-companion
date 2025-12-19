// Centralized Theme Configuration
// Keys must match the game IDs used in gameManager.js ('emerald', 'platinum')

export const THEMES = {
    'emerald': {
        '--primary-color': '#2d9e6d',
        '--primary-rgb': '45, 158, 109',
        '--primary-glow': '#6ee7b7',
        '--ray-black': '#080a09',
        '--ray-charcoal': '#111413',
        '--glass-bg': 'rgba(22, 26, 24, 0.6)',
        '--glass-strong': 'rgba(10, 15, 12, 0.85)',
        '--bg-image': `radial-gradient(circle at 50% 0%, rgba(45, 158, 109, 0.15) 0%, transparent 50%),
                   radial-gradient(circle at 85% 90%, rgba(247, 207, 82, 0.05) 0%, transparent 40%)`
    },
    'platinum': {
        '--primary-color': '#d4af37',
        '--primary-rgb': '212, 175, 55',
        '--primary-glow': '#f9e58b',
        '--ray-black': '#0a0a0c',
        '--ray-charcoal': '#141418',
        '--glass-bg': 'rgba(20, 20, 24, 0.6)',
        '--glass-strong': 'rgba(10, 10, 14, 0.85)',
        '--bg-image': `radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15) 0%, transparent 60%),
                   radial-gradient(circle at 15% 90%, rgba(75, 75, 90, 0.1) 0%, transparent 40%)`
    }
};
