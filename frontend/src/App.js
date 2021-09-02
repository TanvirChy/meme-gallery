import "./App.css";
import Home from "./components/home/Home";
import User from "./components/User";

function App() {
  return (
    <div className="appWrapper">
      <div>
        <h1 className="proTitle">Meme gallery</h1>
      </div>
      <div>
        <User />
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
