import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
    authDomain: "tuc-tech.firebaseapp.com",
    projectId: "tuc-tech",
    storageBucket: "tuc-tech.appspot.com",
    messagingSenderId: "826402634931",
    appId: "1:826402634931:web:f479500007953bc61244c6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);