import React from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"

import client from "./apollo/client"

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

