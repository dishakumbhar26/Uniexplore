import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAHclIX-NU5smAeJfVX6IUVleO28BP-r7o",
  authDomain: "uniexplore-982ef.firebaseapp.com",
  databaseURL: "https://uniexplore-982ef-default-rtdb.firebaseio.com",
  projectId: "uniexplore-982ef",
  storageBucket: "uniexplore-982ef.firebasestorage.app",
  messagingSenderId: "828328387310",
  appId: "1:828328387310:web:d50f2aeef040200ae049ff",
  measurementId: "G-6PRWK978MC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);