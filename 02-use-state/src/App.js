import logo from './logo.svg';
import './App.css';
import { MiprimerEstado } from './components/MiprimerEstado';
import { Exercise } from './components/Exercise';

function App() {

  const dateObj = new Date()
  const year = dateObj.getFullYear()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hooks
        </h1>
        <hr />
        <Exercise year={year}/>
        <hr />
        <MiprimerEstado />
      </header>
    </div>
  );
}

export default App;
