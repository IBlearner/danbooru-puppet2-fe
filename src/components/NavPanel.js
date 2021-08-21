import React, { Component } from 'react';


const mapArtist = (props) => {
    return props.data.map((elem) => {
        return (
            <div>{elem}</div>
        )
    })
}

const NavPanel = (props) => {
    return (
        <div>
            {mapArtist(props)}
        </div>
    )
}

export default NavPanel