import React, { Component } from 'react';
import './App.css';

import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

import ResultList from './ResultList'
import searchMovie from './api'

const searchOptions = [
  {value: 'movie', label: 'Movie'},
  {value: 'tv', label: 'TV'}
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      searchBy: '',
      resultList: []
    }

    this.updateQuery = this.updateQuery.bind(this)
    this.updateMovies = this.updateMovies.bind(this)
    this.updateSelection = this.updateSelection.bind(this)
  }

  updateMovies(resultList) {
    this.setState({resultList})
  }

  updateSelection(e) {
    this.setState({searchBy: e})
  }

  updateQuery(e) {
    let newQuery = e.target.value
    let {query, searchBy} = this.state
    this.setState({query: newQuery})
    if (query !== newQuery && newQuery.length > 0) {
      searchMovie(newQuery, searchBy.value, this.updateMovies)      
    }
  }

  render() {
    let {query, resultList, searchBy} = this.state
    return (
      <div className="app">
        <header className="app-header">
          Search Movie / TV
        </header>
          <div className='search-bar'>
            <Dropdown options={searchOptions} value={searchBy} onChange={this.updateSelection} placeholder="search options"/>
            <div className="input-container">
              <input type="text" value={query} onChange={this.updateQuery} />
            </div>
          </div>
        {resultList.length && query.length > 0 ? <ResultList list={resultList}/> : null}
      </div>
    );
  }
}

export default App;
