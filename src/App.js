import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://clevelandcc.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Cleveland Community College
        </a>
      </header>
    </div>

  );
}

export default App;
