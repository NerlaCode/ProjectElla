import logo from './logo.svg';
import './App.css';
import Album from './Album';
import data from './single-sample';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Hello world</h1>
      <Album
      albumName ={data.album.name}
      songName={data.name}
      url={data.album.images[0].url}
      artisName={data.artists[0].name}
      />

  

    </div>
  );
}

export default App;
