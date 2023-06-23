import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

import {RandomName} from './api.types';

export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: `${Config.API_BASE_URL}`}),
  keepUnusedDataFor: process.env.NODE_ENV === 'test' ? 0 : 60,
  endpoints: build => ({
    getRandomName: build.query<RandomName[], number>({
      query: size => `/name/random_name?size=${size}`,
    }),
  }),
});

export const {useGetRandomNameQuery} = api;
