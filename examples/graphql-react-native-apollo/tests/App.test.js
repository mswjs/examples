import React from "react"
import { ApolloProvider } from "@apollo/client";
import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react-native';
import { MyRootComponent } from '../App';
import client from '../client'

test('renders character details', async () => {
  const { getByTestId, getByText } = render(
    <ApolloProvider client={client}>
      <MyRootComponent />
    </ApolloProvider>
  );

  await waitFor(() => expect(getByTestId('loading')).toBeTruthy())
  await waitForElementToBeRemoved(() => getByTestId('loading'));
  await waitFor(() => expect(getByText('Rick Sanchez')).toBeTruthy());
});
