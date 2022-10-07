import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAuth } from "../../hooks/useAuth";
import { IconGoogle } from "../../Icons/IconGoogle";
import { auth } from "../../firebase/firebase";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();

	

	const { login } = useAuth();

	return (
		<Card sx={{ padding: "30px", width: 400 }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 4,
					marginY: 4
				}}
			>
				<Avatar
					sx={{
						width: 80,
						height: "auto",
						bgcolor: "primary.main",
					}}
					src={require("../../assets/logounsa.png")}
				/>
				<Typography component="h1" variant="h5">
					Inicia Sesion
				</Typography>
				<Typography component="p">
					Matriculas de Laboratorios
				</Typography>
				<Button variant="outlined" startIcon={<IconGoogle /> } onClick={login}>
					Inicia sesion con cuenta institucional
				</Button>
			</Box>
		</Card>
	);
};
