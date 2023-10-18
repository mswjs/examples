import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'pnpm dev --port 4272',
    port: 4272
  },
  testDir: './e2e',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
