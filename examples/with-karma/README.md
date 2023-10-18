# Karma + MSW

[Mock Service Worker](https://github.com/mswjs/msw) usage example with [Karma](https://github.com/karma-runner/karma).

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/mswjs/examples-new/tree/main/examples/with-karma)

## Key points

### 1. Generate the worker script

```sh
npx msw init ./test
```

### 2. Configure Karma

#### Specify the base path

In [`karma.conf.js`](./karma.conf.js), add set the `basePath` property to `./test` (the test directory). This has to be the test runner's base path in order for it to serve the worker script generated in the previous step.

#### Proxy the worker script request

In [`karma.conf.js`](./karma.conf.js), add a `proxies` property and list the `/mockServiceWorker.js` resource path to proxy the worker script generated in the `./test` directory.

This is necessary so that root-level requests to `/mockServiceWorker.js` are resolved relatively to the Karma's prepended `/base/` path prefix.
