import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PrimaryMenu from "./primary-menu"

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
          <PrimaryMenu />
        </header>
      )}
    />
  )
}
export default Header
