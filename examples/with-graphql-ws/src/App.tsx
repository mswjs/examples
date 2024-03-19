import { useEffect, useState } from 'react'
import { createClient } from 'graphql-ws'
import './App.css'

const client = createClient({
  url: 'ws://localhost:5173/graphql',
})

export function App() {
  const [greetings, setGreetings] = useState([])

  useEffect(() => {
    async function subscribe() {
      const subscription = client.iterate({
        query: `subscription { greetings }`,
      })
      for await (const message of subscription) {
        setGreetings((prevGreetings) =>
          prevGreetings.concat(message.data?.greetings),
        )
      }
    }

    subscribe()
  }, [])

  return (
    <>
      <ul>
        {greetings.map((greeting, id) => (
          <li key={id}>{greeting}</li>
        ))}
      </ul>
    </>
  )
}
