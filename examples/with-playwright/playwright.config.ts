import { defineConfig } from '@playwright/test'

export default defineConfig({
  webServer: {
    command: 'pnpm dev --port 50789',
    url: 'http://localhost:50789',
  },
  use: {
    baseURL: 'http://localhost:50789',
    launchOptions: {
      devtools: true,
    },
  },
})
