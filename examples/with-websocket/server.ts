import { WebSocketServer } from 'ws'
import { createServer as createViteServer } from 'vite'

async function createServer() {
  // Create a WebSocket server.
  const wss = new WebSocketServer({
    port: 5174,
  })

  wss.on('connection', (ws) => {
    ws.addEventListener('message', (event) => {
      const message = event.data

      wss.clients.forEach((client) => {
        client.send(message)
      })
    })
  })

  const vite = await createViteServer({
    server: {
      proxy: {
        // Proxy a relative Vite app URL to the WebSocket server.
        // This way, the client can construct a relative WebSocket URL
        // without knowing where the actual WebSocket server is running.
        '/ws': {
          target: 'ws://localhost:5174',
          ws: true,
        },
      },
    },
  })

  await vite.listen()
  vite.printUrls()
  vite.bindCLIShortcuts({ print: true })
}

createServer()
