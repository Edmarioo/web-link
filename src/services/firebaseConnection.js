// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDqh06uygAkg-PMAALLoGkviZ4Bn7ylquc",
  authDomain: "links-cc344.firebaseapp.com",
  projectId: "links-cc344",
  storageBucket: "links-cc344.appspot.com",
  messagingSenderId: "178637013657",
  appId: "1:178637013657:web:85c327481472795066ee08",
  measurementId: "G-7BL5RFTCMQ"
};
const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp)

export {db,auth};