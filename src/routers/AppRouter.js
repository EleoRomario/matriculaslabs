import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Home } from "../pages/Home";
import { Matricula } from "../pages/Matricula";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<PublicRoute>
					<Login />
				</PublicRoute>} />
				<Route path="/*" element={
					<PrivateRoute >
						<Home />
					</PrivateRoute>
				} />
			</Routes>
		</BrowserRouter>
	);
};
