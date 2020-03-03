import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

import Navigation from "../navigation"

import { withApolloClient } from "../../lib/ui"

import "./page.scss"

/**
 * ? Flexible page layout to structure navigation and content  
 */
const Page = ({ layout, contentLayout, contentSpacing, fixedNav, fluidNav, children }) => {
  const pageLayoutClass = cx("page__layout", { 
    "is-vertical" : layout === 'vertical',
    "is-horizontal" : layout === 'horizontal'
   })
  const navigationContainerClass = cx("page__navigation--container", {
    "is-fixed" : fixedNav,
    "is-fluid" : fluidNav
  })
  const contentContainerClass = cx("page__content--container", {
    "is-row" : contentLayout === 'row',
    "is-column" : contentLayout === 'column',
    "is-wide" : contentSpacing === 'wide',
    "is-narrow" : contentSpacing === 'narrow',
    "is-fluid" : contentSpacing === 'fluid'
  })
  return (
    <div className={pageLayoutClass}>
      {/* Navigation */}
      <nav className="page__navigation">
        <div className={navigationContainerClass}>
          <Navigation/>
        </div>
      </nav>
      {/* Page */}
      <div className="page__container">
        {/* Content */}
        <main className={contentContainerClass}>
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
  )
}

Page.propTypes = {
  layout: PropTypes.string,
  contentLayout: PropTypes.string,
  contentSpacing: PropTypes.string,
  fixedNav: PropTypes.bool,
  fluidNav: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Page.defaultProps = {
  layout: 'row',
  contentLayout: 'row'
}

export default withApolloClient(Page)
