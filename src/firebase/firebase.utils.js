import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBJarklmukHBsNLBgf1y8f9Oqt_BeeX604",
  authDomain: "crwn-db-33dd8.firebaseapp.com",
  projectId: "crwn-db-33dd8",
  storageBucket: "crwn-db-33dd8.appspot.com",
  messagingSenderId: "989575067636",
  appId: "1:989575067636:web:ddfb15b1966b5c66206ba1",
  measurementId: "G-6FZXWWHZLZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;