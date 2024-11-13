# Remix + MSW

[Mock Service Worker](https://github.com/mswjs/msw) usage example with [Remix](https://github.com/remix-run/remix).

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/mswjs/examples/tree/main/examples/with-remix)

## General

### Create `./mocks` under `./app`

Remix automatically watches the `./app` directory for changes. If you want for your changes to API mocks to be picked up by Remix's dev server, place the `./mocks` directory in the `./app`.

```sh
mkdir ./app/mocks
```

> If you don't wish or otherwise can't do this, modify `remix.config.js` appropriately to also watch the directory with your mocks.

## Client-side integration

### 1. Copy the worker script

```
npx msw init ./public
```

### 2. Set up browser integration

```sh
touch mocks/browser.ts
```

See [`mocks/browser.ts`](./app/mocks/browser.ts) module for reference.

### 3. Defer application rendering

- `entry.client.tsx` create a `prepareApp` and defer the rendering.
- `tsconfig.json` set the `module` to `esnext` to support dynamic `import()` statements.

## Server-side integration

### 1. Set up server-side integration

```sh
touch mocks/node.ts
```

> Unlike regular Node.js integrations, we will have to write a bit of custom setup logic so that Remix could digest the changes we make to our handlers while developing the app.

- See [`mocks/node.ts`](./app/mocks/node.ts) for the server-side setup.

### 2. Enable mocking

In [`entry.server.tsx`](./app/entry.server.tsx), import the `handlers.ts` and enable mocking by calling `server.listen()` from the `node.ts` setup.
