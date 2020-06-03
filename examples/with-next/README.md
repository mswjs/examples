# NextJS

This repository illustrates how to use [Mock Service Worker](https://github.com/mswjs/msw) to mock an API in NextJS. It covers both client-side requests (requests issued by your components) and server-side requests (e.g. requests in `getServerSideProps`) to achieve the full-scale mocking.

## Technologies

- [NextJS](https://nextjs.org)

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd examples/with-next
```

## Running locally

```bash
yarn dev
```

## Key points

- [`mocks/handlers.js`](./mocks/handlers.js) describes which requests to mock. Re-used for both client- and server-side mocking.

### Client-side

- [`pages/_app.js`](./pages/_app.js) defers application's rendering until mocks are ready.
- [`mocks/browser.js`](./mocks/browser.js) declares client-side requests interception.

### Server-side

- [`mocks/server.js`](./mocks/server.js) declares a server-side request interception.
- [`next.config.js`](./next.config.js) invokes server-side requests interception at proper build phases.