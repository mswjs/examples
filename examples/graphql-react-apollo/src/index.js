import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import { client } from './ApolloClient'
import { LoginForm } from './LoginForm'

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LoginForm />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
