import React from "react"
import { Link } from "gatsby"

import DropNav from "./DropNav"
import DropMenu from "./DropMenu"

const Nav = ({ mobileNav }) => {
  return (
    <nav className="site-nav">
      <ul className="list-nav">
        <li>
          <Link to="/discover">Discover</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/trade">Trade</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <DropNav className="mobile-view" />
      {/* <DropMenu className="mobile-view" /> */}
    </nav>
  )
}

export default Nav
