import React from 'react';
import './GoogleMap.css';
import '../Business/Business.css';
import Button from '@material-ui/core/Button';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%',
};

class GoogleMap extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: this.props.businesses,
      activeMarker: marker,
      showingInfoWindow: true
    });

  displayMarkers = () => {
    return this.props.businesses.map((store, index) => {
      return <Marker
      key={index}
      id={index}
      position={{
       lat: store.lunchLocation.lat,
       lng: store.lunchLocation.lng
      }}
      name={store.name}
     onClick={this.onMarkerClick} />
    })
  }

  render() {
    return (
      <div id="map-container">
      <Map
          google={this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={{ lat: 37.7590826, lng: -122.4457663}}
        >
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
        </Map>

        <div className="mobile-switch-container">
          <Button
            id="list-button"
            variant="contained"
            color="primary"
            onClick={() => {
              document.getElementById("map-container").style.display = "none";
              document.getElementById("list-button").style.display = "none";
              document.getElementById("BusinessList").style.display = "block";
              document.getElementById("map-button").style.display = "block";
            }}
          >
            <FormatListBulletedIcon className="mobile-switch-icon"/> List
          </Button>
        </div>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(GoogleMap);
