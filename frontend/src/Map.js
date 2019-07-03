import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
           zoom={14}
           style={{
             width: '75%',
             height: '400px',
             position: 'sticky'
           }}
           initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}>

        <Marker onClick={console.log('123123')}
                position={{ lat: 66.759703, lng: -122.428093 }}
                name={'Current location'} />

        <InfoWindow>
          <div>
            <h1>InfoWindow</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA8svbku4u96K0QBXgEEc7zKKZ-xzQykhg')
})(MapContainer);