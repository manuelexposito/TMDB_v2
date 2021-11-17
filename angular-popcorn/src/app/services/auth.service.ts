import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/interfaces/token-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getSessionId() {

    return localStorage.getItem('session_id')

  }

  setSessionId(sessionId : string) {

    localStorage.setItem('session_id', sessionId)

  }


  isLoggedIn() : boolean {

    return localStorage.getItem('session_id') != null;


  }

  getRequestToken() : Observable<TokenResponse>{

  return this.http.get<TokenResponse>(`${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`)
  }


}
