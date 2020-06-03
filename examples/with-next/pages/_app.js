import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    const isMockReady =
      process.env.NODE_ENV === 'development'
        ? require('../mocks/browser').worker.start()
        : Promise.resolve()

    isMockReady.then(() => setReady(true))
  }, [])

  if (!isReady) {
    return null
  }

  return <Component {...pageProps} />
}
