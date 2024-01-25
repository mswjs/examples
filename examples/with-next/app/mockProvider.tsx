'use client'
import { useEffect, useState } from 'react'

export function MockProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [mockingEnabled, enableMocking] = useState(false)

  useEffect(() => {
    async function enableApiMocking() {
      /**
       * @fixme Next puts this import to the top of
       * this module and runs it during the build
       * in Node.js. This makes "msw/browser" import to fail.
       */
      const { worker } = await import('../mocks/browser')
      await worker.start()
      enableMocking(true)
    }

    enableApiMocking()
  }, [])

  if (!mockingEnabled) {
    return null
  }

  return <>{children}</>
}
