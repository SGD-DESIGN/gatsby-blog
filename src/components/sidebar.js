import React from "react"
import { Link } from "gatsby"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
