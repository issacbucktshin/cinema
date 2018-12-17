import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MovieModel } from '../model/movie/movie.model';

@Injectable()
export class MovieService {

  private api = "http://www.omdbapi.com/";

  constructor(private httpClient:HttpClient) { }

  getMovies = (title:string) => {
    let params = new HttpParams();
    params = params.append('s', title || 'inception');
    params = params.append("apikey", "7456763a");
    
    let url: string = `${this.api}`;
    return this.httpClient.get<any>(url, { params: params })
  }
  getById = (movieId:string) => {
    let params = new HttpParams();
    params = params.append('i', movieId);
    params = params.append("apikey", "7456763a");
    
    let url: string = `${this.api}`;
    return this.httpClient.get<any>(url, { params: params })
  }
}
