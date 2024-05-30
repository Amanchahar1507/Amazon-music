// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-2q7XL_TBa9awRgjE4xYD3XpDHwHLFOM",
  authDomain: "music-1f3d0.firebaseapp.com",
  projectId: "music-1f3d0",
  storageBucket: "music-1f3d0.appspot.com",
  messagingSenderId: "1026574545463",
  appId: "1:1026574545463:web:448e23ea884c3806e945b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{db}