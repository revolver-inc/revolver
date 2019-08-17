import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationInfo from "../components/LocationInfo"
import GoogleMap from "../components/GoogleMap"

const LocationsPage = ({ data }) => {
  const locations = data.allLocationsJson.edges

  const locationList = locations.map((location, idx) => {
    const point = JSON.parse(location.node.location)
    console.log(location.mallImg)
    return (
      <li key={location.node.phoneNumber} className="location-item">
        <LocationInfo location={location.node} />
        <GoogleMap
          lat={point.coordinates[1]}
          lng={point.coordinates[0]}
          idx={idx}
        />
      </li>
    )
  })

  return (
    <Layout>
      <SEO title="Locations" />
      <div className="locations-page">
        <h1>Locations</h1>

        <ul className="location-list">{locationList}</ul>
      </div>
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
