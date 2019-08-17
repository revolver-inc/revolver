import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import BackgroundImage from "gatsby-background-image"

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 767 })
  return isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 575 })
  return isMobile ? children : null
}

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}

const ImgBackground = ({ children, className }) => {
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
const TabletBackground = styled(ImgBackground)`
  color: #111;
  background-size: auto 100%;
  background-position: 0% 0%;
  border-radius: 4px;
  // padding: 1rem 1rem;
  min-height: 75vh;
`
const DesktopBackground = styled(ImgBackground)`
  color: #111;
  background-size: auto 100%;
  background-position: center;
  border-radius: 4px;
  padding: 1rem 1rem;
  min-height: 75vh;
`

const ContactBackground = ({ children }) => (
  <>
    <Mobile>
      <div className="contact-page">{children}</div>
    </Mobile>
    <Tablet>
      <TabletBackground className="contact-page">{children}</TabletBackground>
    </Tablet>
    <Desktop>
      <DesktopBackground className="contact-page">{children}</DesktopBackground>
    </Desktop>
  </>
)
export default ContactBackground
