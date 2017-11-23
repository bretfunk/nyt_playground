import React, { Component } from 'react';

class SearchBar extends Component {

  handleSubmit=(event)=>{
    event.preventDefault()
    this.props.getResults()
  }

  render() {
    return (
      <div>
      <h1>Search Bar</h1>
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.props.changeText} />
      <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}

export default SearchBar;
