import React, { useState } from "react"
import { Link } from "gatsby"
import cx from "classnames"
import PropTypes from "prop-types"

import {
    navJustificationType, 
    socialLinksType
 } from "../lib/propTypes"

import "./navigation.scss"

/**
 * ? Provides site navigation wrapper
 */
const Navigation = ({ pageLayout, justifyNavContent, openMenu, social }) => {
    const contentClass = cx("navigation__content", {
        "is-vertical" : pageLayout === 'horizontal',
        "is-horizontal" : pageLayout === 'vertical',
        "justify-start" : justifyNavContent === 'start',
        "justify-center" : justifyNavContent === 'center',
        "justify-end" : justifyNavContent === 'end'
    })
    return(
        <>
            <div 
                className="navigation__btn"
                onClick={openMenu}
            >
                <i className="fas fa-bars"/>
            </div>
            <div className={contentClass}>
                <div className="navigation__content--container">
                    <Link to="/">Home</Link>
                    <Link to="/">Link A</Link>
                    <Link to="/">Link B</Link>
                </div>
            </div>
        </>
    )
}

Navigation.propTypes = {
    social: socialLinksType,
    pageLayout: PropTypes.string.isRequired,
    navJustification : navJustificationType.isRequired,
    openMenu: PropTypes.func.isRequired
}

export default Navigation