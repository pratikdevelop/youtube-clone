import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyALAZ_eovnn6X039yJWtfWWgaA1KqxRNQA",
    authDomain: "node-firebase-app-23596.firebaseapp.com",
    projectId: "node-firebase-app-23596",
    storageBucket: "node-firebase-app-23596.appspot.com",
    messagingSenderId: "566314639036",
    appId: "1:566314639036:web:b05fd906f7380721c9bab9",
    measurementId: "G-BSZXWD8YL1"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);