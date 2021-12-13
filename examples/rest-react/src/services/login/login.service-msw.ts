import { rest } from 'msw'

import type { User } from '../../models/users/user.model'
import type { LoginUserPayload } from '../../models/login/login.model'

export const handlers = [
  rest.post<string>('/login', (req, res, ctx) => {
    const { username } = JSON.parse(req.body) as LoginUserPayload

    const responseBody: User = {
      id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
      username,
      firstName: 'John',
      lastName: 'Maverick',
    }

    return res(ctx.json(responseBody))
  }),
]
