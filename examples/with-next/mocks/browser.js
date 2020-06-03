import { setupWorker, rest } from 'msw'
const { handlers } = require('./handlers')

const worker = setupWorker(...handlers)

module.exports = {
  worker,
}
