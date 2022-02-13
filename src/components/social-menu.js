import React from "react"
import { Link } from "gatsby"

const SocialMenu = function () {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"} activeClassName="active">
            GitHub
          </Link>
        </li>
        <li>
          <Link to={"/portfolio"} activeClassName="active">
            Instagram
          </Link>
        </li>
        <li>
          <Link to={"/about"} activeClassName="active">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link to={"/photos"} activeClassName="active">
            CodePen
          </Link>
        </li>
        <li>
          <Link to={"/video"} activeClassName="active">
            Dribbble
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
export default SocialMenu
