import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import BackgroundImage from "gatsby-background-image"

// const style = {
//   backgroundSize: "100% 100%, cover, cover",
// }

const ContactBackground = ({ children, className }) => {
  const { tape } = useStaticQuery(
    graphql`
      query {
        tape: file(relativePath: { eq: "cassette-bg.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set Img File Data for readability.
  const imgData = tape.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag={`div`}
      className={className}
      fluid={imgData}
      // style={style}
      style={{ opacity: 0.95 }}
      preserveStackingContext={true}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledContactBackground = styled(ContactBackground)`
  color: #111;
  background-size: cover;
  border-radius: 4px;
  padding: 1rem 1rem;
  min-height: 75vh;
`

export default StyledContactBackground
