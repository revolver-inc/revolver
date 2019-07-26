/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import ResponsiveBackground from "./ResponsiveBackground"
import Header from "./header"
import Footer from "./footer"
import "./styles/main.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        {/* <Background> */}
        <ResponsiveBackground>
          <div className="container">
            <div className="row">
              <div className="col-12 offset-lg-1 col-lg-10">{children}</div>
            </div>
          </div>
        </ResponsiveBackground>
        {/* </Background> */}
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
