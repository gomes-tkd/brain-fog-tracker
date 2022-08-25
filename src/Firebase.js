import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { useState } from 'react';

const firebaseConfig = {
    apiKey: 'AIzaSyAgydIK35ul8MNtFFcaDkMvfTJnRdPBsFo',
    authDomain: 'fog-tracker.firebaseapp.com',
    projectId: 'fog-tracker',
    storageBucket: 'fog-tracker.appspot.com',
    messagingSenderId: '997079302557',
    appId: '1:997079302557:web:39445239f281a14aeb2f74'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const currentUser = auth.currentUser;

export async function createUser(email, password) {
    if (!email || !password) {
        throw 'Email or password is invalid';
    }

    await createUserWithEmailAndPassword(auth, email, password)
        .then(currentUser => {
            const user = currentUser.user;

            if (!user) {
                throw 'Something went wrong';
            }

            if (!user.uid) {
                throw 'Something went wrong uid';
            }
        })
        .catch(err => console.log(err.message));

/*
    if (!email || !password) {
        throw 'Email or password is invalid.';
    }

    if (currentUser) {
        throw 'User already exists.';
    }

    const response = await createUserWithEmailAndPassword(auth, email, password);
    const userResponse = await response.user;

    if (!userResponse) {
        throw 'Something went wrong creating the user.';
    }

    const userUID = userResponse.uid;

    if (!userUID) {
        throw 'Something went wrong creating the uid.';
    }
*/
    // if(!email || !password) {
    //     throw new Error('Email or password invalid firebase');
    // }
    //
    // if (currentUser) {
    //     throw new Error('Already logged in');
    // }
    //
    // const response = await createUserWithEmailAndPassword(auth, email, password);
    // const userResponse = response.user;
    //
    // if (!userResponse.isAuthenticated()) {
    //     throw new Error('Something went wrong: user response');
    // }
    //
    // const userUID = userResponse.uid;
    //
    // if (!userResponse.uid) {
    //     throw new Error('invalid userUID');
    // }
}

export async function logInUser(email, password) {

    await signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log('error code sign in: ', errorCode);
            console.log('error message sign in: ', errorMessage);
        })
}

export async function logOut() {
    await signOut(auth)
        .then(() => {})
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log('error code sing out: ', errorCode);
            console.log('error message sign out: ', errorMessage);
        })
}