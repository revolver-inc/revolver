import React from "react"
import { Link } from "gatsby"

const Nav = ({ mobileNav }) => {
  return (
    <nav className="list-nav">
      <ul className="list-view">
        <li>
          <Link to="/">contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
