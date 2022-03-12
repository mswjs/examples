/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import {renderWithProviders} from '../src/utils/testUtils';
import {mockedResponse} from '../src/mocks/mockedResponse';
import Config from 'react-native-config';
import {server} from '../src/mocks/server';
import {rest} from 'msw';

const {API_BASE_URL} = Config;
const mockedName = mockedResponse[0].first_name;

// Fake timers used as a workaround to avoid the jest warning
// message while testing the components that use the useQuery hook.
// Warning: "Jest did not exit one second after the test run has completed."
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test("App component should render 'Loading...' text while waiting for api response", () => {
  const {getByText} = renderWithProviders(<App />);
  const loadingText = getByText('Loading...');
  expect(loadingText).toBeDefined();
});

test('App component should render name received from api', async () => {
  const {findByText} = renderWithProviders(<App />);
  const name = await findByText(mockedName);
  expect(name).toBeDefined();
});

// server.use overrides the initial request handler with runtime request handler.
// afterEach(() => server.resetHandlers()) defined in jestSetup.js resets handlers
// back to the initial list given to the setupServer call.
test("App component should render 'Error' text when api fails", async () => {
  server.use(
    rest.get(`${API_BASE_URL}/name/random_name`, (req, res, ctx) => {
      return res(ctx.status(500), ctx.json({message: 'Internal Server Error'}));
    }),
  );
  const {findByText} = renderWithProviders(<App />);
  const errorText = await findByText('Error');
  expect(errorText).toBeDefined();
});
