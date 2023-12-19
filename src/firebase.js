// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPAe8GSucgJV9c4Hyg90aaZJrmKc5A7Ak",
  authDomain: "taskapp-9bcb0.firebaseapp.com",
  projectId: "taskapp-9bcb0",
  storageBucket: "taskapp-9bcb0.appspot.com",
  messagingSenderId: "193251181528",
  appId: "1:193251181528:web:7ea794b2a61cfd154ea8ad",
  measurementId: "G-1HVT718ZJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();