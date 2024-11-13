import { http, graphql, HttpResponse } from 'msw'
import type { User } from '@/app/page'
import type { Movie } from '@/app/movie-list'

export const handlers = [
  http.get<never, never, User>('https://api.example.com/user', () => {
    return HttpResponse.json({
      firstName: 'Sarah',
      lastName: 'Maverick',
    })
  }),
  graphql.query<{ movies: Array<Movie> }>('ListMovies', () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            id: '6c6dba95-e027-4fe2-acab-e8c155a7f0ff',
            title: '123 Lord of The Rings',
          },
          {
            id: 'a2ae7712-75a7-47bb-82a9-8ed668e00fe3',
            title: 'The Matrix',
          },
          {
            id: '916fa462-3903-4656-9e76-3f182b37c56f',
            title: 'Star Wars: The Empire Strikes Back',
          },
        ],
      },
    })
  }),
]
