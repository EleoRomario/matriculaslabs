import { Box } from "@mui/material"


export const Layout = ({children}) => {
  return (
    <Box sx={{height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} >
      {children}
    </Box>
  )
}