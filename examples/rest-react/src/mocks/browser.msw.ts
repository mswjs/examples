import { setupWorker } from 'msw'

import { handlers } from './handlers.msw'

export const worker = setupWorker(...handlers)
