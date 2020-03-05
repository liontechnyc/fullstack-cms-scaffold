import React from "react"
import PropTypes from "prop-types"

import "./hero.scss"

const Hero = ({ 
        subtitle, 
        title, 
        alignTitle,
        alignFooter, 
        bgColor, 
        bgImage, 
        textColor, 
        fullscreen,
        isFlat,
        invertTitlePlacement,
        children
    }) => {
    const containerStyle = { 
        color: textColor,
        backgroundColor: bgColor,
        borderColor: bgColor,
        backgroundImage: bgImage ? `url(${ bgImage })` : undefined,
        boxShadow: isFlat ? 'none' : undefined,
        height: fullscreen ? `100vh` : undefined,
    }
    const titleStyle = {
        textAlign: alignTitle,
        order: invertTitlePlacement ? 1 : 0
    }
    const subTitleStyle = {
        order: !invertTitlePlacement ? 1 : 0
    }
    const footerStyle = {
        order: 2,
        justifyContent: alignFooter
    }
    return(
        <div style={containerStyle} className="hero__container">
            <div className="hero__content">
                <h3 style={titleStyle} className="hero__content--title">
                    { title }
                </h3>
                <p style={subTitleStyle} className="hero__content--subtitle">
                    { subtitle }
                </p>
                <div style={footerStyle} className="hero__content--footer">
                    { children }
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    alignTitle: PropTypes.oneOf(['left', 'center', 'right' ]),
    alignFooter: PropTypes.oneOf([ 'left', 'center', 'right' ]),
    bgColor: PropTypes.string,
    bgImage: PropTypes.string,
    textColor: PropTypes.string,
    fullscreen: PropTypes.bool,
    isFlat: PropTypes.bool,
    invertTitlePlacement: PropTypes.bool.isRequired,
    children: PropTypes.node
}

Hero.defaultProps = {
    alignTitle: 'center',
    alignFooter: 'center',
    bgColor: undefined,
    bgImage: undefined,
    invertTitlePlacement: false
}

export default Hero