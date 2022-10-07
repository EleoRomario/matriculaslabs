import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconGoogle } from "../../Icons/IconGoogle";

export const Login = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate("/");
	};

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
				<Button variant="outlined" startIcon={<IconGoogle /> } onClick={handleLogin}>
					Inicia sesion con cuenta institucional
				</Button>
			</Box>
		</Card>
	);
};
