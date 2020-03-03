import ApolloClient from 'apollo-boost'
import fetch from "isomorphic-fetch"

const client = new ApolloClient({
    uri: `${process.env.GATSBY_STRAPI_URI}/graphql`,
    fetch
})

export default client