import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

async function enableMocking() {
  if (import.meta.env.VITE_USE_MOCKS) {
    const { worker } = await import('../mocks/browser.ts')
    await worker.start({
      onUnhandledRequest(request, print) {
        const url = new URL(request.url)

        // Ignore HTTP requests triggered by Vite's HMR.
        if (!/\.(ts|tsx|css)/.test(url.pathname)) {
          print.warning()
        }
      },
    })
  }
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
