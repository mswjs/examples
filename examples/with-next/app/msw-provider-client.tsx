'use client'

import { Suspense, use } from 'react'

let mockingPromise: Promise<boolean> | undefined

// if we're running in the browser, start the worker
if (typeof window !== 'undefined') {
  const { worker } = require('../mocks/browser')
  mockingPromise = worker.start()
}

export function MSWClientProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // if MSW is enabled, we need to wait for the worker to start, so we wrap the
  // children in a Suspense boundary until the worker is ready
  return (
    <Suspense fallback={null}>
      <MSWProviderInner>{children}</MSWProviderInner>
    </Suspense>
  )
}

function MSWProviderInner({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (mockingPromise) {
    use(mockingPromise!)
  }
  return children
}
