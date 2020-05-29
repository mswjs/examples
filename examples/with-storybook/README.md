# Storybook usage

...

## Key points

- `start-storybook -s public`, to point Storybook to our public directory with the `mockServiceWorker.js` file.
- `.storybook/preview.js`, to use a custom `addDecorator` that wraps each story and await the mocks before rendering.
