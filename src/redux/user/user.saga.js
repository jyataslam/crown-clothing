import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
    SignInSuccess,
    SignInFailure,
    signOutSuccess,
    signOutFailure,
    signUpStart,
    signUpSuccess,
    signUpFailure,
} from "./user.actions";

import {
    auth,
    googleProvider,
    createUserProfileDocument,
    getCurrentUser,
} from "../../firebase/firebase.utils";

// reusable generator function for use with sign in methods
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(
            createUserProfileDocument,
            userAuth,
            additionalData
        );
        const userSnapshot = yield userRef.get();
        yield put(
            SignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
        );
    } catch (error) {
        yield put(SignInFailure(error.message));
    }
}

// create the google sign in popup
// get back userAuth object that has the user details on the user key
// call createUserProfileDocument and use useAuth object to get the userRef
// get snapshot using userRef and put out the success
// the success method will update userReducer using the object that is being passed to it
export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(SignInFailure(error.message));
    }
}

export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(SignInFailure(error.message));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        console.log("object", userAuth);
        // if no user (is null) just return out of it
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(SignInFailure(error));
    }
}

export function* signOutStart() {
    try {
        yield auth.signOut();
        // 'put' is Saga's way of dispatching. signOutSuccess is coming from the actions which will then go to the reducer
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield put(signUpSuccess({ user, additionalData: { displayName } }));
    } catch (error) {
        yield put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth(user, additionalData);
}

// listener that listens for the start of our API call, giving it the respective object that it needs (second parameter)
export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

// listener that listens for the start of our API call, giving it the respective object that it needs (second parameter)
export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

// listener that listens for the start of our API call, giving it the respective object that it needs (second parameter)
export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

// listener that listens for the start of our API call, giving it the respective object that it needs (second parameter)
export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutStart);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
    ]);
}
