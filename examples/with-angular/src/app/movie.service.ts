import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Movie } from './models'

interface GraphQLResponse<T> {
  data?: T
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  listMovies() {
    return this.http.post<GraphQLResponse<{ movies: Array<Movie> }>>(
      '/movies',
      JSON.stringify({
        query: `
        query ListMovies {
          movies {
            title
          }
        }
      `,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
