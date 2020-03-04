import React from "react"
import PropTypes from "prop-types"

import "./hero.scss"

const Hero = ({ subtitle, title, children }) => {
    return(
        <div className="hero__container">
            <div className="hero__content">
                <p className="hero__content--subtitle">
                    { subtitle }
                </p>
                <h3 className="hero__content--title">
                    { title }
                </h3>
                <div className="hero__content--footer">
                    { children }
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Hero