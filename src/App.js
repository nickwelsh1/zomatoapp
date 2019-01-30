import React, { Component } from 'react';
import CardList from './CardList';
import DetailView from './DetailView';
import SearchBox from './SearchBox';
// import { restaurants } from './data-restaurants2';
import './App.scss';

const emptyrestaurants = {
  "restaurants": [
    {
      "restaurant": {
        "R": {
          "res_id": 0
        },
        "apikey": "0",
        "id": "0",
        "name": "empty",
        "url": "",
        "location": {
          "address": "",
          "locality": "City Centre",
          "city": "Adelaide",
          "city_id": 297,
          "latitude": "34.9295326000",
          "longitude": "138.5951123000",
          "zipcode": "",
          "country_id": 14,
          "locality_verbose": "City Centre"
        },
        "switch_to_order_menu": 0,
        "cuisines": "",
        "average_cost_for_two": 0,
        "price_range": 1,
        "currency": "$",
        "offers": [],
        "opentable_support": 0,
        "is_zomato_book_res": 0,
        "mezzo_provider": "OTHER",
        "is_book_form_web_view": 0,
        "book_form_web_view_url": "",
        "book_again_url": "",
        "thumb": "https://b.zmtcdn.com/data/res_imagery/18235651_RESTAURANT_dc9880f5bfe7ac634e3a9ed6c3e050f6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "user_rating": {
          "aggregate_rating": "1",
          "rating_text": "Poor",
          "rating_color": "5BA829",
          "votes": "0"
        }
      }
    }
  ]
};

class App extends Component {

  static defaultProps = {
    'restaurant': {
       'name':'empty',
        'id':'',
        'thumb':'',
        'location': {
           'name':''
          },
        'cuisines':''
      }
  };


  constructor() {
    super()
    this.state = {
      restaurants: emptyrestaurants.restaurants,
      searchcategory: '',
      searchcuisine: '',
      searchrating: '0',
      searchcost: '4',  //4 is max
      complete: 'true',
      searchfield: '',
      selectedRestaurant: App.defaultProps
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }


  componentDidMount() {

    //      here we fetch from zomato api only if we don't have a local storage cache
    //      to keep API requests low per user

    // read from local storage cache if it exists
    const cache_asJSON = JSON.parse( localStorage.getItem('zomatoDataCache') );
    // if no local storage cache then fetch
    if (cache_asJSON === null ) {
        const requestHeader = {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "user-key": "3d9dc5a9adc4eb89fc1b7ebcef7f5ab7"
          },
        }

        const apiurl = 'https://developers.zomato.com/api/v2.1/';
        const parameters = 'search?count=20&lat=35.0004435&lon=138.3302885&radius=25000&category=1%2C%202%2C%205%2C%2011&sort=real_distance&order=asc';
        // do fetch
        // https://developers.zomato.com/api/v2.1/search?q=italian&count=10&lat=-35.0004435&lon=138.3302885&sort=rating&order=desc
        fetch(apiurl + parameters, requestHeader)
            .then(response=> {
                return response.json();
            })
            .then(restaurants => {
                console.log('fetched restaurants: ', restaurants);
                // after fetch write response to local storage cache
                const cache_asString = JSON.stringify(restaurants);
                localStorage.setItem('zomatoDataCache', cache_asString);
                console.log('wrote cache to localstorage');
                // write data to react state

                this.setState({ restaurants: restaurants.restaurants});
            })
    } else {
        console.log('found localstorage.');
        this.setState( cache_asJSON );
        // console.log('this state ', this.state);
    }
  }


  onHandleButton = (name) => {
    console.log('name: ', name);
  }

  onHandleChange = (event) => {
    console.log([event.target]);
    console.log([event.target.name]);
    console.log('event.target.name: ', event.target.name);
    console.log('event.target.value: ', event.target.value);
    console.log('event.target.checked: ', event.target.checked);

    this.setState({ [event.target.name]: event.target.value })

    if (event.target.name === 'textSearch'){ //textChange event
      this.setState({ searchfield: event.target.value })
    } else
    if (event.target.name === 'cuisine'){ //cuisine event
      if (event.target.checked === true) {
        console.log('good?');
        this.setState({ searchcuisine: event.target.value })
      } else
      if (event.target.checked === false) {
        //might need to add and subtract checked filters from state
        //in case a restaurant does e.g. Italian & Pizza
        this.setState({ searchcuisine: '' })
      }
    } else
    if (event.target.name === 'category'){ //category event
      if(event.target.checked === true) {
        this.setState({ searchcategory: event.target.value })
      } else
      if (event.target.checked === false) {
        console.log('zzz');
        this.setState({ searchcategory: '' })
      }
    } else
    if (event.target.name === 'rating'){ //rating slider event
        this.setState({ searchrating: event.target.value })
    } else
    if (event.target.name === 'cost'){ //cost slider event
        this.setState({ searchcost: event.target.value })
    }
  }


  render() {
    const filteredRestaurants = this.state.restaurants.filter(restaurant =>{
      // NOTE: category is not in restaurant data, we may need to get it with aditional API requests
      //
      // for cost show all less than slider mark? what if 0? or show only those in category and for 0 showAll?
      console.log('state searchcuisine', this.state.searchcuisine.toLowerCase());
      return restaurant.restaurant.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      && restaurant.restaurant.cuisines.toLowerCase().includes(this.state.searchcuisine.toLowerCase())
      && (parseFloat( restaurant.restaurant.user_rating.aggregate_rating ) >= parseFloat( this.state.searchrating ))
      && (parseFloat( restaurant.restaurant.price_range ) <= parseFloat( this.state.searchcost ));
    });
    console.log('filteredRestaurants: ', filteredRestaurants);
    let selectedRestaurant = this.state.selectedRestaurant;

    if(filteredRestaurants.length > 0) {  // temporary method for testing
      selectedRestaurant = filteredRestaurants[0]; //this.get( filteredRestaurants[0], 'restaurant.name' );
    }
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <SearchBox
              handleChange={this.onHandleChange}
              appState='test' //{this.state}
              />
          </form>
        </header>
        <main className="App-main">
          <CardList restaurants={filteredRestaurants} onHandleButton={this.onHandleButton} />
          <DetailView restaurant={selectedRestaurant.restaurant || App.defaultProps} />
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
// finish filters
// modify fetch request to also be able to get categories data from API, join data from multiple category searches
// x store data in local storage to reduce API requests
// finish detail view
// polish (opengraph?, analytics?, accesibility, cross browser test, mobile UX improvements)