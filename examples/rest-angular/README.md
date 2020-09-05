# Angular (REST)

This repository illustrates how to use [Mock Service Worker](https://github.com/mswjs/msw) to mock a REST API for development, unit and E2E testing in an Angular project.

## Technologies

- [Jest](https://jestjs.io) for running unit tests;
- [Angular Testing Library](https://github.com/testing-library/angular-testing-library) for unit test assertions;
- [Cypress](https://cypress.io) for running E2E tests;
- [Cypress Testing Library](https://github.com/testing-library/cypress-testing-library) for end to end test assertions;

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd rest-angular
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

- [`src/mocks/handlers.js`](src/mocks/handlers.ts) describes request handlers to use.

### Browser

- [`src/mocks/browser.ts`](src/mocks/browser.ts) sets up the Service Worker.
- [`src/main.ts`](src/main.ts) conditionally enables mocking in `development` environment.
- [`src/mockServiceWorker.js`](src/mockServiceWorker.js) the Service Worker, created by running `npx msw init src`.
- Add `src/mockServiceWorker.js` file to the `assets` list in your `angular.json` file.

### NodeJS

- [`src/mocks/server.ts`](src/mocks/server.ts) sets up the "server" to use the same mocking logic in Node.
- [`src/setup-jest.ts`](src/setup-jest.ts) enables mocking for unit tests via `beforeAll`/`afterAll` hooks.
