import React from 'react'
import ReactDOM from 'react-dom'
import { LoginForm } from './LoginForm'

async function bootstrap() {
  // Import mocks on development and await their activation,
  // so the requests that happen on initial load could be intercepted.
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks')
    await worker.start()
  }

  ReactDOM.render(<LoginForm />, document.getElementById('root'))
}

bootstrap()
