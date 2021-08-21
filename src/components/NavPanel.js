import React, { Component } from 'react';
import "../App.scss"

this.state = {
    link: "ford"
}

const mapArtist = (props) => {
    return props.data.map((elem) => {
        return artistCell(elem)
    })
}

const artistCell = (artist) => {
    let clss = "artist"
    if (artist === "pepper0") clss += " success"
    else clss += " unknown"
    return (
        <div className={clss}>
            <div className="artistCell">
                {artist}
            </div>
            <div style={{display: 'flex', flexDirection: 'column', float: 'right'}}>
                <div className="updateCell"></div>
                <div className="linkCell"></div>
            </div>
        </div>
    )
}

const NavPanel = (props) => {
    return (
        <div className="navContainer">
            {mapArtist(props)}
        </div>
    )
}

export default NavPanel