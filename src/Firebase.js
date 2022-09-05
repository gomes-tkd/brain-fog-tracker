import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut
} from "firebase/auth";
import {
    addDoc,
    setDoc,
    getDocs,
    getFirestore,
    collection,
    doc,
    deleteDoc,
    onSnapshot
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgydIK35ul8MNtFFcaDkMvfTJnRdPBsFo",
    authDomain: "fog-tracker.firebaseapp.com",
    projectId: "fog-tracker",
    storageBucket: "fog-tracker.appspot.com",
    messagingSenderId: "997079302557",
    appId: "1:997079302557:web:39445239f281a14aeb2f74"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const symptomsCollectionRef = collection(db, "symptomsList");
const foodsCollectionRef = collection(db, "foodsList");

export async function createUser(email, password) {
    if (!email || !password) {
        throw new Error("Email or password is invalid");
    }

    if (auth.currentUser) {
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
        throw new Error("Email or password is invalid");
    }

    if (auth.currentUser) {
        throw new Error("Already logged in");
    }

    const response = await signInWithEmailAndPassword(auth, email, password)

    const userResponse = await response.user;
    if (!userResponse) {
        throw new Error("Something went wrong");
    }

    const userUID = userResponse.uid;
    if (!userUID) {
        throw new Error("Something went wrong with the uid");
    }
}

export async function logOut() {
    await signOut(auth);
}

export async function resetPassword(email) {
    if (!email) {
        throw new Error("Email is required.");
    }

    await sendPasswordResetEmail(auth, email);
}

export async function registerSymptom(fogginess, anxiety, headache, fatigue, gut, date) {
    await addDoc(symptomsCollectionRef, {
        fogginess,
        anxiety,
        headache,
        fatigue,
        gut,
        date,
        userId: auth.currentUser.uid,
    });
}

export async function getSymptoms(setData) {
    const data = await getDocs(symptomsCollectionRef);
    setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
}

export async function removeSymptom(id) {
    const symp = doc(db, "symptomsList", id);
    await deleteDoc(symp);
}

export async function editSymptom(id, fogginess, anxiety, headache, fatigue, gut, date) {
    const symptomRef = doc(db, "symptomsList", id);
    await setDoc(symptomRef, {
        fogginess,
        anxiety,
        headache,
        fatigue,
        gut,
        date,
    });
}

export async function registerFood(foods) {
    await addDoc(foodsCollectionRef, {
        foods,
        userId: auth.currentUser.uid,
    });
}

export async function getFoods(setData) {
    const data = await getDocs(foodsCollectionRef);
    setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
}

export async function removeFood(id) {
    const foodRef = doc(db, "foodsList", id);
    await deleteDoc(foodRef);
}