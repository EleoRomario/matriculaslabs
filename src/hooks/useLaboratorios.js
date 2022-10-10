import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export const useLaboratorios = (uid) => {
	const [laboratorios, setLaboratorios] = useState([]);

	const [labsUser, setLabsUser] = useState([]);

	const getLaboratorios = async () => {
    const q = query(collection(db, "Laboratorios"));
    await onSnapshot(q, (querySnapshot) => {
      setLaboratorios(querySnapshot.docs.map((doc) => ({id:doc.id, data: doc.data()})));
    });
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

	const [laboratoriosMatriculados, setLaboratoriosMatriculados] = useState(
		[]
	);
	const matricular = (lab) => {
		const existe = laboratoriosMatriculados.find(
			(laboratorio) => laboratorio.curso === lab.curso
		);
		if (existe === undefined) {
			setLaboratoriosMatriculados([...laboratoriosMatriculados, lab]);
		} else {
			const newLabs = laboratoriosMatriculados.filter(
				(laboratorio) => laboratorio.curso !== lab.curso
			);
			setLaboratoriosMatriculados([...newLabs, lab]);
		}
	};

	return { laboratorios, labsUser, matricular, laboratoriosMatriculados };
};
