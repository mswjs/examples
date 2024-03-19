import React from 'react'
import ReactDOM from 'react-dom/client'
// Import the browser integration of MSW before the App.
// This resolves the race condition of the App connecting
// to the WebSocket server in its root scope.
import './mocks/browser.ts'
import { App } from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
