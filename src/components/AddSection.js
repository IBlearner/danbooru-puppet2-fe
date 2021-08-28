import React, { Component, Fragment } from 'react';

class AddSection extends Component {
    state = {
        name: "",
        validityResponse: "",
        loading: false
    }

    handleInputChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        
        //put app in a loading state upon submission
        this.setState({loading: true})

        console.log("Name submitted: " + this.state.name)

        //checking the artist first locally then using the BE
        let response = await this.props.checkArtistValidity(this.state.name)

        //update the response to feed displayResponse then turn off loading
        this.setState({
            validityResponse: response,
            loading: false
        }, () => {console.log(this.state.validityResponse)})
    }

    displayResponse = () => {
        if (this.state.loading) return <div>Loading</div>
        if (this.state.validityResponse === "existing artist") return <div>That artist exists already!</div>
        if (this.state.validityResponse === "unfound artist") return <div>That is not a found artist sorry</div>
        if (this.state.validityResponse === "ok") return <div>Success! Folder has been created</div>        
    }

    render() { 
        return (
            <Fragment>
                <form>
                    <input name="nameInput" className="addArtistInput" placeholder="Enter an artist name.." onChange={(e) => this.handleInputChange(e)}/>
                    <button className="addArtistButton" onClick={(e) => this.handleSubmit(e)}>+</button>
                </form>
                {this.displayResponse()}
            </Fragment>
        );
    }
}
 
export default AddSection;