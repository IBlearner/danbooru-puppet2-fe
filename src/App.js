import './App.scss';
import Input from "./components/Input"

function App() {
  return (
    <div className="container">
        <div className="banner">
            Danbooru
        </div>
        <form>
            <input className="nameInput" type="text" placeholder="Enter artist name"></input>
            <button className="submitButton" onClick={() => console.log("hi")}>Search</button>
        </form>
    </div>
  );
}

export default App;
