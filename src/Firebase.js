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
    query,
    where,
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
export const db = getFirestore(app);
const symptomsCollectionRef = collection(db, "symptomsList");
const foodsCollectionRef = collection(db, "foodsList");
export const beveragesCollectionRef = collection(db, "beveragesList");

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

export async function getSymptoms(setData, id) {
    // const data = await getDocs(symptomsCollectionRef);
    // setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})));

    const symptoms = [];
    const querySymptoms = query(symptomsCollectionRef, where("userId", "==", id));
    const responseQuerySymptoms = await getDocs(querySymptoms);
    responseQuerySymptoms.forEach(doc => symptoms.push({...doc.data(), id: doc.id}));
    setData(symptoms);
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
        userId: auth.currentUser.uid
    });
}

export async function registerFood(foodsData, date) {
    await addDoc(foodsCollectionRef, {
        foods: foodsData,
        date,
        userId: auth.currentUser.uid,
    });
}

export async function getFoods(setData, id) {
    const foods = [];
    const queryFoods = query(foodsCollectionRef, where("userId", "==", id));
    const responseQueryFoods = await getDocs(queryFoods);
    responseQueryFoods.forEach(doc => foods.push({...doc.data(), id: doc.id}));
    setData(foods);
}

export async function removeFood(id) {
    const foodRef = doc(db, "foodsList", id);
    await deleteDoc(foodRef);
}

export async function editFood(id, foods, date) {
    const foodRed = doc(db, "foodsList", id);
    await setDoc(foodRed, {
        foods,
        date,
        userId: auth.currentUser.uid
    });
}

export async function editBeverages(beverages, date, id) {
    const beveragesRef = doc(db, "beveragesList", id);
    await setDoc(beveragesRef, {
        beverages,
        date,
        userId: auth.currentUser.uid
    });
}

export async function getBeverages(setData, id) {
    const beverages = [];
    const queryBeverages = query(beveragesCollectionRef, where("userId", "==", id));
    const responseQueryBeverages = await getDocs(queryBeverages);
    responseQueryBeverages.forEach(doc => {
        beverages.push({...doc.data(), id: doc.id});
    });
    setData(beverages);
}

export async function registerBeverages(beveragesData, date) {
    await addDoc(beveragesCollectionRef, {
        beverages: beveragesData,
        date,
        userId: auth.currentUser.uid,
    });
}

export async function removeBeverages(id) {
    const beveragesRef = doc(db, "beveragesList", id);
    await deleteDoc(beveragesRef);
}
