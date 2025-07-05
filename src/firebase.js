// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAWr0gA05I8OFEPXlS3YE08-hdDZQnsJuU",
  authDomain: "react-login-signup-9ea37.firebaseapp.com",
  projectId: "react-login-signup-9ea37",
  storageBucket: "react-login-signup-9ea37.firebasestorage.app",
  messagingSenderId: "931137504335",
  appId: "1:931137504335:web:4672f382de23bdc955963a",
  measurementId: "G-V48T3ZRXDF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// 👇 This line is crucial
export { auth };
