# Create React App (REST)

This repository illustrates how to use [Mock Service Worker](https://github.com/mswjs/msw) to mock a REST API for development, unit and E2E testing in Create React App project.

## Technologies

- [**Create React App**](https://create-react-app.dev)
- [Jest](https://jestjs.io) for running unit tests;
- [React Testing Library](https://github.com/testing-library/react-testing-library) for unit test assertions;
- [Cypress](https://cypress.io) for running E2E tests;

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd rest-react
```

## Running locally

```bash
$ yarn start
```

## Tests

### Unit tests

```bash
$ yarn test:unit
```

### E2E tests

```bash
$ yarn test:e2e
```

## Key points

- [`src/mocks/handlers.js`](src/mocks/handlers.js) describes request handlers to use.

### Browser

- [`src/mocks/browser.js`](src/mocks/browser.js) sets up the Service Worker.
- [`src/index.js`](src/index.js) conditionally enables mocking in `development` environment.
- [`public/mockServiceWorker.js`](public/mockServiceWorker.js) the Service Worker, created by running `npx msw init public`.

### NodeJS

- [`src/mocks/server.js`](src/mocks/server.js) sets up the "server" to use the same mocking logic in Node.
- [`src/setupTests.js`](src/setupTests.js) enables mocking for unit tests via `beforeAll`/`afterAll` hooks.
