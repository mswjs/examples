import { useState, useEffect } from 'react'

function Books() {
  const [books, setBooks] = useState(undefined)
  useEffect(() => {
    fetch('/books')
      .then((res) => res.json())
      .then((res) => setBooks(res))
  }, [])
  if (books === undefined) return <>...loading</>
  return (
    <div>
      <h1>Books</h1>
      {!!books.length ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p className='noItems'>no items</p>
      )}
    </div>
  )
}

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(undefined)
  if (loggedIn === undefined)
    return (
      <button
        onClick={() => {
          fetch('/login', { method: 'POST' })
            .then((res) => res.json())
            .then((res) => setLoggedIn(res.success))
        }}
      >
        login
      </button>
    )
  if (!loggedIn) return <h1>Failed to login.</h1>
  return <Books />
}
