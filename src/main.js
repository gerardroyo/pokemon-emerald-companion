import './style.css';
import './assets/fonts.css';
import { renderTeamView } from './components/TeamView.js';
import { renderReference } from './components/Reference.js';
import { renderGuide } from './components/Guide.js';
import { renderCalculator } from './components/Calculator.js';
import { getSelectedGame, setSelectedGame, GAMES, notifyGameChange } from './data/gameManager.js';

// Init
document.addEventListener('DOMContentLoaded', () => {
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
  const btns = document.querySelectorAll('.nav-btn');
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
  
  // Game logo images - using base64 SVG data URIs for reliability
  const gameLogos = {
    emerald: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAKPHJLY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMzBiNDdkIi8+CjxyZWN0IHg9IjgiIHk9IjgiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0iIzMwYjQ3ZCIvPgogIAogIDwhLS0gQ29udGFpbmVyIGZvciBQb2tlYmFsbCAtLT4KICAKICQ8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNSIgZmlsbD0iIzFlMjEyNyIvPgoKICA8IS0tIFRvcCBoYWxmIC0tPgogIDxwYXRoIGQ9Ik0gOCAzMiBMIDU2IDMyIiBzdHJva2U9IiMxZTIxMjciIHN0cm9rZS13aWR0aD0iMTYiIGZpbGw9Im5vbmUiLz4KICAKICAGPCETLSBPCMFUZ2UgdG9wIC0tPgogIDxwYXRoIGQ9Ik0gOCAzMiBRIDMyIDAgNTYgMzIiIHN0cm9rZT0iI0ZGODI4IiBzdHJva2Utd2lkdGg9IjEyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAKICAGPCETLSBXAGL0ZSBib3R0b20gLS0+CiAgPHBhdGggZD0iTSA4IDMyIFEgMzIgNjQgNTYgMzIiIHN0cm9rZT0iI2VmZWZlZiIgc3Ryb2tlLXdpZHRoPSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgCiAgPCEtLSBDZW50ZXIgYm91bmQgLS0+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iOCIgZmlsbD0iIzFlMjEyNyIvPgogIAogIDwhLS0gQ2VudGVyIGJ1dHRvbiAtLT4KICAKICBPCWM8Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSI2IiBmaWxsPSIjZWZlZmVmIi8+CiAgCjwvc3ZnPg==',
    platinum: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAKPCKBYY3IgYWJ1dHRlcj0iI2EzODExZiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIvPgp7cmVjdCB4PSI4IiB5PSI4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IiNmMGQzNGEiIHJ4PSI0Ii8+CiAgCiAgPCEtLSBDb250YWluZXIgZm9yIFBva2ViYWxsIC0tPgogIAogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjI1IiBmaWxsPSIjMWUyMTI3Ii8+CgogIDwhLS0gVG9wIGhhbGYgLS0+CiAgPHBhdGggZD0iTSA4IDMyIEwgNTYgMzIiIHN0cm9rZT0iIzFlMjEyNyIgc3Ryb2tlLXdpZHRoPSIxNiIgZmlsbD0ibm9uZSIvPgogIAogICA8IS0tIE9yYW5nZSB0b3AgLS0+CiAgPHBhdGggZD0iTSA4IDMyIFEgMzIgMCA1NiAzMiIgc3Ryb2tlPSIjRkY4MjgiIHN0cm9rZS13aWR0aD0iMTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIAogICA8IS0tIFdoaXRlIGJvdHRvbSAtLT4KICAKICBVCFVYBG8nF9bWlqb2pjSDIgUXWDMyIDY0IDU2IDMyIiBzdHJva2U9IiNlZmVmZWYiIHN0cm9rZS13aWR0aD0iMTIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIAogICA8IS0tIENlbnRlciBib3VuZCAtLT4KICAKICBPCWN4PSIzMiIgY3k9IjMyIiByPSI4IiBmaWxsPSIjMWUyMTI3Ii8+CiAgCiAgPCEtLSBDZW50ZXIgYnV0dG9uIC0tPgogIAogIDxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjYiIGZpbGw9IiNlZmVmZWYiLz4KICAKPC9zdmc+'
  };

  // Set initial theme and logo based on selected game
  if (currentGame === GAMES.PLATINUM) {
    document.body.classList.add('platino-theme');
    if (gameSelectorImg) {
      gameSelectorImg.src = gameLogos.platinum;
      gameSelectorImg.alt = 'Pokémon Platino';
    }
  } else {
    if (gameSelectorImg) {
      gameSelectorImg.src = gameLogos.emerald;
      gameSelectorImg.alt = 'Pokémon Esmeralda';
    }
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

  // Handle game selection from modal
  gameOptionCards.forEach(card => {
    card.addEventListener('click', () => {
      const selectedGame = card.getAttribute('data-game');

      // Save and notify
      setSelectedGame(selectedGame);
      
      // Update page title
      const pageTitle = document.getElementById('page-title');
      if (pageTitle) {
        pageTitle.textContent = selectedGame === GAMES.PLATINUM 
          ? 'Guía Pokémon Platino' 
          : 'Guía Pokémon Esmeralda';
      }
      
      // Update logo and theme
      if (selectedGame === GAMES.PLATINUM) {
        document.body.classList.add('platino-theme');
        if (gameSelectorImg) {
          gameSelectorImg.src = gameLogos.platinum;
          gameSelectorImg.alt = 'Pokémon Platino';
        }
      } else {
        document.body.classList.remove('platino-theme');
        if (gameSelectorImg) {
          gameSelectorImg.src = gameLogos.emerald;
          gameSelectorImg.alt = 'Pokémon Esmeralda';
        }
      }

      // Re-render all components
      renderTeamView();
      renderReference();
      renderGuide();
      renderCalculator();

      // Notify about game change
      notifyGameChange();

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

