import React, { Component } from 'react';
import CardList from './CardList';
import { restaurants } from './restaurants';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: restaurants.restaurants
    }
  }

  render() {
    const filteredRestaurants = this.state.restaurants;
    console.log(filteredRestaurants);
    return (
      <div className="App">
        <header className="App-header">
          test
          <CardList />
        </header>
      </div>
    );
  }
}

export default App;
