import React from 'react'
import {Provider} from 'react-redux'
import {render, fireEvent, screen} from '@testing-library/react'
import {LoginForm} from './LoginForm'
import {store} from './store'

describe('LoginForm', () => {
  it('should allow a user to log in', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    )

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: {value: 'johnUser'},
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
