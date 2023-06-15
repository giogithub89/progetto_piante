// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB__tyk4sAUqC9Ve9DYU3BJ3EUMwmDq_es",
  authDomain: "biosphere-666cb.firebaseapp.com",
  projectId: "biosphere-666cb",
  storageBucket: "biosphere-666cb.appspot.com",
  messagingSenderId: "209705391753",
  appId: "1:209705391753:web:147206819ef6dacd89d858",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
