import { IconButton, Tooltip } from "@mui/material";
import { LogOut } from "iconoir-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Logout = () => {

	const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
		logout();
		navigate("/login");
  };

  return (
		<Tooltip
			sx={{
				position: "absolute",
				top: 10,
				left: 10,
			}}
			title="Cerrar sesión"
		>
			<IconButton onClick={onLogout}>
				<LogOut />
			</IconButton>
		</Tooltip>
  );
}