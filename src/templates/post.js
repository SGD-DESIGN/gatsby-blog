import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../components/seo"

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

const Title = ({
  data: {
    mdx: {
      frontmatter: { title },
      body: content,
    },
  },
}) => (
  <Layout>
    <Seo title={`${title} | Blog`} />
    <p>
      <Link to={"/blog/"}>&lt; Back to all posts</Link>
    </p>
    <h1>{title}</h1>
    <MDXRenderer>{content}</MDXRenderer>
  </Layout>
)
export default Title
