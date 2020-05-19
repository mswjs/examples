import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { client } from './ApolloClient'
import { LoginForm } from './LoginForm'

async function bootstrap() {
  // Enable client-side API mocking in development.
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks')
    await worker.start()
  }

  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <LoginForm />
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

bootstrap()
