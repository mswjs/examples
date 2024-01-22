import { MovieList } from './movieList'

export type User = {
  firstName: string
  lastName: string
}

async function getUser() {
  console.log('fetching user', fetch)
  const response = await fetch('https://api.example.com/user')
  const user = (await response.json()) as User
  return user
}

export default async function Home() {
  const user = await getUser()

  return (
    <main>
      <p>Hello, {user.firstName}</p>
      <MovieList />
    </main>
  )
}
