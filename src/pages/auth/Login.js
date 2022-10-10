import { Avatar, Box, Button, Card, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Login = () => {
const { login, userExist } = useContext(AuthContext)

const { navigate } = useNavigation()

const [cui, setCui] = useState("")

const changeCui = (e) => {
	setCui(e.target.value)
}

const onLogin = async () => {
	await login(cui)
	userExist && navigate("/")
};

	return (
		<Card sx={{ padding: "30px", width: 400 , height: 500 }}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 4,
					marginY: 4,
				}}
			>
				<Avatar
					sx={{
						width: 80,
						height: 100,
						bgcolor: "primary.main",
					}}
					src={require("../../assets/logounsa.png")}
				/>
				<Typography component="h1" variant="h5">
					Inicia Sesion
				</Typography>
				<Typography component="p">
					Matriculas de Laboratorios
				</Typography>
				<TextField id="outlined-basic" label="CUI" variant="outlined" value ={cui} onChange={changeCui} required />
				<Button
					onClick={onLogin}
					variant="contained"
				>
					Ingresar
					</Button>
				{/* <Button
					variant="outlined"
					startIcon={<IconGoogle />}
					onClick={onLogin}
				>
					Inicia sesion con cuenta institucional
				</Button> */}
			</Box>
		</Card>
	);
};
