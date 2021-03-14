const { setupServer } = require('msw/node')
import { handlers } from './handlers'

const server = setupServer(...handlers)

module.exports = server
