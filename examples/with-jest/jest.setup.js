// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch'

// Extend Jest "expect" functionality with Testing Library assertions.
import '@testing-library/jest-dom'

import { server } from './src/mocks/server'
import { setupMswPact } from "msw-pact";

const mswPact = setupMswPact({
  server,
  options: { consumer: "pactflow-example-consumer", providers: { ['pactflow-example-provider']: ['login'] } },
});

beforeAll(() => {
  server.listen()
})

beforeEach(() => {
  mswPact.newTest();
});

afterEach(() => {
  mswPact.verifyTest();
  server.resetHandlers()
})

afterAll(async () => {
  await mswPact.writeToFile(); // writes the pacts to a file
  mswPact.clear();
  server.close()
})
