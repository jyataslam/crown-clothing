import { takeLatest, call, put, all } from "redux-saga/effects";

import {
    firestore,
    convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
    yield console.log("I am fired");

    try {
        // get the collection reference from our firestore db
        const collectionRef = firestore.collection("collections");

        // will return a promise which gets resolved in the form of our collectionRef which is set into our snapshot const -->
        // <-- instead of chaining .then and setting our collectionsMap within the Promise
        const snapshot = yield collectionRef.get();

        // 'call' is the effect inside our generator function that invokes the method 'convertCollectionsSnapshotToMap'
        // 'call' just invokes functions. first argument is a function/method and latter arguments are the parameters you passed into your first argument function call
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        // 'put' is the saga effect for creating actions
        // 'put' is used like a dispatch. it dispatches out an object that is expecting a type and a payload
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }

    // THUNK CODE
    // collectionRef
    //     .get()
    //     .then(snapshot => {
    //         const collectionsMap =
    //             convertCollectionsSnapshotToMap(snapshot);
    //         dispatch(fetchCollectionsSuccess(collectionsMap));
    //     })
    //     .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)]);
}
