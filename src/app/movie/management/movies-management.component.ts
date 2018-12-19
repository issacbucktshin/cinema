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
  add: boolean;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.setMovies();
  }
  displayDetails = (movie: MovieModel) => {
    this.movies.find(m => m.imdbID == movie.imdbID).displayDetails = true;
  }
  hideDetails = (movie: MovieModel) => {
    let index = this.movies.findIndex(m => m.imdbID == movie.imdbID);
    let hiddenMovie = this.movies.find(m => m.imdbID == movie.imdbID);
    let emptyMovie = new MovieModel
    const newMovie = Object.assign(emptyMovie, hiddenMovie);
    this.movies.splice(index, 1);
    this.movies.splice(index, 0, newMovie);
  }
  deleteMovie = (movieId: string) => {
    let index = this.movies.findIndex(m => m.imdbID == movieId);
    this.movies.splice(index, 1);
  }
  updateMovie = (movie: MovieModel) => {
    let index = this.movies.findIndex(m => m.imdbID == movie.imdbID);
    let foundMovie = this.movies.find(m => m.imdbID == movie.imdbID);
    let emptyMovie = new MovieModel
    const newMovie = Object.assign(emptyMovie, foundMovie);
    this.movies.splice(index, 1);
    this.movies.splice(index, 0, newMovie);
  }
  addMovie = (movie: MovieModel) => {
    movie.Poster = "/assets/images/poster.jpg";
    this.movies.unshift(movie);
  }
  setMovies = (term: string = '') => {
    this.loading = true;
    this.movieService.getMoviesFromAPI(term)
      .subscribe(response => {
        let movies = response.Search;
        if (movies) {
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
        }
      }, error => {
        this.loading = false;
        this.alert(error.message)
      })
  }
  getMovieDetails = (movieId: string) => {
    return this.movieService.getById(movieId);
  }

  searchMovies = (term: string) => {
    this.movies = [];
    this.setMovies(term);
  }

  alert = (message: string) => {
    this.messages.push({
      detail: message,
      severity: MessageSeverity.error,
      summary: message
    })
  }
}