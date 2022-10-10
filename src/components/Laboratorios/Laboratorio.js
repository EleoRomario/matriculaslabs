import {
	Alert,
	AlertTitle,
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TableCell,
	TableRow,
	Typography,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useState } from "react";

export const Laboratorio = ({ id, lab, matricular, matriculado }) => {
	const { grupos, año, curso } = lab;

	const [grupo, setGrupo] = useState("");

	const onGrupoChange = ({ target }) => {
		const { value } = target;
		setGrupo(value);
		const isGrupo = grupos.find((g) => g.grupo === value);
		const { profesor } = isGrupo;

		const newLab = {
			id,
			año,
			curso,
			grupo: value,
			profesor,
		};
		matricular(newLab);
	};

	return (
		<>
			{!matriculado ? (
				<TableRow>
					<TableCell>
						<Typography>{curso}</Typography>
					</TableCell>
					<TableCell sx={{ width: 150 }}>
						<FormControl sx={{ m: 1, width: 150 }} size="small">
							<InputLabel id="demo-simple-select-label">
								Grupo
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={grupo}
								label="Grupo"
								onChange={onGrupoChange}
							>
								{grupos.map((g, index) => (
									<MenuItem
										key={index}
										value={g.grupo}
										disabled={
											g.capacidad === g.alumnos.length
										}
										sx={{
											display: "flex",
											flexDirection: "row",
											justifyContent: "space-around",
										}}
									>
										<Box component="span">{g.grupo}</Box>
										<Box
											component="span"
											sx={{
												color: grey[400],
											}}
										>
											{g.alumnos.length ===
											g.capacidad ? (
												<Typography color={red[900]}>
													Lleno
												</Typography>
											) : (
												`(${g.alumnos.length} / 
														${g.capacidad})`
											)}
										</Box>
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</TableCell>
				</TableRow>
			) : (
				<TableRow>
					<TableCell colSpan={2}>
						<Alert severity="success">
							<AlertTitle sx={{ fontWeight: "600" }}>
								Matriculado
							</AlertTitle>{" "}
							{curso}
						</Alert>
					</TableCell>
				</TableRow>
			)}
		</>
	);
};
