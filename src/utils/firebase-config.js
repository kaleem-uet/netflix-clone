// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzJGHNqgZYfMkQIMYpUtE47bZirJekolc",
  authDomain: "netflix-clone-59e43.firebaseapp.com",
  projectId: "netflix-clone-59e43",
  storageBucket: "netflix-clone-59e43.appspot.com",
  messagingSenderId: "1010116007695",
  appId: "1:1010116007695:web:89a7631cb1b87319ed907a",
  measurementId: "G-ZDVRSRW774"
};
export const logout = () => {
  signOut(firebaseAuth);
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
