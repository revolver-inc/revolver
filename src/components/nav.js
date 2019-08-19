import React from "react"
import { Link } from "gatsby"

//  The Drop Menu needs to exist outside of my header component (ugh)
// So it can be found in Layout.js
const Nav = ({ settings }) => {
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
        <li>
          {settings.storeIsEnabled && <a href={settings.storeURL}>Store </a>}
        </li>
      </ul>
    </nav>
  )
}

export default Nav
