import React, { Component } from "react"
import GoogleMaps from "simple-react-google-maps"

const GoogleMap = ({ lat, lng, idx }) => {
  return (
    <div className="map-container">
      <GoogleMaps
        apiKey={process.env.GATSBY_GMAPS_API}
        style={{ height: "300px", width: "100%" }}
        zoom={14}
        center={{ lat: lat, lng: lng }}
        markers={{ lat: lat, lng: lng }}
        index={idx}
      />
    </div>
  )
}

export default GoogleMap
