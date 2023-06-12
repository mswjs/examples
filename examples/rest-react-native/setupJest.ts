/* eslint-disable no-undef */
import {server} from './src/api/mocks/testServer';

beforeAll(() => {
  global.fetch = require('node-fetch');
  // Enable the mocking in tests.
  server.listen();
});

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers();
});

afterAll(() => {
  // Clean up once the tests are done.
  server.close();
});
