import React, { Component } from 'react';
import CardList from './CardList';
import { restaurants } from './restaurants';
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: restaurants.restaurants
    }
  }

  render() {
    const filteredRestaurants = this.state.restaurants;
    // console.log(filteredRestaurants);
    return (
      <div className="App tc">
        <header className="App-header">
          <h1>my restaurants app</h1>
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


//TODO: display cards with some data
// style cards
// create fetch request to get data direct from API
// store data in local storage to reduce API requests