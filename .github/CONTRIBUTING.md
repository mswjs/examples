# Contributing

## Adding a new example

### 1. Fork repository

Being in the [Examples repository](https://github.com/mswjs/examples), click on the "Fork" button next to the stargazers count. Once forked, the `examples` repository will be available for cloning from your remote:

```bash
$ git clone <YOUR_FORK_URL>
```

> For example: `git clone https://github.com/john.maverick/examples`

### 2. Create example branch

```bash
$ cd examples
$ git checkout -b example-name
```

### 3. Create example directory

```bash
$ mkdir examples/<EXAMPLE_NAME>
```

Give a short name of the example you are about to add. If it's a usage example with a major framework, use the `<API_TYPE>-<FRAMEWORK_NAME>` format (i.e. `rest-vue`, or `graphql-angular`). If it's a targeted usage example with a library, use the `with-<LIBRARY_NAME>` format (i.e. `with-playroom`).

### 4. Initialize & implement example

Initialize a new NPM package in the newly created example directory.

```bash
$ cd examples/<EXAMPLE_NAME>
$ npm init # or yarn init
```

Install any necessary dependencies to showcase your example. 

> Keep in mind that the point of your example is to be concise. Do not add irrelevant configurations, create confusing folder structures, or generally include code that is not absolutely necessary for that example.

If you are adding an in-browser example, open the `package.json` and add the following `script` commands:

```json
{
  "scripts": {
    "update": "npx msw init public",
  }
}
```

- `update` command copies the latest worker script into your example. Align the `public` argument value, in case it differs from the `./public` directory.

**You don't need to have the `update` script when adding a NodeJS-only usage example.**

### 5. Add tests

Every present example must have tests. Tests serve both illustrative and verificative purpose, running against each `msw` release to ensure it doesn't break any usage scenarios.

The `package.json` of your example project must have the following `script` commands:

```json
{
  "scripts": {
    "test": "..."
  }
}
```

Add the relevant tests depending on your usage example. Remember to keep the overall setup fairly simple and straightforward to navigate through.

- Please use [Jest](https://jestjs.io/) for unit/integration tests, if necessary.
- Please use [Cypress](https://www.cypress.io/) for E2E tests, if necessary.

Verify your tests are passing by running:

```bash
$ yarn test
```

> Refer to existing examples to see how testing is implemented.

### 6. Write a README

```bash
$ touch README.md
```

> See existing [README](https://github.com/mswjs/examples/tree/master/examples/rest-react) for the reference.

In the created `README.md` give a short description about the example, and include the following sections:

1. Technologies. List vital technologies used in the example.
1. Getting started. Copy and fill in this template:

```bash
$ git clone https://github.com/mswjs/examples.git
$ cd examples
$ yarn
$ cd <EXAMPLE_NAME>
```

> Replace `<EXAMPLE_NAME>` with the directory name of your example defined earlier.

3. Tests. List how to run all the levels of testing you've introduced.
4. Key points. Reference the files necessary to achieve current integration. See existing examples for reference.

### 7. Submit example

Once your example is ready and the tests are written and passing, push the changes into your remote and create a Pull request on GitHub. Our team will be happy to provide you with the feedback to ensure your example is just awesome.

Thank you!