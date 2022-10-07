import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { UserRouter } from "./UserRouter";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<PublicRoute>
					<Login />
				</PublicRoute>} />
				<Route path="/*" element={
					<PrivateRoute >
						<UserRouter />
					</PrivateRoute>
				} />
			</Routes>
		</BrowserRouter>
	);
};
