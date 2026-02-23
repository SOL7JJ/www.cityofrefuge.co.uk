// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBINIxrJKYMryeNEqE34MqoEQpnZGY5U_k",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "my-react-app-392a2.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "my-react-app-392a2",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "my-react-app-392a2.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "807599911562",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:807599911562:web:ff9287927136c8db423373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
