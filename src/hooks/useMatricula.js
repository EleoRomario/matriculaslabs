import { doc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { db } from "../firebase/firebase";

export const useMatricula = () => {

  const { user } = useContext(AuthContext);
  const { uid, email, displayName}= user;
  
  const onMatricula = async (laboratorios) => {
    try {
      const data = {
        email,
        displayName,
        laboratorios,
      };
      const docRef = doc(db, "alumnos", uid);
      await updateDoc(docRef, data);      
    } catch (error) {
      console.log(error);
    }
  }


  return {onMatricula}
}