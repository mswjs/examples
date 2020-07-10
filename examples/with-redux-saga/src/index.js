import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { LoginForm } from './LoginForm'
import { store } from './store'

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById('root')
)
