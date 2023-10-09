/**
 * @vitest-environment node
 */

it('receives a mocked response to a REST API request', async () => {
  const response = await fetch('https://api.example.com/user')

  expect(response.status).toBe(200)
  expect(response.statusText).toBe('OK')
  expect(await response.json()).toEqual({
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
        query GetUser {
          user {
            firstName
            lastName
          }
        }
      `,
    }),
  })

  expect(response.status).toBe(200)
  expect(response.statusText).toBe('OK')
  expect(await response.json()).toEqual({
    data: {
      user: {
        firstName: 'John',
        lastName: 'Maverick',
      },
    },
  })
})
