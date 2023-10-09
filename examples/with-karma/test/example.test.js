const { expect } = require('chai')
import { worker } from '../mocks/browser'

describe('Karma example', function () {
  this.beforeAll(async () => {
    await worker.start()
  })

  this.afterEach(() => {
    worker.resetHandlers()
  })

  this.afterAll(() => {
    worker.stop()
  })

  it('receives a mocked response to a REST API request', async () => {
    const response = await fetch('https://api.example.com/user')

    expect(response.status).to.equal(200)
    expect(response.statusText).to.equal('OK')
    expect(await response.json()).to.deep.equal({
      firstName: 'John',
      lastName: 'Maverick',
    })
  })

  it('receives a mocked response to a GraphQL API request', async () => {
    const response = await fetch('https://api.example.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query ListMovies {
            movies {
              title
            }
          }
        `,
      }),
    })
  
    expect(response.status).to.equal(200)
    expect(response.statusText).to.equal('OK')
    expect(await response.json()).to.deep.equal({
      data: {
        movies: [
          {
            title: 'The Lord of The Rings',
          },
          {
            title: 'The Matrix',
          },
          {
            title: 'Star Wars: The Empire Strikes Back',
          },
        ],
      },
    })
  })
})
