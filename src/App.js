import './App.css';
import logo from './assets/svg/rayo.svg';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo}></img>
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
