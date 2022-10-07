import { AppRoutes } from "./routers/AppRouter";
import { Layout } from "./components/Layout/Layout";
import "./styles/App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
		<ThemeProvider  theme={theme}>
			<Layout>
				<AppRoutes />
			</Layout>
		</ThemeProvider>
	);
}

export default App;
