import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBvhKmg9S10kLOXD2U9nsAGelGB5FD2pHo",
    authDomain: "reactfirebse-b3136.firebaseapp.com",
    projectId: "reactfirebse-b3136",
    storageBucket: "reactfirebse-b3136.appspot.com",
    messagingSenderId: "760429492045",
    appId: "1:760429492045:web:8658f3997f83369fe36904",
    measurementId: "G-WHJBDWJC60"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)
export const storage = getStorage(app)
