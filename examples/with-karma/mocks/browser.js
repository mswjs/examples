const { setupWorker } = require('msw')
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
