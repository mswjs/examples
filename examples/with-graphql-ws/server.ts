import http from 'node:http'
import express from 'express'
import { createServer as createViteServer } from 'vite'
import { WebSocketServer } from 'ws'
import { useServer as applyGraphQLWebSocket } from 'graphql-ws/lib/use/ws'
import { schema } from './src/graphql.schema'

async function createServer() {
  const app = express()
  const server = http.createServer(app)
  const vite = await createViteServer()
  app.use(vite.middlewares)

  const wsServer = new WebSocketServer({
    server,
    path: '/graphql',
  })
  applyGraphQLWebSocket({ schema }, wsServer)

  await new Promise<void>((resolve) => {
    server.listen(5173, () => resolve())
  })
  console.log('http://localhost:5173')
}

createServer()
