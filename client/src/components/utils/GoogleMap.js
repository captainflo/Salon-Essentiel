import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import keys from '../../config/keys';

const AnyReactComponent = ({ text }) => (
  <div>
    <i
      style={{ color: 'red', fontSize: '40px' }}
      className="fas fa-map-marker-alt"
    ></i>
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.774221,
      lng: -0.61308,
    },
    zoom: 17,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%', marginBottom: '60px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.googleMap }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={44.774221} lng={-0.61308} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
