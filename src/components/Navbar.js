import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import navbar from "../scss/_navbar.scss"

export default function Navbar() {
  return (
    <nav id="main-nav" className="py-1">
      <div className="container">
        <ul>
          <li>
            <Link to={"/"} className="current">
              Resteraunt
            </Link>
          </li>
          <li>
            <Link to={"/menu"}>Menu</Link>
          </li>
          <StaticImage src="../img/coffee.png" id="nav-logo" />
          <li>
            <Link to={"/gallery"}>Image gallery</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
