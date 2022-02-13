import React from "react"
import { Link } from "gatsby"

const PrimaryMenu = function () {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"} activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/portfolio"} activeClassName="active">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to={"/about"} activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to={"/photos"} activeClassName="active">
            Photos
          </Link>
        </li>
        <li>
          <Link to={"/video"} activeClassName="active">
            Video
          </Link>
        </li>
        <li>
          <Link to={"/blog"} activeClassName="active" partialyActive={true}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default PrimaryMenu
