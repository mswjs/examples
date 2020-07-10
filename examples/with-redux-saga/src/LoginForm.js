import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const LoginForm = () => {
  // Store the username so we can reference it in a submit handler
  const [username, setUsername] = useState('')

  // Get user data from redux store
  const userData = useSelector((state) => state)
  const dispatch = useDispatch()

  // Whenever we change our username input's value
  // update the corresponding state's value.
  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value)
  }, [])

  // Handle a submit event of the form
  const handleFormSubmit = useCallback(
    (event) => {
      // Prevent the default behavior, as we don't want
      // for our page to reload upon submit.
      event.preventDefault()
      dispatch({ type: 'LOGIN_REQUEST', username })
    },
    [username, dispatch]
  )

  if (userData) {
    return (
      <div>
        <h1>
          <span data-testid="firstName">{userData.firstName}</span>{' '}
          <span data-testid="lastName">{userData.lastName}</span>
        </h1>
        <p data-testid="userId">{userData.id}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
