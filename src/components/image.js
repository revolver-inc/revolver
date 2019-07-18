import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Image = ({ name }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              # fluid(maxWidth: 1500, toFormat: WEBP) {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      if (name && name.includes("/")) {
        const path = name.split("/")
        name = path[path.length - 1]
      }
      const img = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === name
      )

      if (!img) {
        return null
      }
      return <Img fluid={img.node.fluid} />
    }}
  />
)

export default Image
