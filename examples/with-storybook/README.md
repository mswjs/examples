# Storybook usage

## Technologies

- [React](https://reactjs.org)
- [Storybook](https://storybook.js.org/)

## Getting started

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd examples/with-storybook
```

## Running locally

```bash
$ yarn storybook
```

> Navigate to [`http://localhost:6006`](http://localhost:6006) to inspect the running Storybook.

## Key points

### Serve static files

In order to register the Service Worker responsible for API mocking the worker file must be available in our Storybook. 

**Provide the path to your public directory as a value of the `-s` option when running Storybook:**

```json
{
  "scripts": {
    "storybook": "start-storybook -p 6006 -s public"
  }
}
```

> The `-s public` option points to the relative `./public` directory that contains our Service Worker.

### Start the mocking

**To start the mocking before each story, create a [`.storybook/preview.js`](.storybook/preview.js) and call `worker.start()` there.**
