import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddFavoriteResponse } from '../models/interfaces/account.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient, private authService : AuthService) { }

  /*
  addFavorite() : Observable<AddFavoriteResponse>{

    let request= `${environment.apiBaseUrl}/account/{account_id}/favorite?api_key=${environment.apiKey}&session_id=${this.authService.getSessionId()}`
    return this.http.post<AddFavoriteResponse>(request, )
   
  }
  */
}
