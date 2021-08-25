import './App.scss';
import { useState, useEffect } from "react"
import NavPanel from './components/NavPanel';
import PicturePanel from './components/PicturePanel';
import ArtistPanel from './components/ArtistPanel';
import AddSection from './components/AddSection';

function App() {
    const [artist, setArtist] = useState("")
    const [artistFolders, setArtistFolders] = useState([])
    
    const getFolderContents = async (e) => {
        // e.preventDefault()
        console.log("function running")
        let response = await fetch(`${process.env.REACT_APP_SERVER_PATH}`)
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
            <NavPanel />
            <AddSection />
            {
                artist === "" ?
                <div><ArtistPanel data={artistFolders} selectArtist={selectArtist}/></div> :
                <div><PicturePanel artist={artist}/></div>
            }
        </div>
    );
}

export default App;
