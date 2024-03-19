import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

if (import.meta.env.DEV) {
  await worker.start({
    onUnhandledRequest(request, print) {
      if (!/src|vite/.test(request.url)) {
        print.warning()
      }
    },
  })
}
