import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieModel } from 'src/app/model/movie/movie.model';
import { finalize } from 'rxjs/operators';
import { MessageModel } from 'src/app/model/message/message.mode';
import { MessageSeverity } from 'src/app/model/message/message-severity.enum';

@Component({
  selector: 'movies-management',
  templateUrl: './movies-management.component.html',
  styleUrls: ['./movies-management.component.scss']
})
export class MoviesManagementComponent implements OnInit {

  d: boolean;
  movies: MovieModel[] = [];
  selectedMovie: MovieModel;
  show: boolean;
  messages: MessageModel[] = [];
  loading: boolean;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.setMovies();
  }
  displayDetails = (movie: MovieModel) => {
    this.movies.find(m => m.imdbID == movie.imdbID).displayDetails = true;
  }
  hideDetails = (movie: MovieModel) => {
    let i = this.movies.findIndex(m => m.imdbID == movie.imdbID);
    let m = this.movies.find(m => m.imdbID == movie.imdbID);
    let n = new MovieModel
    const c = Object.assign(n, m);
    this.movies.splice(i, 1);
    this.movies.splice(i, 0, c);
  }
  updateMovie = (movie:MovieModel) => {
    let i = this.movies.findIndex(m => m.imdbID == movie.imdbID);
    let m = this.movies.find(m => m.imdbID == movie.imdbID);
    let n = new MovieModel
    const c = Object.assign(n, m);
    this.movies.splice(i, 1);
    this.movies.splice(i, 0, c);
  }
  setMovies = () => {
    this.loading = true;
    this.movieService.getMovies('inception')
      .subscribe(response => {
        let movies = response.Search;
        movies.forEach(movie => {
          this.getMovieDetails(movie.imdbID)
            .pipe(
              finalize(() => this.loading = false)
            )
            .subscribe(movie => {
              movie.displayDetails = false
              this.movies.push(movie);
            })
        });
      }, error => {
        this.loading = false;
        this.alert(error)
      })
  }
  getMovieDetails = (movieId:string) => {
    return this.movieService.getById(movieId);
  }
  searchMovies = (term: string) => {
    this.loading = true;
    this.movieService.getMovies(term)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(movies => {
        console.log(movies)
        this.movies = movies.Search
      }, error => {
        this.loading = false;
        this.alert(error)
      })
  }

  alert = (message: string) => {
    this.messages.push({
      detail: message,
      severity: MessageSeverity.error,
      summary: message
    })
  }
}
