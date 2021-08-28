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

    const checkArtistValidity = async (artist) => {
        //check to see if the artist already exists
        if (artistFolders.includes(artist)) return "existing artist"

        //then request BE to check on the actual page to see if it's an artist
        let response = await fetch(`${process.env.REACT_APP_SERVER_PATH}/add/${artist}`)
        let artistExists = await response.json()
        console.log(`The artist exists: ${artistExists}`)

        if (!artistExists) return "unfound artist"

        //if all is good then return an ok status and start creating folders for it
        else if (artistExists) {
            createArtistFiles(artist)
            return "ok"
        }
    }

    const createArtistFiles = (artist) => {
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
