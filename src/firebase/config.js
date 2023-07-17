import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBeIU6hydjknulLpn_AVdijOC1X7d0pbZ0",
  authDomain: "avaabeshop.firebaseapp.com",
  projectId: "avaabeshop",
  storageBucket: "avaabeshop.appspot.com",
  messagingSenderId: "110827872787",
  appId: "1:110827872787:web:0f2ec70e904279484e55e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;