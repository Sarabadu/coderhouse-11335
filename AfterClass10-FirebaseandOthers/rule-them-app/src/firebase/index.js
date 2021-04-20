import firebase from 'firebase/app';
import 'firebase/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyBZK6YsNSfEz6HtH2QFX_IUvDdgPNPbpUM",
    authDomain: "ecommerce-coder-63325.firebaseapp.com",
    projectId: "ecommerce-coder-63325",
    storageBucket: "ecommerce-coder-63325.appspot.com",
    messagingSenderId: "791507079551",
    appId: "1:791507079551:web:cf0ff12d8e893ef6a58a4a"
})

export const getFirebase = () => {
    return app;
}

export const getFirestore = () =>{
    return firebase.firestore(app)
}