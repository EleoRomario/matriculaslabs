
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { Plus } from "iconoir-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { Logout } from "../components/auth/Logout";

export const Home = () => {

  const navigate = useNavigate();

	const { user } = useContext(AuthContext);

	const { displayName, photoURL } = user;

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
				paddingTop: 10,
				alignItems: "center",
				gap: 2,
				position: "relative",
			}}
		>
			<Logout />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar src={photoURL} />
				<Typography variant="h5" component="h1" gutterBottom>
					{displayName}
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