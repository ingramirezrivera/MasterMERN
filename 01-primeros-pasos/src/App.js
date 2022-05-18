import logo from './logo.svg';
import './App.css';
import { MiComponente } from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponentes } from './EventosComponentes';

function App() {

  const fichaMedica = {
    altura: "187cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Bienvenido al Master en React
        </h1>
        <div className='componentes'>
            {/* MIs COMPONENTEs */}
          <hr />
          <EventosComponentes />
          <hr />
          <TercerComponente   />
          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>

        

      </header>
    </div>
  );
}

export default App;
