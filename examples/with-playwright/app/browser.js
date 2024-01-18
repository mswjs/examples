import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

const worker = setupWorker(...handlers)
window.workerStartPromise = worker.start()
