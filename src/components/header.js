import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Header = function () {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <header>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.description}</p>
          <nav>
            <ul>
              <li>
                <Link to={"/"} activeClassName="active">
                  Home
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
                <Link
                  to={"/blog"}
                  activeClassName="active"
                  partialyActive={true}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
    />
  )
}
export default Header
