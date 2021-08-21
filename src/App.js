import './App.scss';
import Input from "./components/Input"
import NavPanel from './components/NavPanel';
import { useState, useEffect } from "react"

function App() {
    const [artistFolders, setArtistFolders] = useState([])
    
    const getFolderContents = async (e) => {
        e.preventDefault()
        console.log("function running")
        let response = await fetch("http://localhost:3000")
        let data = await response.json()
        setArtistFolders(data)
    }

    useEffect(() => {
        console.log(artistFolders)
    }, [artistFolders])

    return (
        <div className="container">
            <div className="banner">
                Danbooru
            </div>
            {/* <form>
                <input className="nameInput" type="text" placeholder="Enter artist name"></input>
                <button className="submitButton" onClick={(e) => getFolderContents(e)}>Search</button>
            </form> */}
            <div>
                <NavPanel data={artistFolders}/>
            </div>
        </div>
    );
}

export default App;
