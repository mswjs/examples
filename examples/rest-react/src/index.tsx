import React from 'react'
import ReactDOM from 'react-dom'

import { LoginForm } from './components/form/LoginForm'

import reportWebVitals from './reportWebVitals'

import './mocks'
import './index.css'

const App: React.FunctionComponent = () => {
  return (
    <div>
      <img
        src="/img/msw_banner.jpeg"
        alt="Mock Service Worker banner"
        className="w-full"
      />
      <LoginForm />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
