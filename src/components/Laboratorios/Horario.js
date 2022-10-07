import { Dialog, DialogTitle } from "@mui/material"

export const Horario = (props) => {
  const { setOpen, open } = props;

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Set backup account</DialogTitle>
		</Dialog>
  );
}