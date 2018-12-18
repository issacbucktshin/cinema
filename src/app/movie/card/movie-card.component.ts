import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieModel } from 'src/app/model/movie/movie.model';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Output() OnDetailsHidden = new EventEmitter<MovieModel>();
  @Output() OnDetailsUpdated = new EventEmitter<MovieModel>();
  @Output() OnDeleted = new EventEmitter<string>();
  @Input() displayDetails: boolean;
  @Input() movie: MovieModel;
  edit: boolean;

  constructor(
    private confirmationService: ConfirmationService,
    private movieService: MovieService) { }

  ngOnInit() { }

  hide = () => {
    this.displayDetails = false;
    this.movie.displayDetails = false;
    this.OnDetailsHidden.next(this.movie);
  }

  setMovieDetails = () => {
    this.movieService.getById(this.movie.imdbID)
      .subscribe(movie => {
        this.movie = movie,
          this.movie.displayDetails = true
      })
  }

  delete = () => {
    
    this.confirmationService.confirm({
      key: this.movie.imdbID,
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.OnDeleted.next(this.movie.imdbID)
      },
      reject: () => {
        
      }
    });
  }

  updateMovie = (movie: MovieModel) => {
    let updMovie = Object.assign(this.movie, movie);
    this.OnDetailsUpdated.next(updMovie);
  }
}
