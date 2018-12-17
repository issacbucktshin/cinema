import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, Inject } from '@angular/core';
import { MovieModel } from 'src/app/model/movie/movie.model';
import { MovieService } from '../movie.service';
import { finalize } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: MovieModel;
  @Output() closeEmitter = new EventEmitter()
  loading:boolean;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private movieService:MovieService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    @Inject(DOCUMENT) private doc: Document) {
      this.mobileQuery = media.matchMedia('(max-width: 520px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }
  
  ngOnInit() {
    if(this.movie)
     this.setMovie();
  }

  setMovie = () => {
    this.loading = true;
    this.movieService.getById(this.movie.imdbID)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(movie => {
        console.log(movie)
        this.movie = movie
      }, error => {
        this.loading = false;
      })
  }

  close = () => {
    this.closeEmitter.next();
  }
  getPoster = () => {
    return `url('${this.movie.Poster}')`;
  }
}
