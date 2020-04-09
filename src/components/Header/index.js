import React from "react"
import logo from "./logo.png"
import { Link } from "gatsby"
import "./style.css"

class Header extends React.Component {
  render() {
    const { location } = this.props

    const blogLinkStyle = {
      paddingBottom: location.pathname === "/" ? `5px` : `0px`,
      boxShadow: location.pathname === "/" ? `0px 1px 0px 0px black` : `none`,
    }
    const workLinkStyle = {
      paddingBottom: location.pathname === "/work" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/work" ? `0px 1px 0px 0px black` : `none`,
    }
    const aboutLinkStyle = {
      paddingBottom: location.pathname === "/about" ? `5px` : `0px`,
      boxShadow:
        location.pathname === "/about" ? `0px 1px 0px 0px black` : `none`,
    }

    return (
      <div className="header-main">
        <Link className="logo-link" to={`/`}>
          <img src={logo} alt="22 Boxes logo" className="logo-img" />
        </Link>

      </div>
    )
  }
}

export default Header
