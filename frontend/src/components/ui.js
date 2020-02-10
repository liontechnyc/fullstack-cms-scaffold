import React from "react"
import PropTypes from "prop-types"
import { ApolloProvider } from "@apollo/react-hooks"

import client from "../lib/apollo/client"
import "../styles/core.scss"

/**
 * ? User Interface wrapper, interfaces resources for use throughout the app
 */
const UI = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            { children }
        </ApolloProvider>
    )
}

UI.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UI
