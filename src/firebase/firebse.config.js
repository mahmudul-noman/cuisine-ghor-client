// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA02yiX59P5rAO3UAt5HjFauqMp-qvh5hk",
  authDomain: "cuisine-ghor.firebaseapp.com",
  projectId: "cuisine-ghor",
  storageBucket: "cuisine-ghor.appspot.com",
  messagingSenderId: "517680704994",
  appId: "1:517680704994:web:87bc85c509c4f2b6001dbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;