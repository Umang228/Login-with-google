import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAryRUaUBfpcK_H521bp_VUAidVOKYeEVA",
  authDomain: "login-1a730.firebaseapp.com",
  projectId: "login-1a730",
  storageBucket: "login-1a730.firebasestorage.app",
  messagingSenderId: "1058291778455",
  appId: "1:1058291778455:web:51f3b24c3a0a3716183ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;