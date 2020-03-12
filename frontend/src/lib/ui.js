import React from "react"
import { Link } from "gatsby"
import { ApolloProvider } from "@apollo/react-hooks"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import { ToastContainer } from "react-toastify"
import cx from "classnames"

import client from "./apollo/client"
import useScrollToTop from "../hooks/use-scroll-to-top"
import "../hooks/use-cookie-consent"
import useCookieConsent from "../hooks/use-cookie-consent"

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

/**
 * ? HOC to wrap Toast container 
 */
export const withNotifications = Component => props => {
    require('react-toastify/dist/ReactToastify.css')
    return(
        <>
            <Component {...props}/>
            <ToastContainer/>
        </>
    )
}

/**
 * ? HOC to wrap cookies consent alert 
 */
export const withCookiesAlert = Component => props => {
    const { hasConsent, setConsent } = useCookieConsent()
    const containerClass = cx("cookies__alert", "animated", {
        "slideInUp" : !hasConsent
    })
    const containerStyle = {
        display: hasConsent ? 'none' : undefined,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 900
    }
    return(
        <>
            <Component {...props}/>
            <div
                className={containerClass}
                style={containerStyle}
            >
                <h3>Why do we use <b>cookies</b></h3>
                <p>
                    We use cookies and similar technology to <b>recognize your repeat visits and preferences</b>, as well as to
                    <b>measure the effectiveness of campaigns and analyze traffic</b>. To learn more about about cookies,
                    view our Cookies Policy. By clicking 'I Accept', or using our site, you have consent to the use of cookies
                    unless you have disabled them. 
                </p>
                <div>
                    <button
                        onClick={() => setConsent(true)}
                    >
                        I Accept
                    </button>
                    <Link to="/cookies">Learn More</Link>
                </div>
            </div>
        </>
    )
}