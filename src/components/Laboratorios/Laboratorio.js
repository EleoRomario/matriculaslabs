import { Box, FormControl, InputLabel, MenuItem, Popover, Select, TableCell, TableRow, Typography } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { useState } from "react";

export const Laboratorio = ({lab}) => {
  
	const [anchorEl, setAnchorEl] = useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);


  return (
		<TableRow>
			<TableCell>
				<Typography
					aria-owns={open ? "mouse-over-popover" : undefined}
					aria-haspopup="true"
					onMouseEnter={handlePopoverOpen}
					onMouseLeave={handlePopoverClose}
				>
					{lab.name}
				</Typography>
				<Popover
					id="mouse-over-popover"
					sx={{
						pointerEvents: "none",
					}}
					open={open}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
					onClose={handlePopoverClose}
					disableRestoreFocus
				>
					<Typography sx={{ p: 1 }}>Profesor: {lab.profesor}</Typography>
				</Popover>
			</TableCell>
			<TableCell sx={{ width: 150 }}>
				<FormControl sx={{ m: 1, width: 150 }} size="small">
					<InputLabel id="demo-simple-select-label">Grupo</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						// value={age}
						label="Grupo"
						// onChange={handleChange}
					>
						{lab.grupos.map((grupo) => (
							<MenuItem
								key={grupo.id}
								value={grupo.name}
								disabled={
									grupo.capacidad === grupo.alumnos.length
								}
								sx={{
									display: "flex",
									flexDirection: "row",
									justifyContent: "space-around",
								}}
							>
								<Box component="span"> {grupo.name}</Box>
								<Box
									component="span"
									sx={{
										color: grey[400],
									}}
								>
									{grupo.alumnos.length ===
									grupo.capacidad ? (
										<Typography color={red[900]}>
											Lleno
										</Typography>
									) : (
										`(${grupo.alumnos.length} / 
														${grupo.capacidad})`
									)}
								</Box>
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</TableCell>
		</TableRow>
  );
}