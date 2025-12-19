import './style.css';
import './assets/fonts.css';
import { renderTeamView } from './components/TeamView.js';
import { renderReference } from './components/Reference.js';
import { renderGuide } from './components/Guide.js';
import { renderCalculator } from './components/Calculator.js';

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderTeamView();
  renderReference();
  renderGuide();
  renderCalculator();

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
});
