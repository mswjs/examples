import { graphql } from 'msw'
import { LoginDocument } from '../graphql/generated'

export const handlers = [
  /**
   * @todo Check "msw" implementation why the types don't match.
   */
  // @ts-ignore
  graphql.mutation(LoginDocument, (req, res, ctx) => {
    // Infer the varaibles types from the generated document.
    const { username } = req.variables

    return res(
      ctx.data({
        // Infer the response type from the generated document.
        login: {
          username,
          firstName: 'John',
          lastName: 'Maverick',
        },
      }),
    )
  }),
]
