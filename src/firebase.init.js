// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAywJ_wefxUCA01A9gHnsM4V3P82ReVKYM",
  authDomain: "email-password-auth-29205.firebaseapp.com",
  projectId: "email-password-auth-29205",
  storageBucket: "email-password-auth-29205.firebasestorage.app",
  messagingSenderId: "953412323876",
  appId: "1:953412323876:web:bdb7889c0c2d3aedde66b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
