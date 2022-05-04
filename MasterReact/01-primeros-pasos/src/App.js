
import './App.css';
import MiComponente from './components/MiComponente';
import { SegundoComponente } from './components/SegundoComponente';
import { TercerComponente } from './components/TercerComponente';

function App() {

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
        <MiComponente />
        <hr/>
        <SegundoComponente />
        <hr/>
        <TercerComponente 
          nombre='Daniel' 
          apellidos='Ramirez'
          fichaMedica={fichaMedica}
        />
        
      </header>
      
    </div>
  );
}

export default App;
