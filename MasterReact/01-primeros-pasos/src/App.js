
import './App.css';
import { EventosComponente } from './components/EventosComponente';
import MiComponente from './components/MiComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';

function App() {
  const nombre = 'Daniel';
  const apellidos = 'Ramirez Rivera'
  const fichaMedica = {
    eps: 'sura',
    altura: '187',
    peso: '87',
    rh: 'A+'
    
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Bienvenidos al Master en React
        </h1>
        <hr/>
        <EventosComponente />
        <MiComponente />
        <hr/>
        <SegundoComponente />
        <hr/>
        <TercerComponente 
          // nombre={nombre}
          // apellidos={apellidos}
          fichaMedica={fichaMedica}
        />

        
      </header>
      
    </div>
  );
}

export default App;
