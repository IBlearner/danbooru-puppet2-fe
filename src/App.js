import './App.scss';
import { useState, useEffect } from "react"
import PicturePanel from './components/PicturePanel';
import ArtistPanel from './components/ArtistPanel';
import AddSection from './components/AddSection';

function App() {
    const [artist, setArtist] = useState("")
    const [artistFolders, setArtistFolders] = useState([])

    useEffect(() => {
        getFolderContents()
    }, [])

    useEffect(() => {
        console.log(artistFolders)
    }, [artistFolders])

    const getFolderContents = async (e) => {
        // e.preventDefault()
        console.log("Loading function")
        let response = await fetch(`${process.env.REACT_APP_SERVER_PATH}`)
        let data = await response.json()
        setArtistFolders(data)
    }

    const selectArtist = (artist) => {
        setArtist(artist)
    }

    const checkArtistValidity = (name) => {
        if (artistFolders.includes(name)) return "existing artist"
        else return ""

        //if all passes down to here return an "ok"
        createArtistFiles(name)
        return "ok"
    }

    const createArtistFiles = (name) => {

    }

    return (
        <div className="container">
            <div className="banner">
                Danbooru
            </div>
            <AddSection checkArtistValidity={checkArtistValidity}/>
            {
                artist === "" ?
                <div><ArtistPanel data={artistFolders} selectArtist={selectArtist}/></div> :
                <div><PicturePanel artist={artist}/></div>
            }
        </div>
    );
}

export default App;
