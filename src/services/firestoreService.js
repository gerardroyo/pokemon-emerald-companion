// Firestore Data Service
// Handles CRUD operations for teams and user preferences

import { db } from './firebaseConfig.js';
import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    deleteDoc,
    writeBatch,
    serverTimestamp
} from 'firebase/firestore';

/**
 * Save a single team to Firestore
 * @param {string} userId - The user's UID
 * @param {Object} team - The team object
 */
export async function saveTeamToCloud(userId, team) {
    try {
        const teamRef = doc(db, 'users', userId, 'teams', team.id);
        await setDoc(teamRef, {
            ...team,
            updatedAt: serverTimestamp()
        });
        return true;
    } catch (error) {
        console.error('Error saving team to cloud:', error);
        return false;
    }
}

/**
 * Save all teams to Firestore (batch operation)
 * @param {string} userId - The user's UID
 * @param {Array} teams - Array of team objects
 */
export async function saveAllTeamsToCloud(userId, teams) {
    try {
        const batch = writeBatch(db);

        teams.forEach(team => {
            const teamRef = doc(db, 'users', userId, 'teams', team.id);
            batch.set(teamRef, {
                ...team,
                updatedAt: serverTimestamp()
            });
        });

        await batch.commit();
        return true;
    } catch (error) {
        console.error('Error saving teams to cloud:', error);
        return false;
    }
}

/**
 * Get all teams from Firestore for a user
 * @param {string} userId - The user's UID
 * @returns {Array} Array of team objects
 */
export async function getTeamsFromCloud(userId) {
    try {
        const teamsRef = collection(db, 'users', userId, 'teams');
        const snapshot = await getDocs(teamsRef);

        const teams = [];
        snapshot.forEach(doc => {
            teams.push({ id: doc.id, ...doc.data() });
        });

        // Sort by createdAt
        teams.sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));

        return teams;
    } catch (error) {
        console.error('Error getting teams from cloud:', error);
        return [];
    }
}

/**
 * Delete a team from Firestore
 * @param {string} userId - The user's UID
 * @param {string} teamId - The team ID to delete
 */
export async function deleteTeamFromCloud(userId, teamId) {
    try {
        const teamRef = doc(db, 'users', userId, 'teams', teamId);
        await deleteDoc(teamRef);
        return true;
    } catch (error) {
        console.error('Error deleting team from cloud:', error);
        return false;
    }
}

/**
 * Save user preferences to Firestore
 * @param {string} userId - The user's UID
 * @param {Object} preferences - User preferences object
 */
export async function savePreferencesToCloud(userId, preferences) {
    try {
        const prefsRef = doc(db, 'users', userId, 'settings', 'preferences');
        await setDoc(prefsRef, {
            ...preferences,
            updatedAt: serverTimestamp()
        });
        return true;
    } catch (error) {
        console.error('Error saving preferences to cloud:', error);
        return false;
    }
}

/**
 * Get user preferences from Firestore
 * @param {string} userId - The user's UID
 * @returns {Object|null} Preferences object or null
 */
export async function getPreferencesFromCloud(userId) {
    try {
        const prefsRef = doc(db, 'users', userId, 'settings', 'preferences');
        const snapshot = await getDoc(prefsRef);

        if (snapshot.exists()) {
            return snapshot.data();
        }
        return null;
    } catch (error) {
        console.error('Error getting preferences from cloud:', error);
        return null;
    }
}

/**
 * Migrate local data to cloud on first login
 * @param {string} userId - The user's UID
 * @param {Array} localTeams - Teams from localStorage
 * @param {Object} localPreferences - Preferences from localStorage
 */
export async function migrateLocalDataToCloud(userId, localTeams, localPreferences) {
    try {
        // Check if user already has cloud data
        const existingTeams = await getTeamsFromCloud(userId);

        if (existingTeams.length === 0 && localTeams.length > 0) {
            // No cloud data, migrate local teams
            console.log('Migrating local teams to cloud...');
            await saveAllTeamsToCloud(userId, localTeams);
        }

        // Save preferences
        if (localPreferences) {
            await savePreferencesToCloud(userId, localPreferences);
        }

        return true;
    } catch (error) {
        console.error('Error migrating data to cloud:', error);
        return false;
    }
}
