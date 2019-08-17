import React from "react"
import SkyLight from "react-skylight"

import Image from "../components/image"

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
        <button onClick={() => this.animated.show()}>View Mall Map</button>
        <SkyLight
          hideOnOverlayClicked
          ref={ref => (this.animated = ref)}
          transitionDuration={300}
        >
          <Image name={location.mallImg.relativePath}></Image>
        </SkyLight>
      </div>
    )
  }
}

export default LocationInfo
