import logo from './logo.svg';
import './App.css';
// import { MiPrimerEstado } from './components/MiPrimerEstado';
import { Ejercicio } from './components/Ejercicio';
import { EjercicioProfesor } from './components/EjercicioProfesor';


function App() {
  const añoActual = 2022;
  const fecha = new Date()
  const year = fecha.getFullYear()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> El estado en React - Hook use State</h1>
        <Ejercicio añoActual={añoActual}/>
        <hr />
        <EjercicioProfesor year={year}/>
        {/* <MiPrimerEstado /> */}
      </header>
      
    </div>
  );
}

export default App;
