import { initializeApp }
from "firebase/app";

import {

  getAuth,

  signInAnonymously

} from "firebase/auth";

import {

  getFirestore

} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCXXYtrF628LOYproGae_1Bua3ZYnPSfDY",
  authDomain: "ikigai-3b25b.firebaseapp.com",
  projectId: "ikigai-3b25b",
  storageBucket: "ikigai-3b25b.firebasestorage.app",
  messagingSenderId: "115819452035",
  appId: "1:115819452035:web:cdad8d8c917b959516adb6",
  measurementId: "G-F4T198M1Y6"
};



const app =
  initializeApp(firebaseConfig);



export const auth =
  getAuth(app);

export const db =
  getFirestore(app);



export const anonymousLogin =
  async () => {

    try {

      await signInAnonymously(auth);

    } catch (error) {

      console.error(error);
    }
};