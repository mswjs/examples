# Playwright

This repository illustrates how to use [Mock Service Worker](https://github.com/mswjs/msw) to mock a REST API for development, unit and E2E testing in Next.js project. The purpose of this example is useage with playwirhgt, Next.js is optional.

## Technologies

- [**Playwright**](https://playwright.dev/) for running E2E tests;
- [Next.js](https://nextjs.org/) target to be tested;

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd with-playwright
```

## Running locally

```bash
$ npm i
$ npm run build
$ npm start
```

## Tests

### E2E tests

```bash
$ npm run test:e2e
```

## Key points

- [`./mocks/handlers.js`](./mocks/handlers.js) describes request handlers to use.

### Browser

- [`./mocks/browser.js`](./mocks/browser.js) sets up the Service Worker and exports `{ worker, rest }` with `window`.

### Playwright

- [`./e2e/example.spec.mjs](./example.spec.mjs) make sure we can intercept using `page.evalute` after `page.goto`.
