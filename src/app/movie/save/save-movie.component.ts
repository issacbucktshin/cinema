import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieModel } from 'src/app/model/movie/movie.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'save-movie',
  templateUrl: './save-movie.component.html',
  styleUrls: ['./save-movie.component.scss']
})
export class SaveMovieComponent implements OnInit {

  @Input() movie: MovieModel;
  @Output() movieSaved = new EventEmitter;
  movieFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.movieFormGroup = this.formBuilder.group({
      Title: [this.movie && this.movie.Title, [Validators.required, Validators.pattern('^[a-z]+$')]],
      Year: [this.movie && this.movie.Year, [Validators.required]],
      Director: [this.movie && this.movie.Director, Validators.required],
      Runtime: [this.movie && this.movie.Runtime, Validators.required],
      Genre: [this.movie && this.movie.Genre, Validators.required]
    });
  }

  save = () => {
    let movie = this.movieFormGroup.value;
    this.movieSaved.next(movie);
  }

}
