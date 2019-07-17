import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-logo">
        <Image name="logo.png" />
      </div>
      <ul className="footer-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Discover</Link>
        </li>
        <li>
          <Link to="/">Locations</Link>
        </li>
        <li>
          <Link to="/">Trade</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <ul className="social-icons">
        <li>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </li>
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitterSquare} />
        </li>
      </ul>
    </div>
  </footer>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
