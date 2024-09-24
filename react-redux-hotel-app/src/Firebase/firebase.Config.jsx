// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDfDM3sozhz6F8UdZk00QqSP34tzLuxnII",
  authDomain: "hotel-app-database.firebaseapp.com",
  projectId: "hotel-app-database",
  storageBucket: "hotel-app-database.appspot.com",
  messagingSenderId: "134856785932",
  appId: "1:134856785932:web:fdb391585cb92bfa2eee29",
  measurementId: "G-25FJ1G08CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)

export default app;