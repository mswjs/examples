# Svelte + MSW

[Mock Service Worker](https://github.com/mswjs/msw) usage example with [Svelte](https://github.com/sveltejs/svelte).

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/mswjs/examples/tree/main/examples/with-svelte)

## General

> Both client-side and server-side integrations of MSW are implemented using [Hooks](https://kit.svelte.dev/docs/hooks).

- Describe the request handlers in [`src/mocks/handlers.ts`](./src/mocks//handlers.ts).

## Client-side

1. Generate the worker script (`mockServiceWorker.js`) in the `./static` directory using the following command:

```sh
npx msw init ./static
```

2. Create [`src/mocks/browser.ts`](./src/mocks/browser.ts) and configure the `worker` instance.
3. In [`src/hooks.client.ts`](./src/hooks.client.ts), import and start the `worker` from `src/mocks/browser.ts`.

## Server-side

The server-side integration allows you to intercept outgoing requests from the `load` functions of your Svelte pages.

1. Create [`src/mocks/node.ts`](./src/mocks/node.ts) and configure the `server` instance.
1. In [`src/hooks.server.ts`](./src/hooks.server.ts), import and start the `server` from `src/mocks/node.ts`.
