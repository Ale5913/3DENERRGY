import { Route,Router,Routes} from "react-router-dom"
import Inicio from "./Inicio"
import Desempeno from "./Desempeno"
import Proyecto from "./Proyecto"
import Formulario from "./Formulario"
import Metodologia from "./Metodologia"
import NavBar from "./NavBar"

const Enlaces =() =>{
    return(
        <>
            <Router>
            <NavBar/>
            <Routes>
            <Route path="/" element={<Inicio/>}/ >
            <Route path="/Metodologia" element={<Metodologia/>}/ >
            <Route path="/Proeycto" element={<Proyecto/>}/ >
            <Route path="/Formulario" element={<Formulario/>}/ >
            <Route path="/Desempeno" element={<Desempeno/>}/ >
            </Routes>
            </Router>
        </>
    )
}

export default Enlaces