// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  doc,
  getFirestore,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD6_cqcZWMNbPzF9rOOZ0_8Ou0FTX4bnQ",
  authDomain: "crwn-clothing-52c9f.firebaseapp.com",
  projectId: "crwn-clothing-52c9f",
  storageBucket: "crwn-clothing-52c9f.appspot.com",
  messagingSenderId: "923788332074",
  appId: "1:923788332074:web:1afc5d35355f076473c753",
  measurementId: "G-LLQ92KFH3P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

// Auth
export const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = doc(db, `/users/${userAuth.uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = serverTimestamp();

    try {
      await setDoc(userRef, { displayName, email, createdAt, ...otherData });
    } catch (error) {
      console.error("Error saving user profile", error);
    }
  }

  return userRef;
};
