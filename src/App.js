import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      searchResults: []
    }
  }

  onChange(e) {
    this.setState({searchText: e.target.value});
  }

  getResults() {
    //calltodb(searchText).then(e => {
      //this.setState({searchResults: e.value})
    //});
  }

  render() {
    return (
      <div>
      <SearchBar />
      <SearchResults />
      </div>
    )
  }
}

export default App;
