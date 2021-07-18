import {rest} from 'msw';
import {login} from '../endpoints';

type LoginRequest = {
  username: string;
};

// NOTE: Absolute paths must be used for handlers on React Native, otherwise
// TypeError: undefined is not an object (evaluating 'window.location.href')
// is raised.
export const handlers = [
  rest.post(login, (req, res, ctx) => {
    const {username} = req.body as LoginRequest;

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      }),
    );
  }),
];
