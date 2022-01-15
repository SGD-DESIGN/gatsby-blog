import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

// import { StaticImage } from "gatsby-plugin-image"

import gatsbyAstronaut from "../images/gatsby-astronaut.png"

const Home = function () {
  return (
    <Layout>
      <Seo title="Welcome to Our Site!" />
      <h1>Hello world!</h1>
      <img
        src={gatsbyAstronaut}
        alt="A Gatsby Astronaut"
        style={{ width: `200px` }}
      />
      <p>
        Read more <Link to={"/about"}>About me!</Link>
      </p>
    </Layout>
  )
}
export default Home
