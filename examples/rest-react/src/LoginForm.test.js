import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { handlers } from './mocks'
import { LoginForm } from './LoginForm'

describe('LoginForm', () => {
  // Set up the server-side requests interception
  // using the given request handlers.
  const server = setupServer(...handlers)

  beforeAll(() => {
    // Start the interception
    server.listen()
  })

  afterAll(() => {
    // Stop the interception after the tests are done
    server.close()
  })

  it('should allow a user to log in', async () => {
    render(<LoginForm />)

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'johnUser' },
    })
    fireEvent.click(screen.getByText(/submit/i))

    const userId = await screen.findByTestId('userId')
    const firstName = await screen.findByTestId('firstName')
    const lastName = await screen.findByTestId('lastName')

    expect(userId).toHaveTextContent('f79e82e8-c34a-4dc7-a49e-9fadc0979fda')
    expect(firstName).toHaveTextContent('John')
    expect(lastName).toHaveTextContent('Maverick')
  })
})
