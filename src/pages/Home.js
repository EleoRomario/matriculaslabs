
import { Avatar, Box, Button, Card, IconButton, Tooltip, Typography } from "@mui/material";
import { LogOut, Plus } from "iconoir-react";
import { useNavigate } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase/firebase";
import { useEffect } from "react";

export const Home = () => {

  const navigate = useNavigate();
	const [user, error] = useAuthState(auth);
	console.log("🚀 ~ file: Home.js ~ line 13 ~ Home ~ user", user)

	useEffect(() => {
		if (user===null) navigate("/login");
	}, [user, navigate]);

  const handleMatricula = () => {
    navigate("/matricula");
  };

  return (
		<Card
			sx={{
				height: "95vh",
				width: 500,
				p: 2,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: 2,
				position: "relative",
			}}
		>
			<Tooltip
				sx={{
					position: "absolute",
					top: 10,
					right: 10,
				}}
				title="Cerrar sesión"
			>
				<IconButton onClick={logout}>
					<LogOut />
				</IconButton>
			</Tooltip>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ bgcolor: "primary.main" }}>N</Avatar>
				<Typography variant="h5" component="h1" gutterBottom>
					Cursos
				</Typography>
			</Box>
			<Button
				onClick={handleMatricula}
				variant="outlined"
				startIcon={<Plus />}
			>
				Matricularse
			</Button>
		</Card>
  );
}