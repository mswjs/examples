import { User } from '../../models/users/user.model'

export async function commandLoginUser(
  username: User['username'],
): Promise<User> {
  const response = await fetch('/login', {
    method: 'POST',
    body: JSON.stringify({ username }),
  })

  if (response.ok) {
    const responseBody: User = await response.json()
    return responseBody
  }

  throw new Error('something was wrong!')
}
