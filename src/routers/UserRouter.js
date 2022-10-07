import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Matricula } from "../pages/Matricula"

export const UserRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matricula" element={<Matricula/>} />
    </Routes>
  )
}