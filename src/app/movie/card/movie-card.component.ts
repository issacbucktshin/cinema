import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieModel } from 'src/app/model/movie/movie.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Output() hided = new EventEmitter<any>();
  @Input() movie:MovieModel;
  @Input() d:boolean;
  hover:boolean;
  edit:boolean;
  showDetails:boolean;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    //this.setMovieDetails();
  }

  hide = () => {
    this.movie.showd = false;
    this.hided.next(this.movie);
  }
  setMovieDetails = () => {
    this.movieService.getById(this.movie.imdbID)
        .subscribe(movie => this.movie = movie)
  }

}
