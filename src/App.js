import './App.css';
import logo from './assets/svg/rayo.svg'
// import { AppRouter } from './router/router';

// function App() {
//   return (
//     <div className="app">
//       <AppRouter />
//     </div>

//   );
// }

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="App-logo" alt="imagen logo rayo"></img>
        <h1>jeckefe</h1>

      </header>
      <main className="main">
        <div className="left__div">
          En construcción
        </div>
        <div className="rigth__div"></div>
      </main>
      <footer className="footer__section">
        <a className="footer__mail-link" href="mailto:eduardo@jeckefe.dev">Contacto</a>
      </footer>
    </div>

  );
}

export default App;
