import { MSWClientProvider } from './msw-provider-client'

if (process.env.NEXT_RUNTIME === 'nodejs') {
  const { server } = require('../mocks/node')
  server.listen()
}

export function MSWProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <MSWClientProvider>{children}</MSWClientProvider>
}
