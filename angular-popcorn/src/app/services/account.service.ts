import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddFavoriteResponse, FavoriteMoviesResponse } from '../models/interfaces/account.interface';
import { AuthService } from './auth.service';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(private http : HttpClient, private authService : AuthService) { }



  addFavorite(idMovie : number, isFav : boolean) : Observable<AddFavoriteResponse>{

    let request= `${environment.apiBaseUrl}/account/{account_id}/favorite?api_key=${environment.apiKey}&session_id=${this.authService.getSessionId()}`
    return this.http.post<AddFavoriteResponse>(request, {media_type : "movie", media_id : idMovie, favorite: isFav}, DEFAULT_HEADERS )
    //this.favoriteBodyData.media_id = `${idMovie}`
  }




  getFavoriteMovies() : Observable<FavoriteMoviesResponse>{

    return this.http.get<FavoriteMoviesResponse>(`${environment.apiBaseUrl}/account/{account_id}/favorite/movies?api_key=${environment.apiKey}&language=${environment.defaultLang}&sort_by=created_at.asc&page=1&session_id=${this.authService.getSessionId()}`)

  }


}
