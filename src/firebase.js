import { initializeApp } from "firebase/app";
import {
  getFirestore,
} from "firebase/firestore"
import {
  getAuth
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAoG_76nYVbim-5nwMj9ZYkutmNLEb6uHQ",
  authDomain: "disney-app-test.firebaseapp.com",
  projectId: "disney-app-test",
  storageBucket: "disney-app-test.appspot.com",
  messagingSenderId: "934349320404",
  appId: "1:934349320404:web:e1d3831596228b2047cb41"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(); 
const auth = getAuth();

//const colRef

/* const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage(); */

//export { auth, provider, storage };
export default db;