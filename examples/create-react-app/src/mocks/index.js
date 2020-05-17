import { setupWorker, rest } from 'msw'
import userMocks from './user'

export const worker = setupWorker(
  ...userMocks,

  rest.get('https://api.github.com/users/:username', (req, res, { json }) => {
    const { username } = req.params

    return res(
      json({
        avatar_url: 'https://i.imgflip.com/wnv7r.jpg',
        login: username,
        name: 'John Maverick',
        public_repos: Math.ceil(Math.random() * 100),
      })
    )
  })
)
