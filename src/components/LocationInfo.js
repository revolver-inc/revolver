import React from "react"
import SkyLight from "react-skylight"

import Image from "../components/image"

const interiorMapStyles = {
  width: "90%",
  minHeight: "400px",
  padding: ".25rem",
  marginTop: "-35%",
  marginLeft: "-45%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}

function replaceLineBreaks(str) {
  return str.replace(/(?:\r\n|\r|\n)/g, "<br>")
}

class LocationInfo extends React.Component {
  render() {
    const location = this.props.location
    console.log(location.hours)
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
        <p
          dangerouslySetInnerHTML={{
            __html: replaceLineBreaks(location.hours),
          }}
        />
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
            <Image name={location.mallImg} objectFit="cover"></Image>
          </div>
        </SkyLight>
      </div>
    )
  }
}

export default LocationInfo
