# ReactNativeWithRTKQ
This repository illustrates how to use [Mock Service Worker](https://mswjs.io/) to mock a REST API handled with [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) in [React Native](https://reactnative.dev/) project for unit and integration tests that run in Node.

Note that since React Native does not execute in a browser environment, you cannot run a Service Worker alongside your application. You can use msw with React Native only for NodeJS integration.

## Technologies
- [**React Native CLI**](https://reactnative.dev/docs/environment-setup) environment
- [Jest](https://jestjs.io) for running unit tests
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/) for unit test assertions
- [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [node.js](https://nodejs.org/)

## Getting started

These instructions will get you a copy of the project up and running on your local machine.

### Clone project repository
   1. Clone examples repo into your local machine:
      - with https  
   `git clone https://github.com/mswjs/examples.git`
      - with ssh  
   `git clone git@github.com:mswjs/examples.git`
      - or with GitHub CLI  
   `gh repo clone mswjs/examples`

   2. Copy `examples/ReactNativeWithRTKQ` under your git directory

### Prepare repository
   1. Install dependencies for `ReactNativeWithRTKQ`:
      - with npm  
   `npm install`
      - or with yarn  
   `yarn install`
   2. Create `.env` file under the root directory of the project ([see example](#env-file-example))

## Running locally
   1. Start your virtual or plug or physical device
   2. Start React Native  
   `yarn start`
   3. Start app  
   `yarn android`

## Tests
### Unit tests
1. Run tests in the interactive watch mode
   - with npm  
   `npm test`
   - or with yarn  
   `yarn test`

## Key points
 - [`src/store.ts`](src/store.ts) redux store
 - [`src/services/api.ts`](src/services/api.ts) RTK Query API
 - [`.env`](.env) environment variables (this project utilizes [`react-native-config`](https://github.com/luggit/react-native-config) module)
 - [`__mocks__/react-native-config.js`](__mocks__/react-native-config.js) mocked environment variables
 - [`jestSetup.js`](jestSetup.js) jest setup file
 - [`src/mocks/handlers.ts`](src/mocks/handlers.ts) MSW request handlers
 - [`src/mocks/server.ts`](src/mocks/server.ts) MSW server 

## .env file example:

```
API_BASE_URL=https://random-data-api.com/api
```
