import {rest} from 'msw';
import Config from 'react-native-config';

import {mockedResponse} from './mockedResponse';

export const handlers = [
  rest.get(`${Config.API_BASE_URL}/name/random_name`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedResponse));
  }),
];
