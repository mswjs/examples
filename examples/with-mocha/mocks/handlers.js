const { rest } = require('msw')

export const handlers = [
  rest.post('http://example.com/api/getList', (req, res, ctx) => {
    return res(
      ctx.set('access-control-allow-origin', '*'),
      ctx.json({
        msgCode: 0,
        msgDesc: 'Request processed successfully',
        data: {
          data: {
            createdBy: 'CJ',
            createdDate: '02/18/2021',
          },
        },
      }),
    )
  }),
  rest.post('http://example.com/api/getChildList', (req, res, ctx) => {
    return res(
      ctx.set('access-control-allow-origin', '*'),
      ctx.json({
        msgCode: 0,
        msgDesc: 'Request processed successfully',
        data: {
          data: {
            createdBy: 'CJ Child',
            createdDate: '02/18/2021',
          },
        },
      }),
    )
  }),
]
