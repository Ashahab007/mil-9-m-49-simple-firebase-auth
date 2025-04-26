// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP6Ez_fHQ8TJGaAT5957P-40u1ZEre4cM",
  authDomain: "simple-firebase-auth-2f2bf.firebaseapp.com",
  projectId: "simple-firebase-auth-2f2bf",
  storageBucket: "simple-firebase-auth-2f2bf.firebasestorage.app",
  messagingSenderId: "596135705472",
  appId: "1:596135705472:web:9bc2488dd5c3c4540a5f65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
