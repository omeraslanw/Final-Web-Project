import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import 'firebase/installations';
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6RrOvYvODh0zHb_Quc7AQPIJ-OHwZP-c",
    authDomain: "final-web-project-a11d4.firebaseapp.com",
    projectId: "final-web-project-a11d4",
    storageBucket: "final-web-project-a11d4.appspot.com",
    messagingSenderId: "141378647602",
    appId: "1:141378647602:web:92b7731bebd395a9f5ee2b",
    measurementId: "G-JHDBMJR1C6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

