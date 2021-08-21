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
                <div>PicturePanel</div>
                <div className="pictureCollage">
                    {mapPictures(this.props.artist, this.state.pictures)}
                </div>
                <button onClick={() => console.log(this.state.pictures)}>button</button>
            </Fragment>
        );
    }
}

const getPictures = async (artist) => {
    let response = await fetch(`http://localhost:3333/${artist}`)
    let data = await response.json()
    return data
}

const mapPictures = (artist, pictures) => {
    return pictures.map((elem) => {
        return (
            <img src={`file://C:/Users/kienv/Documents/puppeteer/danbooru-puppet2/danbooru-puppet2-be/downloads/muramura_hito/${elem}`}/>
        )
    })
}

export default PicturePanel