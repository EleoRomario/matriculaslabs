import {
	Avatar,
	Box,
	Button,
	Card,
	Paper,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from "@mui/material";
import { Plus, User } from "iconoir-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { Logout } from "../components/auth/Logout";
import { LaboratorioView } from "../components/Laboratorios/LaboratorioView";
import { useLaboratorios } from "../hooks/useLaboratorios";

export const Home = () => {
	const navigate = useNavigate();

	const { user } = useContext(AuthContext);

	const { displayName } = user;

	const { labsUser } = useLaboratorios(user.uid);

	const { laboratorios } = labsUser;

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
				<Avatar sx={{ bgcolor: "primary.main" }}>
					<User />
				</Avatar>
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
							{laboratorios !== undefined ? (
								laboratorios.map((lab, index) => (
									<LaboratorioView key={index} lab={lab} />
								))
							) : (
								<TableRow>
									<TableCell colSpan={2}>
										<Skeleton />
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Card>
	);
};
