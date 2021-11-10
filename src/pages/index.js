import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import main from "../scss/main.scss"

export default function Home() {
  return (
    <div>
      <nav id="main-nav">
        <ul>
          <li>
            <Link to={"/"}>Resteraunt</Link>
          </li>
          <li>
            <Link to={"/menu"}>Menu</Link>
          </li>
          <StaticImage src="../img/coffee.png" />
          <li>
            <Link to={"/image-gallery"}>Image Gallery</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
