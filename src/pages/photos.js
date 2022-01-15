import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Photos = function () {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(width: 200, height: 200, layout: FIXED)
          }
        }
      }
      image: file(relativePath: { eq: "allie-smith.jpg" }) {
        id
        childImageSharp {
          gatsbyImageData(
            width: 400
            layout: FIXED
            transformOptions: {
              duotone: { shadow: "#222222", highlight: "#ffffff" }
            }
          )
        }
      }
      img: file(relativePath: { eq: "allie-smith.jpg" }) {
        id
        childImageSharp {
          gatsbyImageData(width: 400, layout: FIXED)
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <Seo title="Working with Gatsby Images!" />
      {/* //<Img fixed={data.image.childImageSharp.fixed} /> */}
      <GatsbyImage image={data.image.childImageSharp.gatsbyImageData} alt="" />
      <GatsbyImage image={data.img.childImageSharp.gatsbyImageData} alt="" />
      <h1>Photos!</h1>
      <div className="gallery">
        {data.images.nodes.map(image => (
          <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
        ))}
      </div>
    </Layout>
  )
}
export default Photos
