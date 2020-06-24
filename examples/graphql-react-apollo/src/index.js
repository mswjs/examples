import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './ApolloClient'
import { LoginForm } from './LoginForm'
import { User } from './User'

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const url = window.location.href
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      {url.includes('/user') ? <User /> : <LoginForm />}
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
