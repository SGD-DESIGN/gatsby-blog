import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = function () {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          year
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata
