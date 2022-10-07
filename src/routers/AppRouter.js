import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Home } from "../pages/Home";
import { Matricula } from "../pages/Matricula";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Home />} />
				<Route path="/matricula" element={<Matricula />} />
			</Routes>
		</BrowserRouter>
	);
};
