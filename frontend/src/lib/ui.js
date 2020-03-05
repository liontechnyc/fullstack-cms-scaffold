import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import cx from "classnames"

import client from "./apollo/client"
import useScrollToTop from "../hooks/use-scroll-to-top"

/**
 * ? Allows modal to render as page for SEO and navigation purposes,
 * ? For instance hitting the back button will close the modal
 * ? rather than changing the page
 */
export const asModal = Component => props => {
    return(
        <ModalRoutingContext.Consumer>
            {(modalProps) => <Component {...modalProps} {...props}/>}
        </ModalRoutingContext.Consumer>
    )
}

/**
 * ? HOC to wrap component with Apollo Provider w/ client credentials
 *  
 */
export const withApolloClient = Component => props => {
    return(
        <ApolloProvider client={client}>
            <Component {...props}/>
        </ApolloProvider>
    )
}

/**
 * ? HOC to wrap scroll to top component
 */
export const withScrollToTop = Component => props => {
    const isVisible = useScrollToTop()

    const containerClass = cx("btn__link", "animated", "faster", {
        fadeIn : isVisible,
        fadeOut: !isVisible,
    })
    const containerStyle = {
        position: 'fixed',
        bottom: 24,
        right: 24,
        margin: 0,
        zIndex: 800
    }
    return(
        <>
            <Component {...props}/>
            <a 
                className={containerClass} 
                style={containerStyle}
                onClick={() => window.scrollTo(0, 0)}
            >
                <i className="fas fa-angle-double-up"/>
            </a>
        </>
    )
}