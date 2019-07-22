import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => {
  const locations = data
  console.log(locations)
  return (
    <Layout>
      <SEO title="Locations" />
      <h1>Locations</h1>
      <ul />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query LocationsPage {
    allLocationsJson {
      edges {
        node {
          name
          location
          mallImg {
            relativePath
          }
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
