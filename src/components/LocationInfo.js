import React from "react"
import SkyLight from "react-skylight"

import Image from "../components/image"

const interiorMapStyles = {
  // backgroundColor: "rgba(0, 0, 0, 0.2)",
  width: "80%",
  minHeight: "400px",
  padding: ".25rem",
  marginTop: "-150px",
  marginLeft: "-40%",
  overflow: "hidden",
}
class LocationInfo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const location = this.props.location
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
        <button className="btn-location" onClick={() => this.animated.show()}>
          View Mall Map
        </button>
        <SkyLight
          hideOnOverlayClicked
          dialogStyles={interiorMapStyles}
          ref={ref => (this.animated = ref)}
          transitionDuration={300}
        >
          <div className="skylight-img-container">
            <Image name={location.mallImg} objectFit="contain"></Image>
          </div>
        </SkyLight>
      </div>
    )
  }
}

export default LocationInfo
