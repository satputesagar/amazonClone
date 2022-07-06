import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDE8_QuOMfY680QjUx11efHeG1kIfcxypE",
    authDomain: "clone-e7548.firebaseapp.com",
    projectId: "clone-e7548",
    storageBucket: "clone-e7548.appspot.com",
    messagingSenderId: "575051381066",
    appId: "1:575051381066:web:386014f7bb5e11336729b3",
    measurementId: "G-5P0869BGME"
  };

//   const firebaseApp =firebase.initializeApp(firebaseConfig);

  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };