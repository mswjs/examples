const { cleanup } = require('@testing-library/react')
const server = require('../mocks/server')

before(() => {
  server.listen()
  console.log(`msw server started!`)
  server.printHandlers()
})

afterEach(() => {
  // Reset any modified handlers and cleanup tests
  server.resetHandlers()
  cleanup()
})

after(() => {
  server.close()
})
