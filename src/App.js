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
      complete: 'true',
      searchfield: ''
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  //TODO: compose fetch request header
  //      fetch from zomato api
  //      keep API requests low per user
//   componentDidMount() {
//     // check local storage cache
//     // read from local storage cache
//     const cache_asJSON = JSON.parse( localStorage.getItem('zomatoDataCache') );
//     // console.log('cache: ', cache_asJSON);
//     // if no local storage cache then fetch
//     if (cache_asJSON === null ) {
//         // do fetch

//         // https://developers.zomato.com/api/v2.1/search?q=italian&count=10&lat=-35.0004435&lon=138.3302885&sort=rating&order=desc
//         // https://jsonplaceholder.typicode.com/users
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response=> {
//                 return response.json();
//             })
//             .then(restaurants => {
//                 this.setState({ restaurants: restaurants});
//                 // after fetch write response to local storage cache
//                 const cache_asString = JSON.stringify(restaurants);
//                 localStorage.setItem('zomatoDataCache', cache_asString);
//                 console.log('wrote cache to localstorage');
//             })
//     } else {
//         console.log('found localstorage.');
//         this.setState({ cache_asJSON });
//     }
// }

  onHandleChange = (event) => {
    console.log([event.target]);
    console.log([event.target.name]);
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(event.target.checked);
    if (event.target.checked){
        event.target.removeAttribute('checked');
        event.target.parentNode.style.textDecoration = "";
    } else {
        event.target.setAttribute('checked', true);
        // event.target.parentNode.style.textDecoration = "line-through";
    }
    this.setState({ [event.target.name]: event.target.value })
    // textChange to live update
    if (event.target.name === 'textSearch'){
      this.setState({ searchfield: event.target.value })
    } else // checkboxes to live update
    if (event.target.name === 'cuisine'){
      console.log(event.target.checked);
      if (event.target.checked === true) {
        this.setState({ searchcuisine: event.target.value })
      } else
      if (event.target.checked === false) {
        //probably need to add and subtract checked filters from state
        //in case a restaurant does e.g. Italian & Pizza
        this.setState({ searchcuisine: '' })
      }
    } else
    if (event.target.name === 'category' && event.target.checked === true){
      this.setState({ searchcategory: event.target.value })
    }
  }

  // onCuisineChange = (event) => {
  //   console.log('on:', event.target.value);
  //   this.setState({ searchcuisine: event.target.value })
  // }

  render() {
    const filteredRestaurants = this.state.restaurants.filter(restaurant =>{
      // console.log('here', restaurant.restaurant.name);
      // console.log('searchcuisine', this.state.searchcuisine.toLowerCase());
      return restaurant.restaurant.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      && restaurant.restaurant.cuisines.toLowerCase().includes(this.state.searchcuisine.toLowerCase());
    });
    // console.log(filteredRestaurants);
    let selectedRestaurant = {restaurant:{"name":"none found", "id":"0"}};
    if(filteredRestaurants.length > 0) {
      selectedRestaurant = filteredRestaurants[0];
    }
    // console.log(selectedRestaurant);
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <SearchBox
              handleChange={this.onHandleChange}
              />
          </form>
        </header>
        <main className="App-main">
          <CardList restaurants={filteredRestaurants} />
          <DetailView restaurant={selectedRestaurant.restaurant} />
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
// detail view