// Firebase Configuration
// Your Firebase project config

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdPWE0n1r9fz71UW2Iq9ei5cuwmT6hA2w",
    authDomain: "pokemon-companion-772b7.firebaseapp.com",
    projectId: "pokemon-companion-772b7",
    storageBucket: "pokemon-companion-772b7.firebasestorage.app",
    messagingSenderId: "155152466778",
    appId: "1:155152466778:web:a8fa15f29537178eb9a963",
    measurementId: "G-TCDWLD4MD2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
