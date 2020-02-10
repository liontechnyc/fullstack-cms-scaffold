import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import UI from "./ui"

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
    <UI>
      <div className="page__layout is-vertical">
        {/* Navigation */}
        <nav className="page__navigation">
          <div className="page__navigation--container align-center">
            <div className="page__navigation--item brand">
              {data.site.siteMetadata.title}
            </div>
          </div>
        </nav>
        {/* Page */}
        <div className="page__container">
          {/* Content */}
          <main className="page__content--container is-vertical is-wide">
            { children } {/* Page content */}
          </main>
          {/* Footer */}
          <footer className="page__footer">
            {/* Footer content */}
            © {new Date().getFullYear()} &nbsp; 
            Built with &nbsp;{`💖`} &nbsp;by &nbsp;
            <a href="https://www.liontech.nyc">Lion Tech NYC</a>
          </footer>
        </div>
      </div>
    </UI>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
