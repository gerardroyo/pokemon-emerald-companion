// Firebase Configuration
// Your Firebase project config

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAdPWE0n1r9fz71UW2Iq9ei5cuwmT6hA2w",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "pokemon-companion-772b7.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "pokemon-companion-772b7",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "pokemon-companion-772b7.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "155152466778",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:155152466778:web:a8fa15f29537178eb9a963",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-TCDWLD4MD2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
