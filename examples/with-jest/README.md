# Jest

This repository illustrates how to use [Mock Service Worker](https://github.com/mswjs/msw) to mock REST API with a manual Jest setup.

## Technologies

- [Jest](https://jestjs.io/) for running unit tests.
- [whatwg-fetch](https://github.com/github/fetch) for polyfilling `window.fetch` in tests.
- [Babel](https://babeljs.io/) to allow JSX usage in tests.
- [React Testing Library](https://github.com/testing-library/react-testing-library) for unit test assertions.

## Getting started

```sh
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd with-jest
```

## Running locally

```sh
$ yarn test
```

## Key points

- [`src/mocks/handlers.js`](src/mocks/handlers.js) describes what requests to mock.
- [`src/mocks/server.js`](src/mocks/server.js) enabled requests interception in Node.js.

### Jest

- [`jest.config.js`](jest.config.js) configures Jest.
- [`jest.setup.js`](jest.setup.js) imports `fetch` polyfill (`whatwg-fetch`), configures React Testing Library, and enables requests interception.
