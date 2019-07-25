import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const MultiBackground = ({ children, className }) => {
  const { stripes, nasty } = useStaticQuery(
    graphql`
      query {
        stripes: file(relativePath: { eq: "stripes-2x.png" }) {
          childImageSharp {
            fluid(quality: 100) {
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
      id={`test`}
      className={className}
      fluid={backgroundFluidImageStack}
    >
      <StyledInnerWrapper>{children}</StyledInnerWrapper>
    </BackgroundImage>
  )
}

const StyledInnerWrapper = styled.div`
  margin-top: 10%;
`
// display: flex;
// flex-direction: column;
// align-items: center;

const Background = styled(MultiBackground)`
  width: 100%;
  min-height: 90vh;
  /* You should set a background-size as the default value is "cover"! */
  background-size: 100% 100%, cover, cover;
  /* So we won't have the default "lightgray" background-color. */
  /* Now again, remember the stacking order of CSS: lowermost comes last! */
  background-repeat: no-repeat, no-repeat, repeat;
  background-position: center, left;
`

export default Background
