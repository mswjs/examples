import React, { useState, useCallback } from 'react'

export const LoginForm = () => {
  // Store the username so we can reference it in a submit handler
  const [username, setUsername] = useState('')

  // Create a state for the user data we are going to receive
  // from the API call upon form submit.
  const [userData, setUserData] = useState(null)

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

      // Perform a POST /login request and send the username
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify({ username }),
      })
        .then((res) => res.json())
        // Update the state with the received response
        .then(setUserData)
    },
    [username]
  )

  if (userData) {
    return (
      <div>
        <h1 data-testid="firstname">{userData.firstName}</h1>
        <p data-testid="username">{userData.username}</p>
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
