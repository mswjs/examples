# WebSocket + MSW

[Mock Service Worker](https://github.com/mswjs/msw) usage example with the global [WHATWG `WebSocket` API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) on the client and [`ws`](https://github.com/websockets/ws) on the server.

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/mswjs/examples/tree/main/examples/with-websocket)

- [MSW](https://mswjs.io/docs)
- [Vite](https://vitejs.dev)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev/)

## General

- Describe the network behavior in [`src/mocks/handlers.ts`](./src/mocks/handlers.ts).

## Client-side

1. Create [`src/mocks/browser.ts`](./src/mocks/browser.ts) and configure the `worker` instance.
1. In [`src/main.tsx`](./src/main.tsx), start the worker instance. Defer your application's rendering by implementing a `enableMocking()` function.
1. In the [`.env`](./.env) file, control whether the application is running against mocks or the actual WebSocket server via the `VITE_USE_MOCKS` environment variable.

## Integration tests

> Node.js v18 does not yet ship a stable global `WebSocket` API. To test a code that relies on that API in Node.js, you have to polyfill the `WebSocket` class using `undici`.
>
> 1. Install `undici`.
> 1. Create [`vitest.setup.ts`](./vitest.setup.ts), import `WebSocket` from `unidici` and set it as the value of `globalThis.WebSocket`.
> 1. In [`vite.config.ts`](./vite.config.ts), set the `test.setupFiles` option to point to the [`vitest.setup.ts`](./vitest.setup.ts) file.

1. Create [`src/mocks/server.ts`](./src/mocks/server.ts) and configure the `server` instance.
1. In [`src/App.test.tsx`](./src/App.test.tsx), import the `server` instance and the `api` event handler. Use them in the tests to override WebSocket client and server behaviors.

## E2E tests

Find the end-to-end test with Playwright and MSW in [`e2e/App.test.ts`](./e2e/App.test.ts). No special setup is required to run MSW in Playwright since it runs as a part of the application itself via [`src/main.tsx`](./src/main.tsx) (`enableMocking()`).
