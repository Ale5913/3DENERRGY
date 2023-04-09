import { createBrowserRouter } from "react-router-dom"  //Libreria para generar las routas para acceso a los componentes
import Metodologia from "../components/Metodologia"
import Desempeno from "../components/Desempeno"
import Proyecto from "../components/Proyecto"
import Formulario from "../components/Formulario"
import App from "../App"

//Routas para el navbar

const router = createBrowserRouter([
    {
    path: '/',
    element: <App/>
    },
    {
        path: '/Inicio',
        element: <App/>
        },
    {
        path: '/Metodologia',
        element: <Metodologia/>
    },
    {
        path: '/Desempeno',
        element: <Desempeno/>
    },
    {
        path: '/Proyecto',
        element: <Proyecto/>
    },
    {
        path: '/Contacto',
        element: <Formulario/>
    },

]);

export default router