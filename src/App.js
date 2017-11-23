import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      searchResults: []
    }
    this.onChange = this.onChange.bind(this)
    this.getResults = this.getResults.bind(this)
  }

  onChange(e) {
    this.setState({searchText: e.target.value});
  }


  getResults() {
    let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    let search = this.state.searchText
    axios.get(url, {
      params: {
      'api-key': "6af48d6fe07842689372bc517fd4acee",
      'q': search,
      'sort': "newest"
      }
    })
      .then(function (response) {
        console.log(response);
        this.setState({searchResults: response.data.docs})
      })
      .catch(function (error) {
        console.log(error);
      });
    //calltodb(searchText).then(e => {
      //this.setState({searchResults: e.value})
    //});
  }

  render() {
    return (
      <div>
      <SearchBar getResults={this.getResults} changeText={this.onChange} />
      <SearchResults results={this.state.searchResults}/>
      </div>
    )
  }
}

export default App;
