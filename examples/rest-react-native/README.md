# React Native Template (REST)

This repository illustrates how to use [Mock Service Worker](https://github.com/mswjs/msw) to mock a REST API for development, unit and E2E testing in a project initiated with `npx react-native init MSWReactNative --template react-native-template-typescript`.

## Technologies

- [**React Native TypeScript Template**](https://reactnative.dev/docs/typescript#getting-started-with-typescript)
- [Jest](https://jestjs.io) for running unit tests;
- [React Native Testing Library](https://github.com/callstack/react-native-testing-library) for unit test assertions;
- [Detox](https://github.com/wix/Detox) for running E2E tests;

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd rest-react-native
$ yarn pods
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

- The polyfill `react-native-url-polyfill` is required or else calling `server.start()` will result in an Error: not implemented message followed by Error: Invariant Violation: Module AppRegistry is not a registered callable module (calling runApplication)... due to the barebones React Native URL polyfill that throws Not Implemented exceptions for functions that MSW calls such as [search()](https://github.com/facebook/react-native/blob/cd347a7e0ed29ae1049e041fcb34588e1aac76f9/Libraries/Blob/URL.js#L194).
- Absolute paths must be used for handlers on React Native, otherwise `TypeError: undefined is not an object (evaluating 'window.location.href')` is raised.
- [`src/api/mocks/handlers.ts`](src/api/mocks/handlers.ts) describes request handlers to use.

### React Native

- [`src/api/mocks/server.ts`](src/api/mocks/server.ts) sets up the React Native server.
- [`./index.js`](./index.js) conditionally enables mocking in `development` environment.

### NodeJS

- [`src/api/mocks/testServer.ts`](src/api/mocks/testServer.ts) sets up the Node server to use the same mocking logic in Node as React Native.
- [`./setupJest.ts`](./setupJest.ts) enables mocking for unit tests via `beforeAll`/`afterAll` hooks and adds `node-fetch` to the `global` scope.
