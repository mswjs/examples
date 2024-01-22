# Jest + JSDOM + MSW

[Mock Service Worker](https://github.com/mswjs/msw) usage example with [Jest](https://github.com/jestjs/jest) and [JSDOM](https://github.com/jsdom/jsdom).

Please examine [jest.config.ts](./jest.config.ts) and [jest.polyfills.ts](./jest.polyfills.ts) carefully!
JSDOM requires additional patching of the Node internals compared to running Jest without JSDOM.

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/mswjs/examples-new/tree/main/examples/with-jest-and-jsdom)
