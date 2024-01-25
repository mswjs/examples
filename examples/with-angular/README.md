# Angular + MSW

[Mock Service Worker](https://github.com/mswjs/msw) usage example with [Angular](https://github.com/angular/angular).

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/mswjs/examples/tree/main/examples/with-angular)

## Common

- Describe the network behavior in [`src/mocks/handlers.ts`](./src/mocks/handlers.ts).

## Client-side

1. Create [`src/mocks/browser.ts`](./src/mocks/browser.ts) and configure the `worker` instance.
1. In [`src/main.ts`](./src/main.ts), start the worker instance. Defer your application's rendering by implementing a `prepareApp()` function.
