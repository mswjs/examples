import { useState, useCallback } from 'react'

import { commandLoginUser } from '../../services/login/login.service'

import type { User } from '../../models/users/user.model'

export const LoginForm: React.FunctionComponent = () => {
  // Store the username so we can reference it in a submit handler
  const [username, setUsername] = useState<string>('')

  // Create a state for the user data we are going to receive
  // from the API call upon form submit.
  const [userData, setUserData] = useState<User>()

  // Whenever we change our username input's value
  // update the corresponding state's value.
  const handleUsernameChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setUsername(event.target.value)
    },
    [],
  )

  // Handle a submit event of the form
  const handleFormSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      // Prevent the default behavior, as we don't want
      // for our page to reload upon submit.
      event.preventDefault()

      // Perform a POST /login request and send the username
      const user: User = await commandLoginUser(username)
      // Update the state with the received response
      setUserData(user)
    },
    [username],
  )

  if (userData) {
    return (
      <div className="flex align-center justify-center">
        <div className="grid gap-5 w-full max-w-2xl border p-5 rounded shadow mt-10">
          <h1 className="text-2xl font-black text-gray-800">
            <span data-testid="firstName">{userData.firstName}</span>{' '}
            <span data-testid="lastName">{userData.lastName}</span>
          </h1>
          <p data-testid="userId" className="text-gray-400 text-sm">
            {userData.id}
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex align-center justify-center mt-10"
    >
      <div className="grid gap-3 w-full max-w-2xl border p-5 rounded shadow">
        <label
          htmlFor="username"
          className="font-medium uppercase text-neutral-700"
        >
          Login
        </label>

        <input
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          className="p-1 rounded border-2 border-orange-500 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded mt-4 p-2 hover:bg-neutral-600 active:bg-neutral-800 bg-neutral-700 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
