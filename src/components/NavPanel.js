import React, { Component, Fragment } from 'react';

class NavPanel extends Component {
    state = {
        searchTerm: ""
    }
    render() { 
        return (
            <Fragment>
                <input className="nameInput" type="text" placeholder="Search for an artist.."></input>
            </Fragment>
        );
    }
}
 
export default NavPanel;