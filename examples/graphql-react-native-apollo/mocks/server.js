// This module enabled requests interception in NodeJS (i.e. "jest")
// using the same request handlers as in development.
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

export const server = setupServer(...handlers)
