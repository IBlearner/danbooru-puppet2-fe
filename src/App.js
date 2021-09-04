import './App.scss';
import { useState, useEffect } from "react"
import PicturePanel from './components/PicturePanel';
import ArtistPanel from './components/ArtistPanel';
import AddSection from './components/AddSection';

function App() {
    const [artist, setArtist] = useState("")
    const [artistFolders, setArtistFolders] = useState([])
    const [currentPage, setCurrentPage] = useState("home")

    useEffect(() => {
        getFolderContents()
    }, [])

    useEffect(() => {
        console.log(artistFolders)
    }, [artistFolders])

    const getFolderContents = async () => {
        console.log("Fetching root dir for folders")
        let response = await fetch(`${process.env.REACT_APP_SERVER_PATH}`)
        let data = await response.json()
        setArtistFolders(data)
    }

    const selectArtist = (artist) => {
        setArtist(artist)
        goToPage("gallary")
    }

    const goToPage = (desiredPage) => {
        setCurrentPage(desiredPage)
    }

    const pageNavigator = () => {
        let content
        switch (currentPage) {
            case "gallary":
                content = <div><PicturePanel artist={artist}/></div>
                break;

            case "home":
                content = <div><ArtistPanel data={artistFolders} selectArtist={selectArtist}/></div>
                break;
    
            default:
                content = <div><ArtistPanel data={artistFolders} selectArtist={selectArtist}/></div>
        }
        return content
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

    const createArtistFiles = async (artist) => {
        await fetch(`${process.env.REACT_APP_SERVER_PATH}/createFiles`, {
            method: 'POST',
            mode: "cors",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({"artist": artist})
        })
        getFolderContents()
    }

    return (
        <div className="container">
            <div className="banner">
                <div className="homeButton">Placeholder</div>
                <div className="title"> Danbooru</div>
                <div className="homeButton" onClick={() => goToPage("home")}>Home</div>
            </div>
            {
                currentPage === "home" ? <AddSection checkArtistValidity={checkArtistValidity}/> : null
            }
            { pageNavigator() }
        </div>
    );
}

export default App;
