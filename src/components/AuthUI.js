// Authentication UI Component
// Renders login button or user profile based on auth state

import { signInWithGoogle, signOutUser, getUserInfo, onAuthStateChange } from '../services/authService.js';
import { migrateLocalDataToCloud, getTeamsFromCloud } from '../services/firestoreService.js';
import { getAllTeams, saveAllTeams, setActiveTeamId } from '../data/teamManager.js';
import { getSelectedGame } from '../data/gameManager.js';

/**
 * Render the auth UI component
 * @param {string} containerId - ID of the container element
 */
export function renderAuthUI(containerId = 'auth-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Listen for auth state changes
  onAuthStateChange((user) => {
    updateAuthUI(container, user);
  });

  // Initial render
  updateAuthUI(container, null);
}

/**
 * Update the auth UI based on current user
 */
function updateAuthUI(container, user) {
  if (user) {
    const cachedUserInfo = getUserInfo();
    const userInfo = {
      uid: user.uid,
      displayName: user.displayName || cachedUserInfo?.displayName || 'Usuario',
      email: user.email || cachedUserInfo?.email || '',
      photoURL: user.photoURL || cachedUserInfo?.photoURL || null
    };
    if (!userInfo) {
      container.innerHTML = `
        <button class="auth-login-btn" onclick="handleGoogleLogin()">
          <svg class="google-icon" viewBox="0 0 24 24" width="18" height="18">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span>Iniciar sesión</span>
        </button>
      `;
      return;
    }
    const displayName = userInfo.displayName || 'Usuario';
    const email = userInfo.email || '';
    const photoURL = userInfo.photoURL;
    container.innerHTML = `
      <div class="auth-user-profile">
        <button class="auth-profile-btn" onclick="toggleAuthDropdown(event)">
          ${photoURL
        ? `<img src="${photoURL}" alt="Avatar" class="auth-avatar" referrerpolicy="no-referrer">`
        : `<div class="auth-avatar-placeholder">${displayName.charAt(0).toUpperCase()}</div>`
      }
          <span class="auth-user-name">${displayName}</span>
          <svg class="auth-chevron" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
          </svg>
        </button>
        <div class="auth-dropdown hidden" id="auth-dropdown">
          <div class="auth-dropdown-header">
            <span class="auth-dropdown-email">${email}</span>
          </div>
          <div class="auth-dropdown-divider"></div>
          <button class="auth-dropdown-item" onclick="handleSignOut()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Cerrar sesión
          </button>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <button class="auth-login-btn" onclick="handleGoogleLogin()">
        <svg class="google-icon" viewBox="0 0 24 24" width="18" height="18">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span>Iniciar sesión</span>
      </button>
    `;
  }
}

/**
 * Handle Google login button click
 */
window.handleGoogleLogin = async function () {
  const user = await signInWithGoogle();

  if (user) {
    console.log('[Auth] User logged in:', user.uid);

    const localTeams = getAllTeams();
    const localPreferences = { selectedGame: getSelectedGame() };

    // Load cloud data first
    const cloudTeams = await getTeamsFromCloud(user.uid);
    console.log('[Auth] Cloud teams:', cloudTeams.length, '| Local teams:', localTeams.length);

    if (cloudTeams.length > 0) {
      // Cloud has data - merge with local (cloud takes priority)
      const mergedTeams = mergeTeams(localTeams, cloudTeams);
      console.log('[Auth] Merged teams:', mergedTeams.length);

      // Save merged teams to localStorage (this will also sync back to cloud)
      saveAllTeams(mergedTeams);

      // Set active team
      if (mergedTeams.length > 0) {
        setActiveTeamId(mergedTeams[0].id);
      }
    } else if (localTeams.length > 0) {
      // No cloud data but has local - migrate to cloud
      console.log('[Auth] Migrating local teams to cloud...');
      await migrateLocalDataToCloud(user.uid, localTeams, localPreferences);
    }

    // Force UI refresh
    console.log('[Auth] Refreshing UI...');
    window.dispatchEvent(new CustomEvent('teamListUpdated'));
    window.dispatchEvent(new CustomEvent('teamChanged'));
  }
};

/**
 * Handle sign out button click
 */
window.handleSignOut = async function () {
  await signOutUser();

  // Close dropdown
  const dropdown = document.getElementById('auth-dropdown');
  if (dropdown) dropdown.classList.add('hidden');
};

/**
 * Toggle auth dropdown visibility
 */
window.toggleAuthDropdown = function (event) {
  event.stopPropagation();
  const dropdown = document.getElementById('auth-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
};

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('auth-dropdown');
  if (dropdown && !e.target.closest('.auth-user-profile')) {
    dropdown.classList.add('hidden');
  }
});

/**
 * Merge local and cloud teams, preferring cloud data for conflicts
 */
function mergeTeams(localTeams, cloudTeams) {
  const teamMap = new Map();

  // Add local teams first
  localTeams.forEach(team => {
    teamMap.set(team.id, team);
  });

  // Override/add cloud teams
  cloudTeams.forEach(team => {
    teamMap.set(team.id, team);
  });

  return Array.from(teamMap.values());
}
