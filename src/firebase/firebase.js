import { initializeApp } from "firebase/app";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDBZbLeBkGgsslyxM423-26kkTaSWU6WhI",
	authDomain: "matriculaslaboratorios.firebaseapp.com",
	projectId: "matriculaslaboratorios",
	storageBucket: "matriculaslaboratorios.appspot.com",
	messagingSenderId: "899016065366",
	appId: "1:899016065366:web:8be18cf76b89c810d016f7",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const { displayName, email, photoURL, uid} = res.user;
		return { displayName, email, photoURL, uid };
		// const credentials = GoogleAuthProvider.credentialFromResult(res);
		// const q = query(
		// 	collection(db, "alumnos"),
		// 	where("email", "==", user.email)
		// );
		// const docs = await getDocs(q);
		// const userDB = docs.forEach((doc) =>{
		// 	return doc.data();
    // });          
	} catch (err) {
		return err.message;
	}
};

const logInWithEmailAndPassword = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const registerWithEmailAndPassword = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, "users"), {
			uid: user.uid,
			name,
			authProvider: "local",
			email,
		});
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert("Password reset link sent!");
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const logOut = () => {
	signOut(auth);
};
export {
	auth,
	db,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	logOut,
};
