// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jotamariano-99458.firebaseapp.com",
  projectId: "jotamariano-99458",
  storageBucket: "jotamariano-99458.appspot.com",
  messagingSenderId: "617885614197",
  appId: "1:617885614197:web:12c3881d4e74675e40783c",
  measurementId: "G-JXDLZ5GDPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);