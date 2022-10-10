import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { db } from "../firebase/firebase";

export const useMatricula = () => {
	const { user } = useContext(AuthContext);
	const { uid, email, displayName,cui } = user;

	const onMatricula = async (laboratorios) => {
		try {
			const data = {
				email,
				displayName,
				cui,
				laboratorios,
			};
			const docRef = doc(db, "alumnos", uid);
			await updateDoc(docRef, data);

			laboratorios.forEach(async (lab) => {
				const docLabRef = doc(db, "Laboratorios", lab.id);
				const docSnap = await getDoc(docLabRef);
				const docData = docSnap.data();
				const { grupos } = docData;
				grupos.forEach((g) => {
					if (g.grupo === lab.grupo) {
						
						const existeAlumno = g.alumnos.find(
							(alumno) => alumno.displayName === displayName
						);
						const alumnos = (existeAlumno === undefined) ? [...g.alumnos, { displayName, email, cui }] : [...g.alumnos];
						const updateGrupo = {
							...g,
							alumnos,
						};
						const updateGrupos = [
							...grupos.filter(
								(grupo) => grupo.grupo !== lab.grupo
							),
							updateGrupo,
						];
						const updateData = {
							...docData,
							grupos: updateGrupos,
						};

							updateDoc(docLabRef, updateData)
								.then((doc) => {
									console.log("doc updated", doc);
								})
								.catch((err) => {
									console.log(err);
								});
					}
				});
			});
		} catch (error) {
			console.log(error);
		}
	};

	return { onMatricula };
};
