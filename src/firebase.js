// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4QeuIsyAmndsP65y4uMqVFxxcoLE5WQE",
  authDomain: "foodie-939f7.firebaseapp.com",
  projectId: "foodie-939f7",
  storageBucket: "foodie-939f7.appspot.com",
  messagingSenderId: "945413868510",
  appId: "1:945413868510:web:461402a5942ca031f8ab4f",
  measurementId: "G-EPQZW28RMQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
