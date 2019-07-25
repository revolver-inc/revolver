import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MapContainer from "../components/MapContainer"

const LocationsPage = ({ data }) => {
  const locations = data.allLocationsJson.edges

  locations.map(location => console.log(location.node))
  const locationList = locations.map(location => {
    const point = JSON.parse(location.node.location)
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
        <MapContainer lat={point.coordinates[1]} lng={point.coordinates[0]} />
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
