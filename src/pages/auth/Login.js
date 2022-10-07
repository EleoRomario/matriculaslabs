import { Avatar, Box, Button, Card, CssBaseline, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate("/");
	};

	return (
		<Card sx={{ padding: "30px", width: 400 }}>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar
					sx={{
						width: 80,
						height: "auto",
						m: 1,
						bgcolor: "primary.main",
					}}
					src={require("../../assets/logounsa.png")}
				/>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Typography component="p">
					Matriculas de Laboratorios
				</Typography>
				<Box
					component="form"
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Institucional"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
						onClick={handleLogin}
					>
						Sign In
					</Button>
				</Box>
			</Box>
		</Card>
	);
};
