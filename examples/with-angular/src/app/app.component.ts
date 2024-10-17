import { Component, inject } from '@angular/core'
import { Movie } from './models'
import { MovieService } from './movie.service'
import { UserService } from './user.service'
import { AsyncPipe } from '@angular/common'
import { Observable, map } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [AsyncPipe],
})
export class AppComponent {
  userService = inject(UserService)
  movieService = inject(MovieService)

  user$ = this.userService.getUser()
  movies$: Observable<Movie[]>

  onFetchMoviesClick() {
    this.movies$ = this.movieService
      .listMovies()
      .pipe(map((moviesResponse) => moviesResponse.data.movies))
  }
}
