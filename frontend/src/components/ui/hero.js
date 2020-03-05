import React from "react"
import PropTypes from "prop-types"

import "./hero.scss"

const Hero = ({ 
        subtitle, 
        title, 
        alignTitle, 
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
        order: Number(invertTitlePlacement)
    }
    const subTitleStyle = {
        order: Number(!invertTitlePlacement)
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
                <div style={{ order: 2 }} className="hero__content--footer">
                    { children }
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    alignTitle: PropTypes.string,
    bgColor: PropTypes.string,
    bgImage: PropTypes.string,
    textColor: PropTypes.string,
    fullscreen: PropTypes.bool,
    isFlat: PropTypes.bool,
    invertTitlePlacement: PropTypes.bool,
    children: PropTypes.node
}

Hero.defaultProps = {
    alignTitle: 'center',
    bgColor: undefined,
    bgImage: undefined
}

export default Hero