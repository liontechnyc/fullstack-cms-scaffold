import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
            instagram
            facebook
            linkedin
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata