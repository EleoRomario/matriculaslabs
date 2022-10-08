
import { Avatar, Box, Button, Card, Paper, Table, TableBody, TableContainer, Typography } from "@mui/material";
import userEvent from "@testing-library/user-event";
import { Plus } from "iconoir-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { Logout } from "../components/auth/Logout";
import { LaboratorioView } from "../components/Laboratorios/LaboratorioView";
import { useMatricula } from "../hooks/useMatricula";

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
				<Avatar src={`url("${photoURL}")`} />
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
			<Box>
				<Typography variant="h6" component="h2" gutterBottom>
					Laboratorios matriculados
				</Typography>
				<TableContainer
					component={Paper}
					sx={{ height: "400px", overflowY: "normal" }}
				>
					<Table sx={{ minWidth: 400 }} aria-label="simple table">
						<TableBody>
							{/* {matriculas && matriculas.map((lab, index) => (
								<LaboratorioView key={index} lab={lab} />
							))} */}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Card>
  );
}