import {
	collection,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { useReducer } from "react";
import { signInWithGoogle, logOut, db } from "../../firebase/firebase";
import { types } from "../../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
	logged: false,
};

const init = () => {
	const user = JSON.parse(localStorage.getItem("user"));

	return {
		logged: !!user,
		user: user,
	};
};

export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, initialState, init);

	const login = async () => {
		const result = await signInWithGoogle();
		const q = query(
			collection(db, "alumnos"),
			where("email", "==", result.email)
		);
		const docs = await getDocs(q);
		docs.forEach((doc) => {
			const user = {
				...result,
				uid: doc.id,
			};
			if (doc.exists()) {
				dispatch({
					type: types.login,
					payload: result,
				});
				localStorage.setItem("user", JSON.stringify(user));
			}
		});
	};

	const logout = () => {
		logOut();
		localStorage.removeItem("user");
		dispatch({
			type: types.logout,
		});
	};

	return (
		<AuthContext.Provider value={{ ...authState, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
