import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

const Section = ({ isNarrow, contentLayout, id, style, children }) => {
    const contentBlockClass = cx("page__content--block", { 
        "is-narrow" : isNarrow,
        "is-horizontal" : contentLayout === 'horizontal',
        "is-vertical" : contentLayout === 'vertical'
    })
    return(
        <section id={id} className={contentBlockClass} style={style}>
            { children }
        </section>
    )
}

Section.propTypes = {
    isNarrow: PropTypes.bool,
    contentLayout: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired
}

Section.defaultProps = {
    contentLayout: 'vertical',
    id: undefined,
    style: undefined
}

export default Section