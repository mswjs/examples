# Jest (JSDOM) + MSW

[Mock Service Worker](https://github.com/mswjs/msw) usage example with [Jest](https://github.com/jestjs/jest) and [JSDOM](https://github.com/jsdom/jsdom).

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/mswjs/examples/tree/main/examples/with-jest-jsdom)

## General

Using MSW with JSDOM requires additional configuration. Unfortunately, JSDOM (`jest-environment-jsdom`, to be precise) has a number of issues that prevent you from running valid JavaScript code in tests.

- JSDOM uses _browser_ module resolution while running in Node.js. This doesn't work with the packages that provide conditional exports, like MSW does.
- JSDOM strips off all Node.js globals, like `fetch`. This means you cannot use APIs that have been available in the browser and Node.js for years until they've been explicitly added to JSDOM.

Please see the setup steps below to properly configure Jest when using in combination with JSDOM.

### Module resolution

Opt-out from the browser module resolution in JSDOM by setting the `testEnvironmentOptions.customExportConditions` option in [`jest.config.ts`](./jest.config.ts). This will force JSDOM to use Node.js module resolution, correctly resolving export conditions of third-party packages.

> Despite JSDOM predenting to be a browser environment, your code _still runs in Node.js_. Using the browser module resolution can cause all sorts of import issues with third-party packages that depend on the standard Node.js API.

### Polyfills

Create a [jest.polyfills.ts](./jest.polyfills.ts) file in your project (you can copy it) and include it in the `setupFiles` option in `jest.config.ts`. This will re-add some of the Node.js globals (and browser) missing in JSDOM, like `fetch`, `Request`, `Response`, etc.
