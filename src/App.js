import './App.css';
import Inicio from './components/Inicio';
import Metodologia from './components/Metodologia';
import Desempeno from './components/Desempeno';
import Proyecto from './components/Proyecto';
import Formulario from './components/Formulario';
import CarouselContainer from './components/CarouselContainer';

//Se crea la visualización de la pagina trayendo todos los componentes. 


function App() {
  return (
    <div>
      <Inicio/>
      <Metodologia/>
      <Desempeno/>
      <Proyecto/>
      <CarouselContainer/>
      <Formulario/>
    </div>
  );
}

export default App;
