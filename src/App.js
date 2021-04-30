import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Header from './components/Header/Header';
import BusinessList from './components/BusinessList/BusinessList';
import GoogleMap from './components/GoogleMap/GoogleMap';
// import { Loader } from '@googlemaps/js-api-loader';
import Places from './util/Places';
//
// let map;
// const loader = new Loader({
//   apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
//   version: "weekly",
//   libraries: ["places"]
// });
//
// // Center map on san francisco by default
// const mapOptions = {
//   center: {
//     lat: 37.7590826,
//     lng: -122.4457663
//   },
//   zoom: 12.5,
//   disableDefaultUI: true
// };
//
//
// // Load Google Map with Promise
// loader.load()
//   .then(() => {
//     const map = new google.maps.Map(document.getElementById("map"), mapOptions);
//   })
//   .catch(e => {
//     console.log('Something went wrong, please check map API call...');
//   });


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchPlaces = this.searchPlaces.bind(this);
    this.sortPlaces = this.sortPlaces.bind(this);
  }



  searchPlaces(term) {
    Places.search(term).then(results => {
      // Set state
      this.setState({ businesses: results });

      // const map = new google.maps.Map(document.getElementById("map"), mapOptions);
      //
      // this.state.businesses.forEach(place => {
      //   // map marker style
      //   const svgMarker = {
      //     path: "M32 2a20 20 0 0 0-20 20c0 18 20 39 20 39s20-21 20-39A20 20 0 0 0 32 2z",
      //     fillColor: "#808080",
      //     fillOpacity: 1,
      //     strokeWeight: 1,
      //     strokeColor: '#eee',
      //     rotation: 0,
      //     scale: .5,
      //     anchor: new google.maps.Point(15, 30),
      //   };
      //   // set map marker for each restaurant
      //   const marker = new google.maps.Marker({
      //     map,
      //     icon: svgMarker,
      //     title: place.name,
      //     position: place.lunchLocation,
      //     animation: google.maps.Animation.DROP
      //   });
      //
      //   const infoWindowContent = document.getElementById('info-window-content');
      //   const infowindow = new google.maps.InfoWindow({
      //     content: infoWindowContent,
      //   });
      //   // Show infoWindow for each restaurant
      //   marker.addListener("click", () => {
      //     infoWindowContent.style.display = 'block';
      //     infowindow.open(map, marker);
      //   });
      // })
    });
  }

  sortPlaces(sortedItems) {
    this.setState({ businesses: sortedItems})
  }



  render() {
    return (
      <div className="App">
        <Header searchPlaces={this.searchPlaces} businesses={this.state.businesses} sortPlaces={this.sortPlaces}/>
        <div className="content-container">
          <BusinessList businesses={this.state.businesses} />
          <GoogleMap businesses={this.state.businesses} />
        </div>
      </div>
    );
  }
}

export default App
