import React, { Component } from "react";
import API from "../../utils/API";

class Discover extends Component {
    state = {
        results: {}
    }

    
    searchPuppies = () => {
        API.searchPuppy()
        .then(res => this.setState({results:res.data}))
        
        .catch(err => console.log(err));
    };
    
    componentDidMount() {
        this.searchPuppies();
    }

    render() {
        return (
            <div>
            <h1>Make New Friends</h1>
            <h6>Thumbs up on any pups you'd like to meet</h6>
            <img src={this.results} alt="puppyimage"></img>
            </div>
        );
    }

}

export default Discover;