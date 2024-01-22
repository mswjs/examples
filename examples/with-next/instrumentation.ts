export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { server } = await import('./mocks/node')
    server.listen()
  }
}
