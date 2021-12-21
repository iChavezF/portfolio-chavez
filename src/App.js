import './App.css';
import logo from './assets/svg/rayo.svg';
import { useTitle } from './customHooks/useTittle';
import { useDescription } from './customHooks/useDescription';

function App() {
  useTitle('Eduardo Chávez - I am developer');
  useDescription('Portfolio for Eduardo Chávez')

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} alt="rayo logo"></img>
        <h1>jeckefe</h1>
      </header>
      <main  className="main">
        <div  className="left__div"></div>
        <div  className="rigth__div"></div>
      </main>
      <footer className="footer"></footer>
    </div>
    
  );
}

export default App;
