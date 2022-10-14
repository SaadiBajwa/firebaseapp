import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAnTYPmazrpba3x31KsU4-MI2YqPQCrD6A",
  authDomain: "crud-app-js-40389.firebaseapp.com",
  projectId: "crud-app-js-40389",
  storageBucket: "crud-app-js-40389.appspot.com",
  messagingSenderId: "1008919094777",
  appId: "1:1008919094777:web:20d3ce8e68782afc874928",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const db2 = getStorage(app);

