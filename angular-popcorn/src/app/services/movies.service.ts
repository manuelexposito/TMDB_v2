import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, MoviesPopularResponse, MovieState } from '../models/interfaces/movies-popular.interface';
import { AuthService } from './auth.service';

const movieUrl = `${environment.apiBaseUrl}/movie`;


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private authService : AuthService) { }


  getMovie(idMovie : number) : Observable<Movie>{

    return this.http.get<Movie>(`${movieUrl}/${idMovie}?api_key=${environment.apiKey}&language=${environment.defaultLang}`);

  }

  getPopularMovies(): Observable<MoviesPopularResponse> {
    return this.http.get<MoviesPopularResponse>(`${movieUrl}/popular?api_key=${environment.apiKey}&language=${environment.defaultLang}`);
  }

  getAccountStates(idMovie : number) : Observable<MovieState>{

    return this.http.get<MovieState>(`${movieUrl}/${idMovie}/account_states?api_key=${environment.apiKey}&language=${environment.defaultLang}&session_id=${this.authService.getSessionId()}`)

  }


}
