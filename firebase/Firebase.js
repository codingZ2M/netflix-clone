import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc,
         where, getDocs, query,
         onSnapshot, doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCv70MBzs3wMjeOUVxlPKqCbUbjR4xa_Is",
    authDomain: "netflix-clone-70133.firebaseapp.com",
    projectId: "netflix-clone-70133",
    storageBucket: "netflix-clone-70133.appspot.com",
    messagingSenderId: "964856812404",
    appId: "1:964856812404:web:52eccc956332ae75999221",
    measurementId: "G-ND4J2XD18C"
  };

  
  initializeApp( firebaseConfig );
  const auth = getAuth();
  const db = getFirestore();
  const provider = new GoogleAuthProvider();
  
  export {auth, provider, signInWithPopup, onAuthStateChanged, 
    signOut, collection, getDocs,getDoc, query, where, onSnapshot, doc }
    
  export default db;