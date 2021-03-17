const { cleanup } = require('@testing-library/react')
const server = require('../mocks/server')

before(() => {
  server.listen()
  server.printHandlers()
})

afterEach(() => {
  // Reset any modified handlers
  server.resetHandlers()
  // Note: RTL should automatically clean up tests, but that doesn't appear to be happening, so we're enforcing it here.
  cleanup()
})

after(() => {
  server.close()
})
