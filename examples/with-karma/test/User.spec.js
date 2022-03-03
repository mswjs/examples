const { expect } = require('chai')
import { worker } from '../mocks/browser'
import { setupMswPact } from "msw-pact";

const mswPact = setupMswPact({
  worker,
  options: { consumer: "pactflow-example-consumer", providers: { ['pactflow-example-provider']: ['login'] } },
});

describe('User', function () {
  this.beforeAll(async () => {
    // See https://github.com/mswjs/examples/issues/56#issuecomment-856521932
    const registration = await worker.start();
    await registration.update();
  })

  this.beforeEach(() => {
    mswPact.newTest();
  });

  this.afterEach(() => {
    mswPact.verifyTest();
    worker.resetHandlers()
  })

  this.afterAll(async() => {
    // await mswPact.writeToFile(); // writes the pacts to a file
    mswPact.clear();
    worker.stop()
  })

  it('handles successful user login', async () => {
    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'john.maverick',
      }),
    })
    const data = await res.json()

    expect(data).to.deep.equal({
      id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      username: 'john.maverick',
      firstName: 'John',
      lastName: 'Maverick',
    })
  })
})
