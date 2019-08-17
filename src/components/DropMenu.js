import React from "react"
import { Link } from "gatsby"

import Menu from "react-burger-menu/lib/menus/slide"

const DropMenu = () => {
  return (
    <Menu right>
      <Link to="/">Home</Link>
      <Link to="/discover">Discover</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/trade">Trade</Link>
      <Link to="/contact">Contact</Link>
    </Menu>
  )
}

export default DropMenu
