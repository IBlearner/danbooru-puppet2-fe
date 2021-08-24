import React, { Component, Fragment } from 'react';

class PicturePanel extends Component {
    state = {
        pictures: []
    }

    async componentDidMount() {
        console.log(this.props.artist)
        let data = await getPictures(this.props.artist)
        this.setState({pictures: data}, () => console.log(this.state.pictures))
    }

    render() { 
        return (
            <Fragment>
                <div className="pictureCollage">
                    {mapPictures(this.props.artist, this.state.pictures)}
                </div>
                <button onClick={() => console.log(this.state.pictures)}>button</button>
            </Fragment>
        );
    }
}

const getPictures = async (artist) => {
    let response = await fetch(`${process.env.REACT_APP_SERVER_PATH}/${artist}`)
    let data = await response.json()
    return data
}

const mapPictures = (artist, pictures) => {
    return pictures.map((elem) => {
        return (
            //cannot display a locally saved image for security purposes of not letting others look at data stored on host computers hard drive data
            <div className="singleImage">
                <img src={`${process.env.REACT_APP_SERVER_PATH}/${artist}/${elem}`}/>
            </div>
        )
    })
}

export default PicturePanel