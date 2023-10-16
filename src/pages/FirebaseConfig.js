// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const FirebaseConfig = {
  apiKey: "AIzaSyBqiWn8jt8zJeEGivRivn40RsfrQNlCpBk",
  authDomain: "signupautho.firebaseapp.com",
  projectId: "signupautho",
  storageBucket: "signupautho.appspot.com",
  messagingSenderId: "666538713057",
  appId: "1:666538713057:web:5c9816be50c1dcfefafca0"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
export const database = getAuth(app)

