import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCDgudGYzRJYmQF8PwDPSlQE3W_uKRySeI",
    authDomain: "servicecar-5815a.firebaseapp.com",
    projectId: "servicecar-5815a",
    storageBucket: "servicecar-5815a.appspot.com",
    messagingSenderId: "1063653139938",
    appId: "1:1063653139938:web:55ee26fbf0ddd31e5805bb"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;