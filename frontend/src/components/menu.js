import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { renderSocialIcons } from "../lib/utils"

const Menu = ({ header, isVisible, closeMenu, social }) => {
    return(
        <div 
            className="navigation__menu"
            style={{ display: isVisible ? 'block' : 'none' }}
            onClick={closeMenu}
        >
            <nav
                onClick={(e) => e.stopPropagation()} 
                className="navigation__menu--container"
            >
                <div>
                    <i onClick={closeMenu} className="fas fa-times"/>
                </div>
                <div className="navigation__menu--list-container">
                    <header>
                        <Link to="/" children={header}/>
                    </header>
                    <div className="navigation__menu--list-items">
                        <Link to="/">Home</Link>
                    </div>
                    <footer>
                        <span>
                            © {new Date().getFullYear()}&nbsp; Sankofa Theme&nbsp; | &nbsp;Adinkra Series
                        </span>
                        <br/>
                        <span>
                            Built with &nbsp;{`💖`} &nbsp;by &nbsp;
                            <a target="_BLANK" href="https://www.liontech.nyc">Lion Tech NYC</a>
                        </span>
                        <br/>
                        <span>
                            <a href="#">Privacy Policy</a>&nbsp; | &nbsp;<a href="#">Cookies Policy</a>
                        </span>
                        <br/>
                        <span>
                            All Rights Reserved
                        </span>
                        <br/>
                        <span>
                            {renderSocialIcons(social)}
                        </span>
                    </footer>
                </div>
            </nav>
        </div>
    )
}

Menu.propTypes = {
    header: PropTypes.string.isRequired,
    isVisible: PropTypes.bool,
    closeMenu: PropTypes.func.isRequired,
    social: PropTypes.shape({
        facebook: PropTypes.string,
        instagram: PropTypes.string,
        soundcloud: PropTypes.string,
        twitter: PropTypes.string,
        youtube: PropTypes.string
    }).isRequired
}

export default Menu