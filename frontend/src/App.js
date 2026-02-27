import { useEffect } from "react";
import Home from "./pages/Home";
import "./style.css"

function App() {

    useEffect(() => {
    document.body.style.backgroundImage = "url('/assets/images/character.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="page">
        <div className="main">
            <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
