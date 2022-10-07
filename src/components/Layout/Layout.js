import { Box } from "@mui/material"
import bg from "../../assets/bg.svg";

export const Layout = ({children}) => {
  return (
    <Box sx={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: `url(${bg})`, backgroundSize: "cover" }} >
      {children}
    </Box>
  )
}