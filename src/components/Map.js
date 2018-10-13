import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
  const bounds = new maps.LatLngBounds();

  places.forEach((place) => {
    bounds.extend(new maps.LatLng(
      place.geometry.location.lat,
      place.geometry.location.lng,
    ));
  });
  return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

// Fit map to its bounds after the api is loaded
const apiIsLoaded = (map, maps, places) => {
  // Get bounds by our places
  const bounds = getMapBounds(map, maps, places);
  // Fit map to bounds
  map.fitBounds(bounds);
  // Bind the resize listener
  bindResizeListener(map, maps, bounds);
};

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 40.834960,
      lng: -73.942730
    },
    zoom: 13,
    options: {
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      draggable: false,
      styles: [
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "saturation": -100
            },
            {
              "visibility": "on"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ffffe1"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#756047"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "stylers": [
            {
              "color": "#523e26"
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#6a563d"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#69553b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#3f2c12"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#978066"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#978066"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#968066"
            }
          ]
        }
      ]
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      places: [],
    };
  }

  componentDidMount() {
        // <img lat="" lng="" text="fe026c2a-391a-5643-885e-f616c574fc97" src="https://leatherspa.com/assets/img/location.png" width="30">
    // <img lat="" lng="" text="ef2b6625-5ee6-5bc2-aa4a-a739eb800e85" src="https://leatherspa.com/assets/img/location.png" width="30">
    // <img lat="" lng="" text="7c99d9b3-3b18-505e-8ca1-bc663e296977" src="https://leatherspa.com/assets/img/location.png" width="30">
    // <img lat="" lng="" text="15d05892-1d95-5386-bcb7-ce87791fce3e" src="https://leatherspa.com/assets/img/location.png" width="30">
    // <img lat="" lng="" text="e59e7644-cd67-57ef-9275-7e556868ad19" src="https://leatherspa.com/assets/img/location.png" width="30">
    // <img lat="" lng="" text="8e4f8093-a92d-55b0-ba8d-c2e961e35c56" src="https://leatherspa.com/assets/img/location.png" width="30">
    this.setState({
      places: [
        {
          lat: 40.74215,
          lng: -73.95887
        },{
          lat: 40.71383,
          lng: -74.01591
        },{
          lat: 40.70956,
          lng: -74.00859
        },{
          lat: 40.75571,
          lng: -73.97425
        },{
          lat: 40.76355,
          lng: -73.97699
        },{
          lat: 40.81696,
          lng: -73.93605
        }
      ]
    })
  }

  render() {
    const { places } = this.state;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "500px", width: "100%", overflow: 'hidden' }}>
        <GoogleMapReact
          zoom={this.props.zoom}
          center={this.props.center}
          bootstrapURLKeys={{
            key: 'AIzaSyBMUK0OX0I_Hg2_0nkOxyxgXs8JZt5b0as',
            language: 'en',
          }}
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
          options={this.props.options}
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
