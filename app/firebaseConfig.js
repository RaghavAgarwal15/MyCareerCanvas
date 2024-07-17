import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//     apiKey: "AIzaSyBIdxFANrLhieb-YKljHQpVaUbrTRqnFJY" ,
//     authDomain: "lean-in-hacks-5.firebaseapp.com",
//     projectId: "lean-in-hacks-5",
//     storageBucket: "lean-in-hacks-5.appspot.com",
//     messagingSenderId: "993429746220",
//     appId: "1:993429746220:web:3756b75136394b75299789"
// };

const firebaseConfig = {
    apiKey: "AIzaSyAqTP-Wu-ygH_ZCfM8VqvPzSKR9HX3exJE",
    authDomain: "codescript2-755db.firebaseapp.com",
    projectId: "codescript2-755db",
    storageBucket: "codescript2-755db.appspot.com",
    messagingSenderId: "660280525192",
    appId: "1:660280525192:web:6f942d660e101e16fcfa3d",
    measurementId: "G-25V7D3XL9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export { db, auth };