import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola Coders!!!</p>
        <a
          className="App-link"
          href="https://plataforma.coderhouse.com/cursos/11335"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vamos a coderhouse!!!
        </a>
      </header>
    </div>
  );
}

export default App;
