// firebase.js
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPsIXV7tU9bHzgMfRVHRt3_w45ygSN_u8",
  authDomain: "puckllana-web-1.firebaseapp.com",
  projectId: "puckllana-web-1",
  storageBucket: "puckllana-web-1.appspot.com",
  messagingSenderId: "586216940424",
  appId: "1:586216940424:web:cf4b220cf23b911b02503d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
