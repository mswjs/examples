const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const { server } = require('./mocks/server')

module.exports = (phase) => {
  switch (phase) {
    case PHASE_DEVELOPMENT_SERVER: {
      server.listen()
    }
  }

  return {}
}
