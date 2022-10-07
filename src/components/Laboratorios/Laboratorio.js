import {
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
import { useEffect, useState } from "react";

export const Laboratorio = ({ lab, labs }) => {
	const { laboratorios } = labs;

	const [isMatriculado, setIsMatriculado] = useState(false)

	const matriculado = () => {
		const existe = laboratorios.find(
			(laboratorio) => laboratorio.curso === lab.curso
		);
		setIsMatriculado(existe === undefined ? false : true);
	};
	useEffect(() => {
		matriculado();
		}, [laboratorios]);

	return (
		<TableRow>
			{!isMatriculado ? (
				<>
					<TableCell>
						<Typography>{lab.curso}</Typography>
					</TableCell>
					<TableCell sx={{ width: 150 }}>
						<FormControl sx={{ m: 1, width: 150 }} size="small">
							<InputLabel id="demo-simple-select-label">
								Grupo
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								// value={age}
								label="Grupo"
								// onChange={handleChange}
							>
								{lab.grupos.map((g, index) => (
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
				</>
			) : (
				<TableCell>
					<Typography>{lab.curso} Matriculado</Typography>
				</TableCell>
			)}
		</TableRow>
	);
};
