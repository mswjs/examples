import { useState, useEffect } from 'react'

const IS_SERVER = typeof window === 'undefined'

export default function App({ Component, pageProps }) {
  const [isReady, setReady] = useState(IS_SERVER)

  useEffect(() => {
    if (!IS_SERVER) {
      console.log('IN EFFECT HOOKs!')
      const { worker } = require('../mocks/browser')
      worker.start().then(() => setReady(true))
    }
  }, [])

  if (!isReady) {
    // Defer our application rendering until
    // the mock Service Worker is ready.
    return null
  }

  return <Component {...pageProps} />
}
