import { graphql, useStaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import Img from "gatsby-image"
import Nav from "./nav"

const Header = ({ siteTitle }) => {
  const { logo } = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `
  )
  const logoImg = logo.childImageSharp.fluid
  return (
    <header className="site-header site-nav">
      <div className="container">
        <div className="row">
          <div className="header-container  col-12 offset-lg-1 col-lg-10">
            <div className="brand-container">
              <Link to="/" title="Revolver Home">
                <h1 className="brand-logo" style={{ margin: 0 }}>
                  <Img fluid={logoImg} alt="Revolver Home" />
                </h1>
                <ul className="tag-line">
                  <li>Music</li>
                  <li>Movies</li>
                  <li>Pop Culture</li>
                </ul>
              </Link>
            </div>
            <Nav />
            <div className="turn-table">
              <Image name="turn-table.png" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
