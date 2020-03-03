import React from "react"

/**
 * ? Maps social channel's object to collection of social link icon elements
 * @param {*} social - object mapping social media channel slug to URI
 */
export function renderSocialIcons(social){
    return(
        Object
        .entries(social)
        .map(
            /**
             * ? Transforms channel-url pairs into a React element 
             * ? or null element depending if url is missing 
             */
            ([ channel, url ]) => {
                return url && <a href={url} key={channel} className={`fab fa-${ channel }`}/>
            }
        )
        .filter(Boolean) // ? Removes null mapped elements if any
    )
}

/**
 * Generate URI to reference static content from backend's CDN
 * @param {string} url - static content's location on backend  
 */
export function fromCDN(url){
    return process.env.NODE_ENV === 'production' ? url : process.env.GATSBY_STRAPI_URI + url
}