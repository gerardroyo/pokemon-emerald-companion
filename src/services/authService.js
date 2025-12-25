// Authentication Service
// Handles Google Sign-In and user session management

import { auth } from './firebaseConfig.js';
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

// Current user reference (cached for sync access)
let currentUser = null;

// Initialize auth state listener
onAuthStateChanged(auth, (user) => {
    currentUser = user;
    window.dispatchEvent(new CustomEvent('authStateChanged', { detail: user }));
});

/**
 * Sign in with Google popup
 * @returns {Promise<User|null>} The signed-in user or null on error
 */
export async function signInWithGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        console.error('Error signing in with Google:', error);

        // Handle specific errors
        if (error.code === 'auth/popup-closed-by-user') {
            console.log('User closed the popup');
            return null;
        } else if (error.code === 'auth/popup-blocked') {
            alert('El popup fue bloqueado. Por favor, permite popups para este sitio.');
            await signInWithRedirect(auth, googleProvider);
            return null;
        } else if (error.code === 'auth/cancelled-popup-request') {
            await signInWithRedirect(auth, googleProvider);
            return null;
        } else if (error.code === 'auth/unauthorized-domain') {
            alert('Este dominio no está autorizado para el inicio de sesión con Google. Revisa la configuración de Firebase.');
            return null;
        }

        return null;
    }
}

/**
 * Sign out the current user
 * @returns {Promise<boolean>} True if sign out was successful
 */
export async function signOutUser() {
    try {
        await signOut(auth);
        return true;
    } catch (error) {
        console.error('Error signing out:', error);
        return false;
    }
}

/**
 * Get the current authenticated user (synchronous)
 * @returns {User|null} The current user or null
 */
export function getCurrentUser() {
    // Use both cached and direct Firebase reference for reliability
    return currentUser || auth.currentUser;
}

/**
 * Check if a user is currently signed in
 * @returns {boolean}
 */
export function isAuthenticated() {
    return currentUser !== null;
}

/**
 * Subscribe to auth state changes
 * @param {Function} callback - Called with user object (or null) on auth changes
 * @returns {Function} Unsubscribe function
 */
export function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, callback);
}

/**
 * Get user display info for UI
 * @returns {Object|null} User display info or null
 */
export function getUserInfo() {
    if (!currentUser) return null;

    return {
        uid: currentUser.uid,
        displayName: currentUser.displayName || 'Usuario',
        email: currentUser.email,
        photoURL: currentUser.photoURL || null
    };
}
