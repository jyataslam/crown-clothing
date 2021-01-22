import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBaOUfC1ioshfzMIa_VLlLSqTIPTSKKtQM",
    authDomain: "crwn-clothing-db-232d4.firebaseapp.com",
    projectId: "crwn-clothing-db-232d4",
    storageBucket: "crwn-clothing-db-232d4.appspot.com",
    messagingSenderId: "96871410855",
    appId: "1:96871410855:web:2d14e7f1b6ef3dfea7bf82",
    measurementId: "G-V6GDC23PNR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
