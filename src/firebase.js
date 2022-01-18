import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDq8pkNQ5Rad1bKJ_BjXaRI_6JXHIVrhO0",
    authDomain: "web-f4fc1.firebaseapp.com",
    projectId: "web-f4fc1",
    storageBucket: "web-f4fc1.appspot.com",
    messagingSenderId: "827711692278",
    appId: "1:827711692278:web:b6b636a730fa3bd50bfbd7",
    measurementId: "G-GKYRSX57EF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {db, auth};