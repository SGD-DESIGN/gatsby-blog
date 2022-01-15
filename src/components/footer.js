import React from "react"
import useSiteMetadata from "../hooks/user-sitemetadata"

const Footer = function () {
  const { year, title, description } = useSiteMetadata()
  return (
    <footer>
      <hr />
      <p>
        Copyright &copy; {year} | {title} - {description}
      </p>
    </footer>
  )
}

export default Footer
