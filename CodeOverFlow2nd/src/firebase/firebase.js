// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzyM3S28PSKrbkEQDmBiYr-4roGx0ceTc",
  authDomain: "codeoverflow-718e8.firebaseapp.com",
  projectId: "codeoverflow-718e8",
  storageBucket: "codeoverflow-718e8.appspot.com",
  messagingSenderId: "463861614601",
  appId: "1:463861614601:web:9eaa9708c13e2d90e590d8"
};

const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
export const db = getFirestore(app);