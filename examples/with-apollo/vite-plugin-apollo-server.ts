import http from 'node:http'
import type { Plugin } from 'vite'
import express from 'express'
import cors from 'cors'
import { expressMiddleware } from '@apollo/server/express4'
import { WebSocketServer } from 'ws'
import { useServer } from 'graphql-ws/lib/use/ws'
import { server, schema } from './server/server.js'

export function apolloServer(): Plugin {
  return {
    name: 'vite-plugin-apollo-server',
    async config() {
      const app = express()
      const httpServer = http.createServer(app)

      const wsServer = new WebSocketServer({
        server: httpServer,
        path: '/graphql',
      })
      useServer({ schema }, wsServer)

      await server.start()

      app.use(
        '/graphql',
        cors({ origin: '*' }),
        express.json(),
        expressMiddleware(server),
      )

      await new Promise<void>((resolve, reject) => {
        httpServer.listen(4000, () => {
          resolve()
        })
        httpServer.on('error', reject)
      })

      console.log('Apollo Server ready at http://localhost:4000')
    },
    async closeBundle() {
      await server.stop()
    },
  }
}
