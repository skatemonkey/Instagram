// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE0YrB1UmGAbe0FE6VbO6GWGVjsrfyw5M",
  authDomain: "instagram-demo-37336.firebaseapp.com",
  projectId: "instagram-demo-37336",
  storageBucket: "instagram-demo-37336.appspot.com",
  messagingSenderId: "974806102086",
  appId: "1:974806102086:web:5d0e527e5e1223e4839a47",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };