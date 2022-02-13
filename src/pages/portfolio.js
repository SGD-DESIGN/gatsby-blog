import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
// import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Portfolio = function () {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <h1>Portfolio</h1>
      <div className="portfolio"></div>
    </Layout>
  )
}
export default Portfolio
