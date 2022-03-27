import './App.css';
import Album from './Album';
import data from './single-sample';
function App() {
  return (
    <div className="App">
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
