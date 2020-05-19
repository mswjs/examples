import { setupWorker, rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        username,
        firstName: 'John',
      })
    )
  }),
]

export const worker = setupWorker(...handlers)
