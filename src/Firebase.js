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
    getDocs,
    getFirestore,
    collection,
    doc,
    deleteDoc,
    query,
    where,
    updateDoc
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
const symptomsCollectionRef = collection(db, "symptoms");
const foodsCollectionRef = collection(db, "foods");
const beveragesCollectionRef = collection(db, "beverages");

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

    const querySymptoms = query(
      symptomsCollectionRef,
      where("userId", "==", auth.currentUser.uid)
    );
    const responseQuerySymptoms = await getDocs(querySymptoms);
    const symptoms = responseQuerySymptoms.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
    }));
    setData(symptoms);
}

export async function removeSymptom(id) {
    const symp = doc(db, "symptoms", id);
    await deleteDoc(symp);
}

export async function editSymptom(id, fogginess, anxiety, headache, fatigue, gut, date) {
    const symptomRef = doc(db, "symptoms",id);
    await updateDoc(symptomRef, {
        fogginess,
        anxiety,
        headache,
        fatigue,
        gut,
        date,
    });
}

export async function registerFood(foodsData, date) {
    await addDoc(foodsCollectionRef, {
        foods: foodsData,
        date,
        userId: auth.currentUser.uid,
    });
}

export async function getFoods(setData) {
    const queryFoods = query(
      foodsCollectionRef,
      where("userId", "==", auth.currentUser.uid)
    );
    const responseQueryFoods = await getDocs(queryFoods);
    const foods = responseQueryFoods.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));
    setData(foods);
}

export async function removeFood(id) {
    const foodRef = doc(db, "foods", id);
    await deleteDoc(foodRef);
}

export async function editFood(id, foods, date) {
    const foodRed = doc(db, "foods", id);
    await updateDoc(foodRed, {
        foods,
        date
    });
}

export async function editBeverages(beverages, date, id) {
    const beveragesRef = doc(db, "beverages", id);
    await updateDoc(beveragesRef, {
        beverages,
        date
    });
}

export async function getBeverages(setData) {
    const queryBeverages = query(
      beveragesCollectionRef,
      where("userId", "==", auth.currentUser.uid)
    );
    const responseQueryBeverages = await getDocs(queryBeverages);
    const beverages = responseQueryBeverages.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }));
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
    const beveragesRef = doc(db, "beverages", id);
    await deleteDoc(beveragesRef);
}
