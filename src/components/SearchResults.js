import React, { Component } from 'react';

class SearchResults extends Component {

  render() {
  let results = this.props.results.map((article) =>
    <tr><td>article.print_headline</td></tr>
  )

    return (
      <div>
      <h1>Search Results</h1>
      <table>
      <tbody>
      {results}
      </tbody>
      </table>
      </div>
    )
  }
}

export default SearchResults;
