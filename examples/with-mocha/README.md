# Karma

Usage example of [Mock Service Worker](https://github.com/mswjs/msw) with Mocha.

## Technologies

- [Mocha](https://mochajs.org/)
- [React](https://reactjs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Babel](https://babeljs.io/)

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd examples/with-mocha
```

## Running locally

```bash
$ npm test
```

## Key points

### Mocha configuration

- [`.mocharc.yaml`](./.mocharc.yaml) configures includes the test setup files and initializes the server to intercept requests

### Mock setup

- [`mocks/handlers.js`](./mocks/handlers.js) describes request handlers to use.
- [`mocks/server.js`](./mocks/server.js) sets up the mock server.

## Known issues

As of right now, `parallel` mode is not supported but this may change pending [this issue](https://github.com/mswjs/msw/issues/474). By default, mocha runs tests sequentially, so this example will work for normal runs as well as in `watch` mode.
