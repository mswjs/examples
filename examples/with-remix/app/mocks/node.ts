import { type RequestHandler } from 'msw'
import { type SetupServer, setupServer } from 'msw/node'

declare global {
  var mswServerInstance: SetupServer
}

export function enableApiMocking(handlers: Array<RequestHandler>) {
  const existingServer = globalThis.mswServerInstance

  if (typeof existingServer !== 'undefined') {
    restart(existingServer, handlers)
  } else {
    start(setup(handlers))
  }
}

function setup(handlers: Array<RequestHandler>) {
  const server = setupServer(...handlers)
  globalThis.mswServerInstance = server
  return server
}

function start(server: SetupServer) {
  server.listen()

  process
    .once('SIGTERM', () => server.close())
    .once('SIGINT', () => server.close())
}

function restart(server: SetupServer, handlers: Array<RequestHandler>) {
  server.close()
  start(setup(handlers))
}
