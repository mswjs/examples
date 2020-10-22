import fetch from 'node-fetch'
import { from, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const link = from([
  new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
    credentials: 'same-origin',
    fetch: (...args) => {
      return fetch(...args)
    },
  }),
])

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

export default client
