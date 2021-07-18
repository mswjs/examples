import {rest} from 'msw';

type LoginRequest = {
  username: string;
};

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
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
