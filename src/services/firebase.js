// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZis4GrO4npwU7Vl4-NbsFdjqsNXQNzrc",
    authDomain: "spiffy-chat-app.firebaseapp.com",
    projectId: "spiffy-chat-app",
    storageBucket: "spiffy-chat-app.appspot.com",
    messagingSenderId: "915849283049",
    appId: "1:915849283049:web:ee555eac17266ba83ff778",
    measurementId: "G-BCVXZEJNEY"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth;
export const firestore = firebase.firestore();