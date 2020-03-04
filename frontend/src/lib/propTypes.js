import PropTypes from "prop-types"

export const containerLayoutType = PropTypes.oneOf(['vertical', 'horizontal'])

export const navJustificationType = PropTypes.oneOf([ 'start', 'center', 'end' ])

export const socialLinksType = PropTypes.shape({
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    soundcloud: PropTypes.string,
    twitter: PropTypes.string,
    youtube: PropTypes.string,
    linkedin : PropTypes.string
})