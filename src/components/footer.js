import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Image from "./image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        allDataJson(filter: { templateKey: { eq: "social-media" } }) {
          edges {
            node {
              showFacebookIcon
              showInstagramIcon
              showTwitterIcon
              facebookURL
              instagramURL
              twitterURL
            }
          }
        }
      }
    `}
    render={data => {
      const socialMedia = data.allDataJson.edges[0].node
      return (
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
                <Link to="/discover/">Discover</Link>
              </li>
              <li>
                <Link to="/locations/">Locations</Link>
              </li>
              <li>
                <Link to="/trade/">Trade</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
            <ul className="social-icons">
              {socialMedia.showFacebookIcon && (
                <li>
                  <a href={socialMedia.facebookURL}>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </li>
              )}
              {socialMedia.showInstagramIcon && (
                <li>
                  <a href={socialMedia.instagramURL}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              )}
              {socialMedia.showTwitterIcon && (
                <li>
                  <a href={socialMedia.twitterURL}>
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </footer>
      )
    }}
  />
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
