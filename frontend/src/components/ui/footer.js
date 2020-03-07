import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


import { socialLinksType } from "../../lib/propTypes"
import { renderSocialIcons } from "../../lib/utils"

import "./footer.scss"

const Footer = ({ social }) => {
    return (
        <footer className="page__footer--container">
            <span>
                © {new Date().getFullYear()}&nbsp; 
                Nyame Theme
                &nbsp; | &nbsp;
                Adinkra Series
            </span>
            <br/>
            <span>
                Built with &nbsp;{`💖`} &nbsp;by &nbsp;
                <Link to="/">Lion Tech NYC</Link>
            </span>
            <br/>
            <span>
                <Link to="/privacy">Privacy Policy</Link>
                &nbsp; | &nbsp;
                <Link to="/cookies">Cookies Policy</Link>
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
    )
}

Footer.propTypes = {
    social: socialLinksType
}

export default Footer