import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogListing = function () {
  const data = useStaticQuery(graphql`
    query PostQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            date(formatString: "MM.DD.YY")
            excerpt
            slug
            title
          }
        }
      }
    }
  `)
  console.log(data)
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <Seo title="Blog Posts" />
      <h1>Blog Posts</h1>
      <hr />
      {posts.map(({ id, frontmatter: { title, excerpt, slug, date } }) => (
        <article key={id}>
          <h3>
            <Link to={`/blog/${slug}`}>{title}</Link>
          </h3>
          <p>{excerpt}</p>
          <p class="small">{date}</p>
        </article>
      ))}
    </Layout>
  )
}

export default BlogListing
