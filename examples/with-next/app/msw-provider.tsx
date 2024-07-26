import { MSWClientProvider } from './msw-provider-client'

export function MSWProvider({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <MSWClientProvider>{children}</MSWClientProvider>
}
