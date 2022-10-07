import {
	Button,
	Card,
	Table,
	TableBody,
	TableContainer,
	Paper,
	Tooltip,
	IconButton,
} from "@mui/material";
import { ClockOutline, NavArrowLeft, PasteClipboard } from "iconoir-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { Horario } from "../components/Laboratorios/Horario";
import { Laboratorio } from "../components/Laboratorios/Laboratorio";
import { useLaboratorios } from "../hooks/useLaboratorios";

export const Matricula = () => {
	const navigate = useNavigate();

	const { user } = useContext(AuthContext);

	const backHome = () => {
		navigate("/");
	};

	const { laboratorios, labsUser } = useLaboratorios(user.uid);


	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
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
			<Button
				size="small"
				sx={{
					position: "absolute",
					top: 10,
					left: 10,
				}}
				startIcon={<NavArrowLeft />}
				onClick={backHome}
			>
				Atras
			</Button>
			<Tooltip
				sx={{
					position: "absolute",
					top: 10,
					right: 10,
				}}
				title="Horarios"
			>
				<IconButton onClick={handleClickOpen}>
					<ClockOutline />
				</IconButton>
			</Tooltip>
			<h1>Matricula</h1>
			<TableContainer
				component={Paper}
				sx={{ height: "400px", overflowY: "normal" }}
			>
				<Table sx={{ minWidth: "100%" }} aria-label="simple table">
					<TableBody>
						{laboratorios.map((lab, index) => (
							<Laboratorio
								key={index}
								lab={lab}
								labs={labsUser}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Button
				variant="contained"
				endIcon={<PasteClipboard height={20} width={20} />}
			>
				Matricular
			</Button>
			<Horario open={open} setOpen={setOpen} />
		</Card>
	);
};
