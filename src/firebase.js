import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDQANH21sJqaUT7tS3hVaLyj7bWhPYIwU0",
  authDomain: "netflix-clone-829cf.firebaseapp.com",
  projectId: "netflix-clone-829cf",
  storageBucket: "netflix-clone-829cf.firebasestorage.app",
  messagingSenderId: "711740731396",
  appId: "1:711740731396:web:a2b210690ee00a29578551",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};
