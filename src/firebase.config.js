import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAGC8_IwDKEaddqwFuFPKIC1WeIaoFz_mo",
    authDomain: "website-job-21a07.firebaseapp.com",
    databaseURL: "https://website-job-21a07-default-rtdb.firebaseio.com",
    projectId: "website-job-21a07",
    storageBucket: "website-job-21a07.appspot.com",
    messagingSenderId: "354900802834",
    appId: "1:354900802834:web:c18ade6649eece171347cb",
    measurementId: "G-T0SWV02Q0Y"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();
export { app, firestore, storage, auth }