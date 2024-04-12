import { defineConfig } from '@playwright/test'

const APP_URL = 'http://localhost:5173'

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: APP_URL,
  },
  webServer: {
    command: 'npm run dev',
    url: APP_URL,
  },
  timeout: 10_000,
})
