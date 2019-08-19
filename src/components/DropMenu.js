import React from "react"
import { Link } from "gatsby"

import Menu from "react-burger-menu/lib/menus/slide"

const DropMenu = ({ settings }) => {
  return (
    <Menu right>
      <Link to="/">Home</Link>
      <Link to="/discover">Discover</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/trade">Trade</Link>
      <Link to="/contact">Contact</Link>
      {settings.storeIsEnabled && <a href={settings.storeURL}>Store</a>}
    </Menu>
  )
}

export default DropMenu
