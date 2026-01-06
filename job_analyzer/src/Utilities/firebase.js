import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfoYkhNco6vcLnFFqP3bufDoBr3rfvBaA",
  authDomain: "job-skill-analyzer.firebaseapp.com",
  projectId: "job-skill-analyzer",
  storageBucket: "job-skill-analyzer.firebasestorage.app",
  messagingSenderId: "626739602819",
  appId: "1:626739602819:web:b36a7700c64d6d416782b6",
  measurementId: "G-N06618SP4N"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);