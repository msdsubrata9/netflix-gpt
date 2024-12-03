// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc-R625AcaMMfKmqKIAgaJM9g5b2O5LgU",
  authDomain: "netflixgpt-34dda.firebaseapp.com",
  projectId: "netflixgpt-34dda",
  storageBucket: "netflixgpt-34dda.firebasestorage.app",
  messagingSenderId: "126983341595",
  appId: "1:126983341595:web:816dc9063856746f579abe",
  measurementId: "G-7NRKY98ZKW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
