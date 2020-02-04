import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ApolloProvider } from "@apollo/react-hooks"

import client from "../lib/apollo/client"
import "../styles/core.scss"

/**
 * ? Flexible page layout to structure navigation and content  
 */
const Page = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ApolloProvider client={client}>
      <div className="page__layout is-vertical">
        <nav className="page__navigation">
          <div className="page__navigation--container align-center">
            <div className="page__navigation--item brand">
              {data.site.siteMetadata.title}
            </div>
          </div>
        </nav>
        <div className="page__container">
          <main className="page__content--container is-vertical is-wide">
            { children } {/* Page content */}
          </main>
          <footer className="page__footer">
            {/* Footer content */}
            © {new Date().getFullYear()} &nbsp; 
            Built with &nbsp;{`💖`} &nbsp;by &nbsp;
            <a href="https://www.liontech.nyc">Lion Tech NYC</a>
          </footer>
        </div>
      </div>
    </ApolloProvider>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
