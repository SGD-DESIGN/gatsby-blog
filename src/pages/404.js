import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function fourohfour() {
  return (
    <Layout>
      <Seo title="404" />
      <h1>404</h1>
      <p>
        Go back <Link to={"/"}>home</Link>
      </p>
    </Layout>
  )
}
