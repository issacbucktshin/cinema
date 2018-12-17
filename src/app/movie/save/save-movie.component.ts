import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/model/movie/movie.model';

@Component({
  selector: 'save-movie',
  templateUrl: './save-movie.component.html',
  styleUrls: ['./save-movie.component.scss']
})
export class SaveMovieComponent implements OnInit {

  @Input() movie:MovieModel;
  constructor() { }

  ngOnInit() {
  }

}
