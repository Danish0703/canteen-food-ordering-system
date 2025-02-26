import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnwXb9s7E-TtxwltP7xC9mMQXumMumUa0",
  authDomain: "canteen-management-e8ad6.firebaseapp.com",
  databaseURL: "https://canteen-management-e8ad6-default-rtdb.firebaseio.com",
  projectId: "canteen-management-e8ad6",
  storageBucket: "canteen-management-e8ad6.appspot.com",
  messagingSenderId: "666802524742",
  appId: "1:666802524742:web:76a5d25c67b970f375f047"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { auth, database };
