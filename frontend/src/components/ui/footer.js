import React from "react"
import PropTypes from "prop-types"


import { socialLinksType } from "../../lib/propTypes"
import { renderSocialIcons } from "../../lib/utils"

import "./footer.scss"

const Footer = ({ social }) => {
    return (
        <footer className="page__footer--container">
            <span>
                © {new Date().getFullYear()}&nbsp; Nyame Theme&nbsp; | &nbsp;Adinkra Series
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
    )
}

Footer.propTypes = {
    social: socialLinksType
}

export default Footer