import { defineConfig } from '@playwright/test'

export default defineConfig({
  webServer: {
    command: 'pnpm dev --port 50123',
    port: 50123,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: 'http://localhost:50123',
  },
})
