import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { apolloServer } from './vite-plugin-apollo-server.js'

export default defineConfig({
  plugins: [react(), apolloServer()],
})
