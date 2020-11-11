const { expect } = require('chai')
import { worker } from '../mocks/browser'

describe('User', function () {
  this.beforeAll(async () => {
    await worker.start()
  })

  this.afterEach(() => {
    worker.resetHandlers()
  })

  this.afterAll(() => {
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
