import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
// import Map from "./Map"

export class MapContainer extends Component {
  render() {
    const style = {
      width: "400px",
      height: "400px",
    }
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    console.log(this.props.lng)
    return (
      <div style={style}>
        <Map
          google={this.props.google}
          style={style}
          center={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
          zoom={15}
          onClick={this.onMapClicked}
        ></Map>
        {/* <Map google={this.props.google} zoom={14}>
          {/* <Marker onClick={this.onMarkerClick} name={"current location"} /> */}
        {/* <InfoWindow onClose={this.onInfoWindowClose}> */}
        {/* </InfoWindow> */}
        {/* </Map> */}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer)
