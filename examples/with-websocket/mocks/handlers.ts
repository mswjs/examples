import { ws } from 'msw'

export const api = ws.link('ws://localhost:5173/ws')

export const handlers = [
  api.on('connection', ({ client }) => {
    client.addEventListener('message', (event) => {
      api.broadcast(event.data)
    })
  }),
]
