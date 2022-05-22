import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZQv8wiCa2nBFvI64tw00fGh8mNe2ONWQ",
  authDomain: "linkedin-clone-dd4d7.firebaseapp.com",
  projectId: "linkedin-clone-dd4d7",
  storageBucket: "linkedin-clone-dd4d7.appspot.com",
  messagingSenderId: "740281696284",
  appId: "1:740281696284:web:82e2b03b4647ee83aa5fd9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // Connects to database and sets everything up

const db = firebaseApp.firestore(); // We have access to our variable inside db

const auth = firebase.auth(); // Gives access to authentication

export { db, auth };
