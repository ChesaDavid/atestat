// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa66nRfzLg53TFVvnyQzcfDtb56746MCY",
  authDomain: "studyit-3ed97.firebaseapp.com",
  projectId: "studyit-3ed97",
  storageBucket: "studyit-3ed97.firebasestorage.app",
  messagingSenderId: "725453607168",
  appId: "1:725453607168:web:617abe7ce6a1c20026a3e5",
  measurementId: "G-9819R8TGXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);