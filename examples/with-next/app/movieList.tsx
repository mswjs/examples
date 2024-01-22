'use client'
import { useState } from 'react'

export type Movie = {
  id: string
  title: string
}

export function MovieList() {
  const [movies, setMovies] = useState<Array<Movie>>([])

  const fetchMovies = () => {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query ListMovies {
            movies {
              id
              title
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((movies) => setMovies(movies))
      .catch(() => setMovies([]))
  }

  return (
    <div>
      <button onClick={fetchMovies}>Fetch movies</button>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li id={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
