import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { useState } from "react";

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
export const user = auth.currentUser;

export async function createUser(email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch(error => {
           const errorCode = error.code;
           const errorMessage = error.message;

           console.log('error code create user: ', errorCode);
           console.log('error message create user: ', errorMessage);
        });
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