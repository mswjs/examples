import { graphql, HttpResponse, ws } from 'msw'

const api = graphql.link('http://localhost:4000/graphql')

const books = [
  {
    id: '1',
    title: 'Brave New World',
  },
  {
    id: '2',
    title: '1984',
  },
]

function wsLink(url: string) {
  const subscriptions = new Set()

  const websocket = ws.link(url)
  const handler = websocket.addEventListener('connection', ({ client }) => {
    client.addEventListener('message', (event) => {
      if (typeof event.data !== 'string') {
        return
      }

      const message = JSON.parse(event.data)

      switch (message.type) {
        case 'connection_init': {
          // Acknowledge the connection first so Apollo client keeps it open.
          client.send(JSON.stringify({ type: 'connection_ack' }))
          break
        }

        case 'subscribe': {
          // Keep track of the subscription ids because you need to
          // dispatch a "next" event with the payload and a matching id.
          subscriptions.add(message.id)

          /**
           * @todo Parse the subscription payload to get `query` and `variables`.
           * Then, parse the `query` to extract operation name.
           */
          break
        }

        case 'complete': {
          // Clear the ids for subscriptions that are terminated.
          subscriptions.delete(message.id)
          break
        }
      }
    })
  })

  return {
    handler,
    publish(payload: { data?: Record<string, unknown> }, filter?: any) {
      subscriptions.forEach((subscriptionId) => {
        websocket.broadcast(
          JSON.stringify({
            id: subscriptionId,
            payload,
            type: 'next',
          }),
        )
      })
    },
    subscription() {},
  }
}

const subscriptions = wsLink('ws://localhost:4000/graphql')

export const handlers = [
  // Add the WebSocket handler so MSW forwards connection events to it.
  subscriptions.handler,

  api.query('GetBooks', () => {
    return HttpResponse.json({
      data: {
        books,
      },
    })
  }),

  api.mutation('AddBook', ({ variables }) => {
    const newBook = {
      id: String(books.length + 1),
      title: variables.title,
    }

    books.push(newBook)

    subscriptions.publish(
      {
        data: { bookAdded: newBook },
      },
      // ({ allSubscriptions }) => {
      //   return allSubscriptions.filter((subscription) => {
      //     return subscription.operationName === 'OnBookAdded'
      //   })
      // },
    )

    return HttpResponse.json({
      data: {
        addBook: newBook,
      },
    })
  }),
]
