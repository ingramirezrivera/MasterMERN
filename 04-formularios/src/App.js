import logo from './logo.svg';
import './App.css';
import { FormulariosComponente } from './components/FormulariosComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormulariosComponente />
      </header>
    </div>
  );
}

export default App;
