// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 export const config = {
  firebaseConfig: {
  apiKey: "AIzaSyCrcOSCR-ObCBEk6TpXoA_wMLvq6w_Xyfs",
  authDomain: "learnr-proj.firebaseapp.com",
  projectId: "learnr-proj",
  storageBucket: "learnr-proj.appspot.com",
  messagingSenderId: "735425073162",
  appId: "1:735425073162:web:2a6ea239eb2b8916738ff3",
  measurementId: "G-K1FLWP9KLB"
  }
};

// Initialize Firebase
const app = initializeApp(config.firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore();