import { setupWorker, rest } from 'msw'

// Export the worker reference, so we can await the activation on Storybook's runtime.
// You can use this reference to start the worker for local development as well.
export const worker = setupWorker(
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.json({ firstName: 'John', lastName: 'Maverick' }))
  })
)
