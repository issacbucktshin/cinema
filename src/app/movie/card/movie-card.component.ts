import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { MovieModel } from 'src/app/model/movie/movie.model';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()movie:MovieModel;
  hover:boolean;
  edit:boolean;
  showDetails:boolean;

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.setMovieDetails();
  }

  setMovieDetails = () => {debugger
    this.movieService.getById(this.movie.imdbID)
        .subscribe(movie => this.movie = movie)
  }

}
