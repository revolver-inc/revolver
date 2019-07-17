import React, { Component } from "react"
import { Link } from "gatsby"
// import onClickOutside from 'react-onclickoutside';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

class DropNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
    }
    this.closeNav = this.closeNav.bind(this)
  }

  toggleNav() {
    console.log("Clicky")
    this.setState(prevState => ({ listOpen: !prevState.listOpen }))
  }

  closeNav(timeOut) {
    this.setState({
      listOpen: false,
    })
  }

  componentDidUpdate() {
    const { listOpen } = this.state
    setTimeout(() => {
      if (listOpen) {
        window.addEventListener("click", this.closeNav)
      } else {
        window.removeEventListener("click", this.closeNav)
      }
    }, 0)
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.close)
  }

  render() {
    const { listOpen } = this.state
    return (
      <nav className="drop-nav">
        <FontAwesomeIcon
          icon={faBars}
          size="3x"
          color="#111"
          onClick={() => this.toggleNav()}
        />
        {listOpen && (
          <ul className="drop-list" onClick={e => e.stopPropagation()}>
            <li>
              <Link to="/news">Discover</Link>
            </li>
            <li>
              <Link to="/members">Locations</Link>
            </li>
            <li>
              <Link to="/projects">Trade</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </nav>
    )
  }
}

export default DropNav
