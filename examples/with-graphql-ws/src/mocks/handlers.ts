import { ws } from 'msw'

const server = ws.link('ws://localhost:5173/graphql')

export const handlers = [
  server.on('connection', ({ client, server }) => {
    server.connect()
    server.addEventListener('message', (event) => {
      console.warn('<-', event.data)
    })
    client.addEventListener('message', (event) => {
      console.log('->', event.data)
      server.send(event.data)
    })
  }),
]
