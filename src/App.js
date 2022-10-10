import { AppRoutes } from "./routers/AppRouter";
import { Layout } from "./components/Layout/Layout";
import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider } from "./auth/context/AuthProvider";
import { Toaster } from "react-hot-toast";

const theme = createTheme({
	palette: {
			primary: {
				main: "#6A232B",
			},
			secondary: {
				main: "#7f2a32",
			},
	},
});
function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={theme}>
			<Toaster />
				<Layout>
					<AppRoutes />
				</Layout>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
