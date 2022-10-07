import { Popover, TableCell, TableRow, Typography } from "@mui/material";
import { ClipboardCheck } from "iconoir-react";
import { useState } from "react";

export const LaboratorioView = ({ lab }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	if (lab.status) {
		return (
			<TableRow>
				<TableCell sx={{ display: "flex", gap: 1 }}>
					<ClipboardCheck />
					<Typography
						aria-owns={open ? "mouse-over-popover" : undefined}
						aria-haspopup="true"
						onMouseEnter={handlePopoverOpen}
						onMouseLeave={handlePopoverClose}
					>
						{lab.curso}
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
						<Typography sx={{ p: 1 }}>
							Profesor: {lab.profesor}
						</Typography>
					</Popover>
				</TableCell>
				<TableCell sx={{ width: 150 }}>
					<Typography>Grupo: {lab.grupo}</Typography>
				</TableCell>
			</TableRow>
		);
	}
};
