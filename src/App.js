import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { restaurants } from './restaurants';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: restaurants.restaurants,
      searchcategory: '',
      searchcuisine: '',
      searchfield: ''
    }
  }

  render() {
    const filteredRestaurants = this.state.restaurants;
    // console.log(filteredRestaurants);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox searchChange={this.onSearchChange} />
        </header>
        <main className="App-main">
          <CardList restaurants={filteredRestaurants} />
        </main>
        <footer className="App-footer">
          <p>by Nick Welsh</p>
        </footer>
      </div>
    );
  }
}

export default App;


//TODO: x display cards with some data
// x style cards
// create fetch request to get data direct from API
// store data in local storage to reduce API requests