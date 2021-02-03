import { setupWorker } from 'msw'
import { handlers } from './handlers'

console.log('setupWorker', typeof window, typeof global.process)

// Export the worker instance, so we can await the activation on Storybook's runtime.
// You can use this reference to start the worker for local development as well.
export const worker =
  typeof global.process === 'undefined' && setupWorker(...handlers)
