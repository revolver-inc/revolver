import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

{
  /* <div style="width: 100%"><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=-113.429857,53.4553128&amp;q=Mill%20Woods%20Town%20Center+(Revolver)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/map-my-route/">Draw map route</a></iframe></div> <br /> */
}

function getEmbedURL(node) {
  const locationName = encodeURIComponent(node.name).trim()
  return `https://maps.google.com/maps?q=${locationName}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}
function getCoordinates(node) {
  const point = JSON.parse(node.location)
  return `${(point.coordinates[0], point.coordinates[1])}`
}
const LocationsPage = ({ data }) => {
  const locations = data.allLocationsJson.edges

  console.log(JSON.parse(locations[0].node.location))
  locations.map(location => console.log(location.node))
  const locationList = locations.map(location => {
    return (
      <li key={location.node.phoneNumber}>
        <h2>{location.node.name}</h2>
        <p>
          {location.node.address}
          <br />
          {location.node.city}, {location.node.province} -{" "}
          {location.node.postalCode}
          <br />
          {location.node.phoneNumber}
        </p>
        <p>{location.node.hours}</p>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="300"
              height="300"
              id="gmap_canvas"
              coord={getCoordinates(location.node)}
              src={getEmbedURL(location.node)}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>
        {/* <style>.mapouter{position: relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow: hidden;background:none!important;height:500px;width:600px;}</style></div> */}
      </li>
    )
  })
  return (
    <Layout>
      <SEO title="Locations" />
      <h1>Locations</h1>
      <ul>{locationList}</ul>
    </Layout>
  )
}

export default LocationsPage

export const pageQuery = graphql`
  query LocationsPage {
    allLocationsJson {
      edges {
        node {
          name
          location
          mallImg
          address
          city
          province
          postalCode
          phoneNumber
          hours
        }
      }
    }
  }
`
