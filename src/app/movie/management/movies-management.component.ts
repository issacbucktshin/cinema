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

  movies: MovieModel[] = [];
  messages: MessageModel[] = [];
  loading: boolean;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.setMovies();
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
