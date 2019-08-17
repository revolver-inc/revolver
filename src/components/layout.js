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
import DropMenu from "./DropMenu"
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
        {/* I hate to do this but the menu has to exist out side of the Header
            Thank safari for that one.
        */}
        <DropMenu className="mobile-view" />
        <Header siteTitle={data.site.siteMetadata.title} />
        <ResponsiveBackground>
          <div className="container">
            <div className="row">
              <div className="col-12 offset-lg-1 col-lg-10">{children}</div>
            </div>
          </div>
        </ResponsiveBackground>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
