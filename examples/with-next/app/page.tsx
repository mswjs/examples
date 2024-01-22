import styles from './page.module.css'

async function getUser() {
  const response = await fetch('https://api.example.com/user')
  const user = await response.json()
  return user
}

export default async function Home() {
  const user = await getUser()

  return (
    <main className={styles.main}>
      <p>Hello, {user.name}</p>
    </main>
  )
}
