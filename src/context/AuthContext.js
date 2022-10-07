import { createContext } from 'react';
import { auth, db } from "../firebase/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(({user}) => {
      setUser(user);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <AuthContext.Provider value={{login, user}}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => {
  return AuthContext(AuthContext);
}
