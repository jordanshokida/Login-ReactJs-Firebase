// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL2kiRIgmYu5DTH2hpAnCgzGwNdfTHTsQ",
  authDomain: "login-13c7c.firebaseapp.com",
  projectId: "login-13c7c",
  storageBucket: "login-13c7c.appspot.com",
  messagingSenderId: "3120391156",
  appId: "1:3120391156:web:001e2daaeefda7cfc10fa1",
  measurementId: "G-KK3KRV50JJ"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;