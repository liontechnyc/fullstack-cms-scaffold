import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import PropTypes from "prop-types"

import { renderSocialIcons } from "../lib/utils"
import {
    navJustificationType, 
    socialLinksType
 } from "../lib/propTypes"

import "./navigation.scss"

/**
 * ? Provides site navigation wrapper
 */
const Navigation = ({ header, pageLayout, navJustification, openMenu, social }) => {
    const contentClass = cx("navigation__content", {
        "is-vertical" : pageLayout === 'horizontal',
        "is-horizontal" : pageLayout === 'vertical',
        "justify-start" : navJustification === 'start',
        "justify-center" : navJustification === 'center',
        "justify-end" : navJustification === 'end'
    })
    return(
        <>
            <header className="navigation__header">
                <strong>{ header }</strong>
            </header>
            <div className={contentClass}>
                <div className="navigation__content--container">
                    <Link to="/">Home</Link>
                    {renderSocialIcons(social)}
                </div>
            </div>
            <div 
                className="navigation__btn"
                onClick={openMenu}
            >
                <i className="fas fa-bars"/>
            </div>
        </>
    )
}

Navigation.propTypes = {
    header: PropTypes.string.isRequired,
    social: socialLinksType,
    pageLayout: PropTypes.string.isRequired,
    navJustification : navJustificationType.isRequired,
    openMenu: PropTypes.func.isRequired
}

Navigation.defaultProps = {
    navJustification: 'end'
}

export default Navigation