import React, { Component, Fragment } from 'react';

class AddSection extends Component {
    state = {  }
    render() { 
        return (
            <Fragment>
                <form>
                    <input className="addArtistInput" placeholder="Enter an artist name.."/>
                    <button className="addArtistButton">+</button>
                </form>
            </Fragment>
        );
    }
}
 
export default AddSection;