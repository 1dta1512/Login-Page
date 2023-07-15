import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3JYulbyXWS-Vz-S-Sj4vuYmBVuxCZJJw",
  authDomain: "otp-try1.firebaseapp.com",
  projectId: "otp-try1",
  storageBucket: "otp-try1.appspot.com",
  messagingSenderId: "519845467822",
  appId: "1:519845467822:web:0953c13adc3694103bff3f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
