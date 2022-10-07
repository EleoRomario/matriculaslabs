import { auth, db } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useAuth = () => {

  const [user, setUser] = useState(null)
  
  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(({user}) => {
      setUser(user);
    }).catch((error) => {
      console.log(error);
    });
  }

  return {login, user}
}