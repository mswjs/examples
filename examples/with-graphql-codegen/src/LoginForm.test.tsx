import { ApolloProvider } from '@apollo/client'
import { render, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { client } from './ApolloClient'
import { LoginForm } from './LoginForm'

it('allows the user to log in', async () => {
  render(
    <ApolloProvider client={client}>
      <LoginForm />
    </ApolloProvider>,
  )

  userEvent.type(screen.getByLabelText(/username/i), 'johnUser')
  fireEvent.click(screen.getByRole('button', { name: 'Log in' }))

  const username = await screen.findByTestId('username')
  const firstName = await screen.findByTestId('firstName')
  const lastName = await screen.findByTestId('lastName')

  expect(username).toHaveTextContent('johnUser')
  expect(firstName).toHaveTextContent('John')
  expect(lastName).toHaveTextContent('Maverick')
})
