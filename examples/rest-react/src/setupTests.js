// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
import { setupServer } from 'msw/node'
import { handlers } from './mocks'

// Setup requests interception using the given handlers.
const server = setupServer(...handlers)

beforeAll(() => {
  // Enable mocking.
  server.listen()
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})
