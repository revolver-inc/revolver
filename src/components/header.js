import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"
import Nav from "./nav"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <div className="container">
      <div className="row">
        <div className="header-container  col-12 offset-lg-1 col-lg-10">
          <div className="brand-container">
            <Link to="/">
              <h1 className="brand-logo" style={{ margin: 0 }}>
                <Image name="logo.png" />
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
