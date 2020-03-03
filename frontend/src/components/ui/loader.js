import React from "react"
import PropTypes from "prop-types"
import { default as Spinner } from "react-loader-spinner"
import { Transition } from "react-transition-group"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// ? Spinner UI parameters; 
// ! global for all pages, should not change per view
const SPINNER_SIZE = 100
const SPINNER_TIMEOUT = 3000

/**
 * Animated spinner for loading states
 * @param {[ * ]} palette - set gradient palette for spinner color
 * @param { boolean } fullScreen - if true loader will cover viewports, default behvaior is to fill parent container
 */
const Loader = ({ isLoading, palette, fullscreen }) => {
    const [ primaryTint, secondaryTint ] = palette
    const baseContainerStyle = {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        position: fullscreen ? `fixed` : `relative`,
        width: fullscreen ? `100vw` : `100%`,
        height: fullscreen ? `100vh` : `100%`,
        top: fullscreen ? 0 : undefined,
        left: fullscreen ? 0 : undefined,
        background: primaryTint, // ? Fallback for old browsers
        backgroundImage: `linear-gradient(to top, ${primaryTint}, ${secondaryTint})`,
        overflow: `hidden`,
        zIndex: 9999,
        transition: `opacity ${SPINNER_TIMEOUT} ease-in-out`
    }

    const transitionStyles={
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    }
    return(
        <Transition in={isLoading} timeout={SPINNER_TIMEOUT}>
            { state => (
                <div style={{ ...baseContainerStyle, ...transitionStyles[state] }}>
                    <Spinner
                        type="Triangle"
                        color="#FFFFFF"
                        height={SPINNER_SIZE}
                        width={SPINNER_SIZE}
                        timeout={SPINNER_TIMEOUT}
                    />
                </div>
            )
        }
        </Transition>
    )
}

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    palette: PropTypes.arrayOf(PropTypes.string),
    fullscreen: PropTypes.bool
}

Loader.defaultProps = {
    isLoading: true,
    palette: [ `#f093fb`, `#f5576c` ]
}

export default Loader