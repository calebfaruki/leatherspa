import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

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

  render() {
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
          options={this.props.options}
        >
          {this.props.children}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
