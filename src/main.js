import './style.css';
import './assets/fonts.css';
import { renderTeamView } from './components/TeamView.js';
import { renderReference } from './components/Reference.js';
import { renderGuide } from './components/Guide.js';
import { renderCalculator } from './components/Calculator.js';
import { initPokemonModal } from './components/PokemonDetailModal.js';
import { getSelectedGame, setSelectedGame, GAMES, notifyGameChange, updateTheme } from './data/gameManager.js';

// Init
document.addEventListener('DOMContentLoaded', () => {
  // Apply initial theme
  updateTheme(getSelectedGame());

  // Initialize Pokemon detail modal
  initPokemonModal();

  renderTeamView();
  renderReference();
  renderGuide();
  renderCalculator();

  // Set initial page title based on selected game
  const pageTitle = document.getElementById('page-title');
  if (pageTitle) {
    pageTitle.textContent = getSelectedGame() === GAMES.PLATINUM
      ? 'Guía Pokémon Platino'
      : 'Guía Pokémon Esmeralda';
  }

  // Navigation Logic
  const btns = document.querySelectorAll('header nav .nav-btn');
  const sections = document.querySelectorAll('.section');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class
      btns.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      // Add active class
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // Game Selector Logic
  const gameSelectorIcon = document.getElementById('game-selector');
  const gameSelectorImg = document.getElementById('game-selector-icon');
  const gameModal = document.getElementById('game-modal');
  const gameModalBackdrop = document.querySelector('.game-modal-backdrop');
  const gameOptionCards = document.querySelectorAll('.game-option-card');
  const currentGame = getSelectedGame();

  // Game logo images - External URLs (Restored by user request)
  const gameLogos = {
    emerald: 'https://cdn2.steamgriddb.com/icon_thumb/5d12d5a76a9683536eb23a6a1c9767cc.png',
    platinum: 'https://cdn2.steamgriddb.com/icon_thumb/691f73fdf1c5edeb3f600c515715a358.png'
  };

  // Set initial logo
  if (gameSelectorImg) {
    gameSelectorImg.src = gameLogos[currentGame];
    gameSelectorImg.alt = currentGame === GAMES.PLATINUM ? 'Pokémon Platino' : 'Pokémon Esmeralda';
  }

  // Open modal when clicking game selector
  if (gameSelectorIcon) {
    gameSelectorIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      gameModal.classList.remove('hidden');
    });
  }

  // Close modal on backdrop click
  if (gameModalBackdrop) {
    gameModalBackdrop.addEventListener('click', () => {
      gameModal.classList.add('hidden');
    });
  }

  // Reactive UI Updates
  window.addEventListener('gameChanged', (e) => {
    const newGame = e.detail;

    // Update Page Title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
      pageTitle.textContent = newGame === GAMES.PLATINUM
        ? 'Guía Pokémon Platino'
        : 'Guía Pokémon Esmeralda';
    }

    // Update Selector Logo
    if (gameSelectorImg) {
      gameSelectorImg.src = gameLogos[newGame];
      gameSelectorImg.alt = newGame === GAMES.PLATINUM ? 'Pokémon Platino' : 'Pokémon Esmeralda';
    }

    // Re-render components
    renderTeamView();
    renderReference();
    renderGuide();
    renderCalculator();
  });

  // Handle game selection from modal
  gameOptionCards.forEach(card => {
    card.addEventListener('click', () => {
      const selectedGame = card.getAttribute('data-game');

      // Update state (triggers gameChanged event)
      setSelectedGame(selectedGame);

      // Close modal
      gameModal.classList.add('hidden');
    });
  });

  // Close modal with ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !gameModal.classList.contains('hidden')) {
      gameModal.classList.add('hidden');
    }
  });
});

