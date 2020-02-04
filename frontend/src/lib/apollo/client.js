import ApolloClient from 'apollo-boost';
import fetch from "isomorphic-fetch"

const client = new ApolloClient({
    uri: 'http://localhost:8001/graphql',
    fetch
})

export default client