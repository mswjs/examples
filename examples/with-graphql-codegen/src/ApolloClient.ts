import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

// Isolate Apollo client so it could be reused
// in both application runtime and tests.
export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',

    // Use explicit `window.fetch` so the outgoing requests
    // are captured and deferred until the Service Worker is ready.
    fetch: (...args) => fetch(...args),
  }),
  cache: new InMemoryCache(),
})
