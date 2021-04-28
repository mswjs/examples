import { rest } from 'msw'

export const handlers = [
  rest.get('https://example.com/user/:userId', (_req, res, ctx) => {
    return res(
      ctx.json({
        firstName: 'John',
        lastName: 'Maverick',
      }),
    )
  }),
]
