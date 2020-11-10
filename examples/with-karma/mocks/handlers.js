// handlers.js
const { rest } = require('msw')

export const handlers = [
  rest.get('/foo', async (response, request, context) =>
    response(context.text('foo')),
  ),
]
