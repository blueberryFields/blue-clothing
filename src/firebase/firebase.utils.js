import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCRWDbeEE6RytcXFKEY_Jgy9_A2yk_a-90",
  authDomain: "blue-clothing-db.firebaseapp.com",
  databaseURL: "https://blue-clothing-db.firebaseio.com",
  projectId: "blue-clothing-db",
  storageBucket: "blue-clothing-db.appspot.com",
  messagingSenderId: "174970274089",
  appId: "1:174970274089:web:8df25db85112d41dbcb738",
  measurementId: "G-RVP7KS5PQ9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(firestore.doc("users/823493dasdsd"));
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
