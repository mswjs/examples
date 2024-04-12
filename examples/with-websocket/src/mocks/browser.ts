import { setupWorker } from 'msw/browser'
import { handlers } from './handlers.ts'

export const worker = setupWorker(...handlers)
