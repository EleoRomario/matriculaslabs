import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export const useLaboratorios = (uid) => {

  const [laboratorios, setLaboratorios] = useState([]);

  const [labsUser, setLabsUser] = useState({})

	const getLaboratorios = async () => {
		const labsSnapshot = await getDocs(collection(db, "Laboratorios"));
		const labsList = labsSnapshot.docs.map((doc) => doc.data());
		setLaboratorios(labsList);
	};

  const getLaboratoriosUser = async (uid) => {
    const labsSnapshot = await getDoc(doc(db, "alumnos", uid));
	if (labsSnapshot.exists()) {
    setLabsUser(labsSnapshot.data());
	} else {
		console.log("labs doesn't exist");
	}
  };

  useEffect(() => {
    getLaboratorios();
    getLaboratoriosUser(uid);
  }, [uid]);

  const [laboratoriosMatriculados, setLaboratoriosMatriculados] = useState([]);
  console.log("🚀 ~ file: useLaboratorios.js ~ line 32 ~ useLaboratorios ~ laboratoriosMatriculados", laboratoriosMatriculados)

  const matricular = (lab) => {
    const existe = laboratoriosMatriculados.find(
      (laboratorio) => laboratorio.curso === lab.curso
    );
    console.log("🚀 ~ file: useLaboratorios.js ~ line 38 ~ matricular ~ existe", existe)
    if (existe === undefined) {
      setLaboratoriosMatriculados([...laboratoriosMatriculados, lab]);
    } else {
      const newLabs = laboratoriosMatriculados.filter(
        (laboratorio) => laboratorio.curso !== lab.curso
      );
      setLaboratoriosMatriculados([...newLabs, lab]);
    }
  };

	return { laboratorios, labsUser, matricular};
};
