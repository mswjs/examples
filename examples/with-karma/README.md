# Karma

Usage example of [Mock Service Worker](https://github.com/mswjs/msw) with Karma test runner.

## Technologies

- [Karma](https://karma-runner.github.io)

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd examples/with-karma
```

## Running locally

```bash
$ npm test
```

## Key points

### Karma configuration

- [`karma.conf.js`](./karma.conf.js) configures the `proxies` option to serve the `/mockServiceWorker.js` file from the base directory during test runs.

### Mock setup

- [`mocks/handlers.js`](./mocks/handlers.js) describes request handlers to use.
- [`mocks/browser.js`](./mocks/browser.js) sets up the Service Worker.
