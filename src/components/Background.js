import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import BackgroundImage from "gatsby-background-image"

const Background = ({ children, className }) => {
  const { stripes, nasty } = useStaticQuery(
    graphql`
      query {
        stripes: file(relativePath: { eq: "stripes-2x.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        nasty: file(relativePath: { eq: "nasty.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    nasty.childImageSharp.fluid,
    `linear-gradient(140deg, rgba(253, 230, 187, .97), rgba(213,181,131,.97))`,
    stripes.childImageSharp.fluid,
  ].reverse()

  return (
    <BackgroundImage
      Tag={`main`}
      className={className}
      fluid={backgroundFluidImageStack}
      // style={style}
    >
      {children}
    </BackgroundImage>
  )
}

export default Background
