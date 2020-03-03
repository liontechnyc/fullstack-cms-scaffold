import React, { useState } from "react"

import useSiteMetadata from "../hooks/use-site-metadata"
import { renderSocialIcons } from "../lib/utils"

import Menu from "./menu"

/**
 * ? Provides global site navigation
 */
const Navigation = () => {
    const { 
        artist,
        handle, 
        facebook,
        twitter,
        instagram, 
        soundcloud, 
        youtube
    } = useSiteMetadata()
    const social = { facebook, twitter, instagram, soundcloud, youtube }
    const [ menuIsVisibile, setMenuVisibility ] = useState(false)
    return(
        <>
            <div 
                className="navigation__btn"
                onClick={() => setMenuVisibility(true)}
            >
                <i className="fas fa-bars"/>
            </div>
            <Menu 
                header={artist}
                isVisible={menuIsVisibile}
                closeMenu={() => setMenuVisibility(false)}
                social={social}
            />
            <div className="navigation__content">
                <div className="navigation__content--container">
                    {/* Navigation items */}
                </div>
            </div>
            <div className="navigation__btn share">
                <i className="fas fa-plus"/>
                <div className="navigation__btn--social-banner">
                    {renderSocialIcons(social)}
                </div>
            </div>
        </>
    )
}

export default Navigation