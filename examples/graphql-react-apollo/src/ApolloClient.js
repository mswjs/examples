import ApolloClient from 'apollo-boost'

// Isolate Apollo client so it could be reused
// in both application runtime and tests.
export const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
})
