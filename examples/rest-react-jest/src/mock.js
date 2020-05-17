import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = JSON.parse(req.body)

    return res(
      ctx.json({
        username,
        firstName: 'John',
      })
    )
  }),
]
