import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

const Section = ({ 
        bgColor, 
        isNarrow, 
        contentLayout, 
        id, 
        style, 
        children 
    }) => {
        const contentBlockStyle = {
            backgroundColor: bgColor,
            ...style
        }
        const contentBlockClass = cx("page__content--block", { 
            "is-narrow" : isNarrow,
            "is-horizontal" : contentLayout === 'horizontal',
            "is-vertical" : contentLayout === 'vertical'
        })
        return(
            <section 
                id={id} 
                className={contentBlockClass} 
                style={contentBlockStyle}
            >
                { children }
            </section>
        )
}

Section.propTypes = {
    bgColor: PropTypes.string,
    isNarrow: PropTypes.bool,
    contentLayout: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
}

Section.defaultProps = {
    contentLayout: 'vertical',
    bgColor: undefined,
    id: undefined,
    style: {}
}

export default Section