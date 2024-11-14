import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'
import App from './App.jsx'

async function enableMocking() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser.js')
    await worker.start()
  }
}

enableMocking().finally(() => {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  })

  const wsLink = new GraphQLWsLink(
    createClient({
      url: 'ws://localhost:4000/graphql',
    }),
  )

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query)
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      )
    },
    wsLink as any,
    httpLink,
  )

  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  })

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StrictMode>,
  )
})
