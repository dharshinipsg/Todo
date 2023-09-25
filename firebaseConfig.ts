import { initializeApp } from 'firebase/app';
//import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAyJkVIhAe7IFPKLH5kQkXBK5pBXOshc2s",
    authDomain: "firestreamapp-34d8b.firebaseapp.com",
    projectId: "firestreamapp-34d8b",
    storageBucket: "firestreamapp-34d8b.appspot.com",
    messagingSenderId: "937768908798",
    appId: "1:937768908798:web:e88ce3b22c9419a50732af",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
//export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

