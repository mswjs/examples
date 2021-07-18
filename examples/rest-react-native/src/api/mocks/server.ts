import {setupServer} from 'msw/native';
import {handlers} from './handlers';

// Setup requests interception using the given handlers.
export const server = setupServer(...handlers);
