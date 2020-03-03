import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

const Section = ({ isNarrow, contentLayout, style, children }) => {
    const contentBlockClass = cx("page__content--block", { 
        "is-narrow" : isNarrow,
        "is-horizontal" : contentLayout === 'horizontal',
        "is-vertical" : contentLayout === 'vertical'
    })
    return(
        <section className={contentBlockClass} style={style}>
            { children }
        </section>
    )
}

Section.propTypes = {
    isNarrow: PropTypes.bool,
    contentLayout: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
}

Section.defaultProps = {
    contentLayout: 'vertical',
    style: undefined
}

export default Section