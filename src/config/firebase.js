import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtI1yfIc6NPUelrYdZacYhrMp1rRZjFFo",
  authDomain: "eco-green-96959.firebaseapp.com",
  projectId: "eco-green-96959",
  storageBucket: "eco-green-96959.firebasestorage.app",
  messagingSenderId: "805152717097",
  appId: "1:805152717097:web:4dfb058f182e42f1a2df38",
  measurementId: "G-6KD4VXZKE4"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
