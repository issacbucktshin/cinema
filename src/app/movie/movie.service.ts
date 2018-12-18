import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MovieModel } from '../model/movie/movie.model';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieService {

  private api = "http://www.omdbapi.com/";
  private movis:MovieModel[] = [];
  private moviesSubscription = new BehaviorSubject<MovieModel[]>(this.movis);
  constructor(private httpClient: HttpClient) { }

  loadMovies = (title:string) => {
    const promise = this.getMoviesFromAPI(title)
    .toPromise()
    .then(movies => {
      this.movis = movies
      return movies;
    })
    return promise;
  }
  getMovies = () => {
    return this.moviesSubscription.asObservable();
  }
  updateMovies = (movies:MovieModel[]) => {
    // this.movis = [];
    this.movis = movies;
    // this.moviesSubscription.next(movies);
  }
  getMoviesFromAPI = (title: string) => {
    let params = new HttpParams();
    params = params.append('s', title || 'inception');
    params = params.append("apikey", "7456763a");

    let url: string = `${this.api}`;
    //return this.httpClient.get<any>(url, { params: params })
    return this.httpClient.get<any>(url, { params: params })
      .pipe(
        map((movies:any)=>{
          let allMovies = movies.Search;
          this.moviesSubscription.next(allMovies);
          return movies;
        })
      )
  }
  getById = (movieId: string) => {
    let params = new HttpParams();
    params = params.append('i', movieId);
    params = params.append("apikey", "7456763a");

    let url: string = `${this.api}`;
    return this.httpClient.get<any>(url, { params: params })
  }
}
