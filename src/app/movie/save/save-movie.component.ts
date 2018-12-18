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
  @Input() editMode: boolean;
  @Output() movieSaved = new EventEmitter;
  @Output() movieAdded = new EventEmitter<MovieModel>();
  @Output() movieClosed = new EventEmitter;
  movieFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm = () => {
    this.movieFormGroup = this.formBuilder.group({
      Title: [this.movie && this.movie.Title, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      Year: [this.movie && this.movie.Year, [Validators.required, Validators.pattern('^[0-9]*$')]],
      Director: [this.movie && this.movie.Director, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      Runtime: [this.movie && this.movie.Runtime, [Validators.required, Validators.pattern('^[0-9]*$')]],
      Genre: [this.movie && this.movie.Genre, [Validators.required]]
    });
    this.movieFormGroup.updateValueAndValidity();
  }

  save = () => {
    let movie = this.movieFormGroup.value;
    debugger
    if(this.editMode)
    {
      this.movieSaved.next(movie);
    }
    else 
    {
      this.movieAdded.next(movie);
    }
  }

  close = () => {
    this.movieClosed.next();
  }

  get form() { return this.movieFormGroup.controls; }
}
