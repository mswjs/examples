import { Component, inject } from '@angular/core'
import { Movie, User } from './models'
import { MovieService } from './movie.service'
import { UserService } from './user.service'
import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Observable, map } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe],
})
export class AppComponent {
  userService = inject(UserService)
  movieService = inject(MovieService)

  user$: Observable<User>
  movies$: Observable<Movie[]>

  ngOnInit() {
    this.user$ = this.userService.getUser()
  }

  onFetchMoviesClick() {
    this.movies$ = this.movieService
      .listMovies()
      .pipe(map((moviesResponse) => moviesResponse.data.movies))
  }
}
