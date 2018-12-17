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
  open = (event, movie: MovieModel, overlaypanel: any) => {
    this.movies.find(m => m.imdbID == movie.imdbID).showd = true;
    
    // this.movieService.getById(movie.imdbID)
    //   .subscribe(details => {
    //     this.selectedMovie = details;
    //     overlaypanel.show(event);
    //   })
  }
  hide = (movie: MovieModel) => {
    debugger
    // const m = this.movies.find(m => m.imdbID == movie.imdbID);
    // this.movies.splice(i, 1);
    
    
    // this.movies = mov;
    // let mov:MovieModel[] = this.movies
    // mov.find(m => m.imdbID == movie.imdbID).showd = false;
    let i = this.movies.findIndex(m => m.imdbID == movie.imdbID);
    let m = this.movies.find(m => m.imdbID == movie.imdbID);
    let n = new MovieModel
    const c= Object.assign(n,m);
    this.movies.splice(i, 1);
    //this.movies.push(c);
    console.log("this movies", this.movies);
    this.movies.splice(i, 0, c);


    // this.movies = mov;
    // console.log(this.movies)

    // this.selectedMovie = new MovieModel;
    // overlaypanel.hide(event, "actualTarget");
  }
  setMovies = () => {
    this.loading = true;
    this.movieService.getMovies('inception')
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
