import React from "react"
import { Link } from "gatsby"

import DropNav from "./DropNav"

const Nav = ({ mobileNav }) => {
  return (
    <nav className="site-nav">
      <ul className="list-nav">
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
      <DropNav className="mobile-view" />
    </nav>
  )
}

export default Nav
