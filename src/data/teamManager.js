
import { getSelectedGame } from './gameManager.js';
import { getCurrentUser } from '../services/authService.js';
import { saveAllTeamsToCloud, deleteTeamFromCloud } from '../services/firestoreService.js';

const STORAGE_KEY_PREFIX = 'poke_companion_teams_';
const ACTIVE_TEAM_KEY = 'poke_companion_active_team_id';

// Team Structure:
// {
//   id: string (uuid),
//   name: string,
//   game: 'emerald' | 'platinum',
//   slots: [null, null, null, null, null, null] (or pokemon objects)
// }

function getStorageKey() {
    return STORAGE_KEY_PREFIX + getSelectedGame();
}

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function getAllTeams() {
    try {
        const json = localStorage.getItem(getStorageKey());
        return json ? JSON.parse(json) : [];
    } catch (e) {
        console.error("Error loading teams", e);
        return [];
    }
}

export function clearAllTeams() {
    localStorage.removeItem(getStorageKey());
    localStorage.removeItem(ACTIVE_TEAM_KEY);
}

export function saveAllTeams(teams) {
    // Always save to localStorage first (offline-first approach)
    localStorage.setItem(getStorageKey(), JSON.stringify(teams));

    // Sync to cloud if user is authenticated
    const user = getCurrentUser();
    console.log('[TeamManager] Saving teams. User authenticated:', !!user, user?.uid);

    if (user) {
        console.log('[TeamManager] Syncing', teams.length, 'teams to cloud for user:', user.uid);
        saveAllTeamsToCloud(user.uid, teams)
            .then(() => console.log('[TeamManager] ✅ Cloud sync successful'))
            .catch(err => {
                console.warn('[TeamManager] ❌ Failed to sync teams to cloud:', err);
            });
    }
}

export function createNewTeam(name = "Nuevo Equipo") {
    const teams = getAllTeams();
    const newTeam = {
        id: generateId(),
        name: name,
        game: getSelectedGame(),
        slots: Array(6).fill(null),
        createdAt: Date.now()
    };
    teams.push(newTeam);
    saveAllTeams(teams);
    setActiveTeamId(newTeam.id);
    return newTeam;
}

export function getActiveTeamId() {
    return localStorage.getItem(ACTIVE_TEAM_KEY);
}

export function setActiveTeamId(id) {
    localStorage.setItem(ACTIVE_TEAM_KEY, id);
    // Dispatch event for UI updates
    window.dispatchEvent(new CustomEvent('teamChanged', { detail: id }));
}

export function getActiveTeam() {
    const teams = getAllTeams();
    const activeId = getActiveTeamId();

    // Return active team or first team or create one if none exist
    let team = teams.find(t => t.id === activeId);

    if (!team && teams.length > 0) {
        team = teams[0];
        setActiveTeamId(team.id);
    }

    if (!team) {
        team = createNewTeam("Mi Equipo Principal");
    }

    return team;
}

export function updateActiveTeamSlots(slots) {
    const teams = getAllTeams();
    const activeId = getActiveTeamId();
    const teamIndex = teams.findIndex(t => t.id === activeId);

    if (teamIndex !== -1) {
        teams[teamIndex].slots = slots;
        saveAllTeams(teams);
        // We don't dispatch 'teamChanged' here to avoid infinite render loops, 
        // as this is usually called BY the renderer or actions.
        // But logic waiting for updates might need it. Let's see.
    }
}

export function updateTeamName(id, name) {
    const teams = getAllTeams();
    const team = teams.find(t => t.id === id);
    if (team) {
        team.name = name;
        saveAllTeams(teams);
        window.dispatchEvent(new CustomEvent('teamListUpdated'));
    }
}

export function deleteTeam(id) {
    let teams = getAllTeams();
    if (teams.length <= 1) {
        alert("No puedes borrar el último equipo.");
        return;
    }

    teams = teams.filter(t => t.id !== id);
    saveAllTeams(teams);

    if (getActiveTeamId() === id) {
        setActiveTeamId(teams[0].id);
    } else {
        window.dispatchEvent(new CustomEvent('teamListUpdated'));
    }
}
