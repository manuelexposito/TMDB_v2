import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreListResponse } from '../models/interfaces/genre.interface';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http : HttpClient) { }


getGenreList() : Observable<GenreListResponse>{

  return this.http.get<GenreListResponse>(`${environment.apiBaseUrl}/genre/movie/list?api_key=${environment.apiKey}&language=${environment.defaultLang}`)

}

}
