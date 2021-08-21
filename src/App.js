import './App.scss';
import Input from "./components/Input"
import NavPanel from './components/NavPanel';
import { useState, useEffect } from "react"
import PicturePanel from './components/PicturePanel';

function App() {
    const [artist, setArtist] = useState("")
    const [artistFolders, setArtistFolders] = useState([])
    
    const getFolderContents = async (e) => {
        // e.preventDefault()
        console.log("function running")
        let response = await fetch("http://localhost:3333")
        let data = await response.json()
        setArtistFolders(data)
    }

    const selectArtist = (artist) => {
        setArtist(artist)
    }

    useEffect(() => {
        getFolderContents()
    }, [])

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
            {
                artist === "" ?
                <div><NavPanel data={artistFolders} selectArtist={selectArtist}/></div> :
                <div><PicturePanel artist={artist}/></div>
            }
        </div>
    );
}

export default App;
