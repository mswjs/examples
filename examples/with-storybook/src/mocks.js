import { setupWorker, rest } from 'msw'

export const worker = setupWorker(
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.json({ firstName: 'John', lastName: 'Maverick' }))
  })
)
