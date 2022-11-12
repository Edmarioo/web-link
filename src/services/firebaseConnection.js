// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCP73d8zBacVkOv3YBplMRnyKgjXsv-jEA",
  authDomain: "link-web-3045e.firebaseapp.com",
  projectId: "link-web-3045e",
  storageBucket: "link-web-3045e.appspot.com",
  messagingSenderId: "756522510986",
  appId: "1:756522510986:web:a28c8200d9a86f0fa19b73",
  measurementId: "G-NV0R6QWN0W"
};

const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp)

export {db,auth};