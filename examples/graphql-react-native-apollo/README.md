# React Native (GraphQL)

This repository illustrates how to use [Mock Service Worker](https://github.com/mswjs/msw) to mock a GraphQL server for development and testing in a React Native project.

## Technologies

- [**React Native**](https://reactnative.dev)
- [React Testing Library](https://github.com/testing-library/react-testing-library) for testing assertions;

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd graphql-react-native-apollo
```

## Running locally

```bash
$ yarn start
```

### Android

```bash
$ yarn android
```

### iOS

```bash
$ yarn ios
```

## Tests

```bash
$ yarn test
```

## Key points

- [`mocks/handlers.js`](mocks/handlers.js) describes request handlers to use.

### React Native

- [`mocks/native.js`](mocks/native.js) enables request interception in React Native runtime;
- [`index.js`](index.js) conditionally enables mocking in `development` environment.

### NodeJS

- [`mocks/server.js`](mocks/server.js) enables requests interceptions in NodeJS (i.e. for tests with jest);
- [`jest.setup.js`](jest.setup.js) configures test runner to use API mocking in tests.
