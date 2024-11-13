# Jest (JSDOM) + MSW

[Mock Service Worker](https://github.com/mswjs/msw) usage example with [Jest](https://github.com/jestjs/jest) and [JSDOM](https://github.com/jsdom/jsdom).

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/mswjs/examples/tree/main/examples/with-jest-jsdom)

## General

Using MSW with JSDOM requires additional configuration. Unfortunately, JSDOM (`jest-environment-jsdom`, to be precise) has a number of issues that prevent you from running valid JavaScript code in tests.

- JSDOM uses _browser_ module resolution while running in Node.js. This doesn't work with the packages that provide conditional exports, like MSW does.
- JSDOM strips off all Node.js globals, like `fetch`. This means you cannot use APIs that have been available in the browser and Node.js for years until they've been explicitly added to JSDOM.

Please see the setup steps below to properly configure Jest when using in combination with JSDOM.

## Custom Jest environment

Use the [`jest-fixed-jsdom`](https://github.com/mswjs/jest-fixed-jsdom) custom environment for your JSDOM tests. That environment is a superset of JSDOM with a few important modifications:

- Ensures the module resolution is set to Node.js, not the browser (`customExporConditions`);
- Restores the global functions and classes present in the browser (e.g. `fetch`, `structuredClone`, etc.).

See [`jest.config.ts`](./jest.config.ts) for the configuration reference.
