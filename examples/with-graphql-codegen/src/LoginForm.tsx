import { useState, useCallback } from 'react'
import { useMutation } from '@apollo/client'
import { LoginDocument } from './graphql/generated'

export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [login, { data, loading, error }] = useMutation(LoginDocument, {
    variables: {
      username,
    },
  })

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

      login({
        variables: {
          username,
        },
      })
    },
    [username, login],
  )

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error while fetching the user data ({error.message})</p>
  }

  if (data?.login) {
    return (
      <div>
        <h1>
          <span data-testid="firstName">{data.login.firstName}</span>{' '}
          <span data-testid="lastName">{data.login.lastName}</span>
        </h1>
        <p data-testid="username">{data.login.username}</p>
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
        <button type="submit">Log in</button>
      </div>
    </form>
  )
}
