import {
	Alert,
	Dialog,
	DialogContent,
	DialogTitle,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from "@mui/material";
import { grey } from "@mui/material/colors";

export const Horario = (props) => {
	const { setOpen, open, horarios } = props;

	const handleClose = (value) => {
		setOpen(false);
	};

	const daysWeek = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

	const horas = [
		"7:00-7:50",
		"7:50-8:40",
		"8:50-9:40",
		"9:40-10:30",
		"10:40-11:30",
		"11:30-12:20",
		"12:30-13:10",
		"13:10-14:00",
		"14:00-14:50",
		"14:50-15:40",
		"15:50-16:40",
		"16:40-17:30",
		"17:40-18:30",
		"18:30-19:20",
		"19:20-20:10",
	];

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Horario</DialogTitle>
			<DialogContent>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								{daysWeek.map((day, i) => (
									<TableCell key={i}>{day}</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{horas.map((hora, i) => (
								<TableRow key={i}>
									{daysWeek.map((day, i) => (
										<TableCell key={i} sx={{maxWidth: 100}} >
											<Typography
												component="span"
												sx={{
													fontSize: 10,
													color: grey[400],
												}}
											>
												{horarios.map(({ dia, inicio, fin, curso },index) => {
													if (
														(dia.toString() ===
														day.toLowerCase()) && ((hora.toString().substring(0, hora.toString().indexOf("-")) === inicio.toString()) || (hora.toString().substring(hora.toString().indexOf("-") + 1, hora.toString().length) === fin.toString()))
													) {
														return (
                              <Alert key={index} icon={false} severity="success" sx={{fontSize: 10, padding:1}} >{curso}</Alert>
														);
													} else {
														return <></>;
													}
												})}
												{hora}
											</Typography>
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</DialogContent>
		</Dialog>
	);
};
