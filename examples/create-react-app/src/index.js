import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

async function bootstrap() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks')
    await worker.start()
  }

  ReactDOM.render(<App />, document.getElementById('root'))
}

bootstrap()
