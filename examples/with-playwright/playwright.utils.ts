import { test as testBase } from '@playwright/test'
import { createNetworkFixture, type NetworkFixture } from '@msw/playwright'
import { handlers } from './app/handlers.js'

interface Fixtures {
  network: NetworkFixture
}

// Set up `test` with the msw playwright binding following https://github.com/mswjs/playwright
export const test = testBase.extend<Fixtures>({
  // Create a fixture that will control the network in your tests.
  network: createNetworkFixture({
    initialHandlers: handlers,
  }),
})
