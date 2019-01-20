import React, { Component } from 'react';
import CardList from './CardList';
import DetailView from './DetailView';
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

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onCuisineChange = (event) => {
    console.log('on:', event.target.value);
    this.setState({ searchcuisine: event.target.value })
  }

  render() {
    const selectedRestaurant = this.state.restaurants[0];
    // console.log(selectedRestaurant);
    const filteredRestaurants = this.state.restaurants.filter(restaurant =>{
      // console.log('here', restaurant.restaurant.name);
      console.log('searchcuisine', this.state.searchcuisine.toLowerCase());
      return restaurant.restaurant.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
              && restaurant.restaurant.cuisines.toLowerCase().includes(this.state.searchcuisine.toLowerCase());
    });
    // console.log(filteredRestaurants);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox
            searchChange={this.onSearchChange}
            cuisineChange={this.onCuisineChange}
            />
        </header>
        <main className="App-main">
          <CardList restaurants={filteredRestaurants} />
          <DetailView restaurants={selectedRestaurant} />
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
// get more filters working
// create fetch request to get data direct from API
// store data in local storage to reduce API requests