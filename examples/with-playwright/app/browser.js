import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

window.worker = setupWorker(...handlers)
