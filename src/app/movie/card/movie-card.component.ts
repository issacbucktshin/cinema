import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieModel } from 'src/app/model/movie/movie.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Output() OnDetailsHidden = new EventEmitter<MovieModel>();
  @Output() OnDetailsUpdated = new EventEmitter<MovieModel>();
  @Input() displayDetails: boolean;
  @Input() movie: MovieModel;
  edit: boolean;

  constructor(private movieService: MovieService) { }

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

  updateMovie = (movie:MovieModel) => {
    let updMovie = Object.assign(this.movie, movie);
    this.OnDetailsUpdated.next(updMovie);
  }
}
