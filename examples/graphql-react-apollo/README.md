# Create React App (GraphQL)

This repository illustrates how to use [Mock Service Worker](https://github.com/mswjs/msw) to mock a GraphQL API for development, unit and E2E testing in Create React App project.

## Technologies

- [**Create React App**](https://create-react-app.dev)
- [Apollo](https://www.apollographql.com) as a GraphQL client;
- [Jest](https://jestjs.io) for running unit tests;
- [React Testing Library](https://github.com/testing-library/react-testing-library) for unit test assertions;
- [Cypress](https://cypress.io) for running E2E tests;

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd graphql-react-apollo
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

- [`src/mocks.js`](src/mocks.js) describes GraphQL operations to mock.
- [`src/index.js`](src/index.js) conditionally enables mocking in `development` environment.
- [`src/setupTests.js`](src/setupTests.js) enables mocking for unit tests via `beforeAll`/`afterAll` hooks.
- [`public/mockServiceWorker.js`](public/mockServiceWorker.js) the Service Worker, created by running `node_modules/.bin/msw init public`.

