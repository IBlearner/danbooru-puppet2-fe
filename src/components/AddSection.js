import React, { Component, Fragment } from 'react';

class AddSection extends Component {
    state = {
        name: "",
        validityResponse: ""
    }

    handleInputChange = (e) => {
        this.setState({
            name: e.target.value
        }, () => {console.log(this.state.name)})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Name submitted: " + this.state.name)
        this.setState({
            validityResponse: this.props.checkArtistValidity(this.state.name) 
        }, () => {console.log(this.state.validityResponse)})
    }

    displayError = () => {
        if (this.state.validityResponse === "existing artist") return <div>That artist exists already!</div>
        if (this.state.validityResponse === "unfound artist") return <div>That is not a found artist sorry</div>
        if (this.state.validityResponse === "ok") return <div>Success! Folder has been created</div>        
        if (!this.state.validityResponse) return <div>Nothing</div>
    }

    render() { 
        return (
            <Fragment>
                <form>
                    <input name="nameInput" className="addArtistInput" placeholder="Enter an artist name.." onChange={(e) => this.handleInputChange(e)}/>
                    <button className="addArtistButton" onClick={(e) => this.handleSubmit(e)}>+</button>
                </form>
                {this.displayError()}
            </Fragment>
        );
    }
}
 
export default AddSection;