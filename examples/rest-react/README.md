# Create React App (REST)

This repository illustrates how to use [Mock Service Worker](https://github.com/mswjs/msw) to mock a REST API for development, unit and E2E testing in Create React App project.

## Technologies

- [**Create React App**](https://create-react-app.dev)
- [Jest](https://jestjs.io) for running unit tests;
- [React Testing Library](https://github.com/testing-library/react-testing-library) for unit test assertions;
- [Playwright](https://playwright.dev) for running E2E tests;

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd rest-react
```

## Running locally

```bash
yarn start
```

## Tests

### Unit tests

```bash
yarn test
```

### E2E tests

```bash
yarn e2e
yarn e2e:report
```

## Key points

- [`src/mocks/handlers.msw.ts`](src/mocks/handlers.msw.ts) describes request handlers to use.

### Browser

- [`src/mocks/browser.msw.ts`](src/mocks/browser.msw.ts) sets up the Service Worker.
- [`src/mocks/index.ts`](src/mocks/index.ts) conditionally enables mocking in `development` environment.
- [`public/mockServiceWorker.js`](public/mockServiceWorker.js) the Service Worker, created by running `msw init public`.

### NodeJS

- [`src/mocks/server.msw.ts`](src/mocks/server.msw.ts) sets up the "server" to use the same mocking logic in Node.
- [`src/setupTests.ts`](src/setupTests.ts) enables mocking for unit tests via `beforeAll`/`afterAll` hooks.
