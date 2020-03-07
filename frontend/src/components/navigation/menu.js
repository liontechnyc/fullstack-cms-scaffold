import React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import PropTypes from "prop-types"

import { socialLinksType } from "../../lib/propTypes"

import { Footer } from "../ui"

const Menu = ({ header, isVisible, closeMenu, social }) => {
    const navMenuClass = cx("navigation__menu", "animated", {
        "fadeIn" : isVisible,
        "fadeOut" : !isVisible
    })
    return(
        <div 
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
            className={navMenuClass}
            onClick={closeMenu}
        >
            <nav
                onClick={(e) => e.stopPropagation()} 
                className="navigation__menu--container"
            >
                <div className="navigation__menu--close">
                    <i onClick={closeMenu} className="navigation__btn fas fa-times"/>
                </div>
                <div className="navigation__menu--list-container">
                    <header>
                        <Link to="/" children={header}/>
                    </header>
                    <div className="navigation__menu--list-items">
                        <Link to="/">Home</Link>
                    </div>
                    <Footer social={social}/>
                </div>
            </nav>
        </div>
    )
}

Menu.propTypes = {
    header: PropTypes.string.isRequired,
    isVisible: PropTypes.bool,
    closeMenu: PropTypes.func.isRequired,
    social: socialLinksType
}

export default Menu