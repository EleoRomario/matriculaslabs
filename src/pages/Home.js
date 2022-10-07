
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { Plus } from "iconoir-react";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate();

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
			}}
		>
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