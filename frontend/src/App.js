import "./App.css";
import Home from "./components/home/Home";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="appWrapper">
      <div>
        <h1 className="proTitle">Meme gallery</h1>
      </div>
      <div>
        <Photo />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <h1 className="myName">Tanvir Chowdhury</h1>
      </div>
    </div>
  );
}

export default App;
