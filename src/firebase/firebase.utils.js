import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import collection from "../pages/collection/collection";

const config = {
    apiKey: "AIzaSyBaOUfC1ioshfzMIa_VLlLSqTIPTSKKtQM",
    authDomain: "crwn-clothing-db-232d4.firebaseapp.com",
    projectId: "crwn-clothing-db-232d4",
    storageBucket: "crwn-clothing-db-232d4.appspot.com",
    messagingSenderId: "96871410855",
    appId: "1:96871410855:web:2d14e7f1b6ef3dfea7bf82",
    measurementId: "G-V6GDC23PNR",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (err) {
            console.log("error creating user", err.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log("collection ref", collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        // set each propery equal to their respective collection
        // ex: start with an empty object and set 'hats' equal to the 'hats' collection, and so on with each one creating a new object each time
        // you'll end up with the titles being the respective keys to their collection objects
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
