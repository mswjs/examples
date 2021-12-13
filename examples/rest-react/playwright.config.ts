import path from 'path'
import { devices, PlaywrightTestConfig } from '@playwright/test'

export const playwrightTestConfig: PlaywrightTestConfig = {
  preserveOutput: 'always',
  testDir: path.join(process.cwd(), 'e2e'),
  testMatch: '**/*.e2e.ts',
  timeout: 30 * 1000,
  outputDir: path.join(process.cwd(), 'dist', 'e2e', 'out'),
  reporter: [
    [
      'html',
      {
        outputFolder: path.join(process.cwd(), 'dist', 'e2e', 'html'),
        open: 'never',
      },
    ],
    ['list'],
  ],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3000',
    trace: 'retry-with-trace',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        trace: 'on',
        video: 'on',
        screenshot: 'on',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Tablet Android',
      use: {
        trace: 'on',
        video: 'on',
        screenshot: 'on',
        ...devices['Galaxy Tab S4'],
      },
    },
    {
      name: 'Mobile Android',
      use: {
        trace: 'on',
        video: 'on',
        screenshot: 'on',
        ...devices['Pixel 5'],
      },
    },
  ],
  retries: 2,
  webServer: {
    command: 'react-scripts start',
    port: 3000,
    timeout: 30 * 1000,
    reuseExistingServer: true,
  },
}

export default playwrightTestConfig
