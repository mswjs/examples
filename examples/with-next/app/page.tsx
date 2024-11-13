import { MovieList } from './movie-list'

export type User = {
  firstName: string
  lastName: string
}

async function getUser() {
  const response = await fetch('https://api.example.com/user')
  const user = (await response.json()) as User
  return user
}

export default async function Home() {
  const user = await getUser()

  return (
    <main>
      <p id="server-side-greeting">Hello, {user.firstName}!</p>
      <MovieList />
    </main>
  )
}
