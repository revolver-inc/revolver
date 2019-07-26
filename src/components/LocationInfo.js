import React from "react"

const LocationInfo = ({ location }) => {
  return (
    <div className="location-info">
      <h2>{location.name}</h2>
      <p>
        {location.address}
        <br />
        {location.city}, {location.province} - {location.postalCode}
        <br />
        {location.phoneNumber}
      </p>
      <p>{location.hours}</p>
    </div>
  )
}

export default LocationInfo
