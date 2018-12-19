import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cinema';
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.loadMovies('inception')
      .catch((error) => console.log(error))
  }
}
