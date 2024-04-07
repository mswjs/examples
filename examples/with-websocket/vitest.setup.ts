import '@testing-library/jest-dom/vitest'
import { WebSocket } from 'undici'
import { server } from './src/mocks/server.ts'

Reflect.set(globalThis, 'WebSocket', WebSocket)

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  })
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
