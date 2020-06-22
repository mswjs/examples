import { graphql } from 'msw'

export const handlers = [
  // Capture a "Login" mutation
  graphql.mutation('Login', (req, res, ctx) => {
    const { username } = req.variables

    if (username === 'non-existing') {
      return res(
        ctx.errors([
          {
            message: 'User not found',
            extensions: {
              id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
            },
          },
        ])
      )
    }

    return res(
      ctx.data({
        user: {
          __typename: 'User',
          id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
          firstName: 'John',
          lastName: 'Maverick',
        },
      })
    )
  }),
]
