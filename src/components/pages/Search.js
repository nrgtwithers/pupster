import React, { Component } from "react";
import API from "../../utils/API";;

class Search extends Component{
    state={
        result: [],
        search: ""
    }
    searchPup = query =>{
        API.search(query)
        .then(res => this.setState({results:res.data.message}))
        .catch(err=> console.log(err));
    }
      // when the user is typing in the form
  handleInputChange = event => {
    // this name variable is grabbing the "name" property off of the form
    // looking at SearchForm.js name="search"
    const name = event.target.name;
    const value = event.target.value;

    // this is where "search" is being updating 
    this.setState({
      [name]: value
    });
  }
      // when the form is submitted search for OMdb
  handleFormSubmit = event => {
    // prevent form from redirecting
    event.preventDefault();
    // call the searchMovies function using the query
    this.searchPup('hound');
  };
    render (){
    return (
        <div>
            <h1>Search by Breed</h1>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
                <input
                    // updating the state everytime there is a change in the form
                    onChange={this.handleInputChange}
                    value={this.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Type in a dog breed to begin"
                    id="search"
                />
                <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
                    Search
        </button>
            </div>
        </div>
    );
    }
}

export default Search;