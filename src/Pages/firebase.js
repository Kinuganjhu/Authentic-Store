import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9ig70v6YCNOlclkdoRfOpJOb_VT8jTUM",
  authDomain: "storage-b52de.firebaseapp.com",
  databaseURL: "https://storage-b52de-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "storage-b52de",
  storageBucket: "storage-b52de.appspot.com",
  messagingSenderId: "90214985124",
  appId: "1:90214985124:web:f0fc7cca73f33bf75de531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);