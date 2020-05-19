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

    const firstName = await screen.findByTestId('firstname')
    const username = await screen.findByTestId('username')

    expect(firstName).toHaveTextContent('John')
    expect(username).toHaveTextContent('johnUser')
  })
})
