import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from './components/robots';
import './App.css';

class App extends Component {
  state = {
    robots: robots,
    searchField: ''
  }

  //event handler 
  searchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  render() {
    //
    const filteredResult = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className="tc">
        <h1>Robo Friends Finder</h1>
        <SearchBox searchChange={this.searchChange} />
        <CardList robots={filteredResult} />  {/* robotProps can be anything. and 'robots' is linked to the const declared in "robots.js" w/ the import */}
      </div>
    );
  }
}

export default App;
