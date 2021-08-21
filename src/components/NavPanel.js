import React, { Component } from 'react';
import "../App.scss"

class NavPanel extends Component {
    state = {
        artist: ""
    }

    render() { 
        return (
            <div className="navContainer">
                {mapArtist(this.props)}
            </div>
        );
    }
}

const mapArtist = (props) => {
    return props.data.map((elem) => {
        return artistCell(elem, props)
    })
}

const artistCell = (artist, props) => {
    let clss = "artistCell"
    if (artist === "pepper0") clss += " success"
    else clss += " unknown"
    return (
        <div className="artist">
            <div className={clss} onClick={() => props.selectArtist(artist)}>
                {artist}
            </div>
            <div style={{display: 'flex', flexDirection: 'column', float: 'right'}}>
                <div className="updateCell">&#128472;</div>
                <a className="linkCell" href={`https://danbooru.donmai.us/posts?page=1&tags=${artist}`}>&#10148;</a>
            </div>
        </div>
    )
}

const updateArtist = () => {

}

export default NavPanel