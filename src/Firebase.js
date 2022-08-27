import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAgydIK35ul8MNtFFcaDkMvfTJnRdPBsFo",
    authDomain: "fog-tracker.firebaseapp.com",
    projectId: "fog-tracker",
    storageBucket: "fog-tracker.appspot.com",
    messagingSenderId: "997079302557",
    appId: "1:997079302557:web:39445239f281a14aeb2f74"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const currentUser = auth.currentUser;

export async function createUser(email, password) {
    if (!email || !password) {
        throw new Error("Email or password is invalid");
    }

    if (currentUser) {
        throw new Error("User already exists.");
    }

    const response = await createUserWithEmailAndPassword(auth, email, password);

    const userResponse = await response.user;
    if (!userResponse) {
        throw new Error("Something went wrong creating the user.");
    }

    const userUID = userResponse.uid;
    if (!userUID) {
        throw new Error("Something went wrong creating the uid.");
    }
}

export async function logInUser(email, password) {
    if (!email || !password) {
        throw new Error('Email or password is invalid');
    }

    if (currentUser) {
        throw new Error('Already logged in');
    }

    const response = await signInWithEmailAndPassword(auth, email, password)

    const userResponse = await response.user;
    if (!userResponse) {
        // TODO EG: pq essa mensagem? vc sabe se eh isso mesmo?
        throw new Error('There is no user record corresponding to this identifier. The user may have been deleted.');
    }

    const userUID = userResponse.uid;
    if (!userUID) {
        throw new Error('Something went wrong with the uid');
    }
}

export async function logOut() {
    await signOut(auth)
        .then(() => {})
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("error code sing out: ", errorCode);
            console.log("error message sign out: ", errorMessage);
        })
}
