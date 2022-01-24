import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    return res(ctx.json({ success: true }))
  }),
  rest.get('/books', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
          title: 'Lord of the Rings',
          author: 'John Maverick',
          text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
        },
      ]),
    )
  }),
]
