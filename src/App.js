import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://lively-puffpuff-725e2b.netlify.app/xyz.txt">CLICK HERE TO DOWNLOAD</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          WORD_DENSITY_FINDER
        </a>
      </header>
    </div>
  );
}

export default App;
