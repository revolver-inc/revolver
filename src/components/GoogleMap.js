import React, { Component } from "react"
import GoogleMaps from "simple-react-google-maps"

const GoogleMap = ({ lat, lng, idx }) => {
  return (
    <div className="map-container">
      <GoogleMaps
        apiKey={process.env.GOOGLE_MAPS_API_KEY}
        style={{ height: "300px", width: "100%" }}
        zoom={14}
        center={{ lat: lat, lng: lng }}
        markers={{ lat: lat, lng: lng }}
        idx={idx}
      />
    </div>
  )
}

export default GoogleMap
