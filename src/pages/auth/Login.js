import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IconGoogle } from "../../Icons/IconGoogle";
import { AuthContext } from "../../auth/context/AuthContext";

export const Login = () => {
	const navigate = useNavigate();
const { login } = useContext(AuthContext)

const onLogin = async() => {
	await login();
	navigate("/");
};

	return (
		<Card sx={{ padding: "30px", width: 400 , height: 500 }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 4,
					marginY: 4,
				}}
			>
				<Avatar
					sx={{
						width: 80,
						height: 100,
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
				<Button
					variant="outlined"
					startIcon={<IconGoogle />}
					onClick={onLogin}
				>
					Inicia sesion con cuenta institucional
				</Button>
			</Box>
		</Card>
	);
};
