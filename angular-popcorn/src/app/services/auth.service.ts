import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/interfaces/token-interface';
import { SessionIDResponse } from '../models/interfaces/session-id.interface';

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

  //PASO 1
  getRequestToken() : Observable<TokenResponse>{

  return this.http.get<TokenResponse>(`${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`)
  }

  //(PASO 2) --> DESDE LA APLICACION TMDB

  //PASO 3 --> DEVOLVER SESSION ID
    //no hace falta pasarlo por parametro, debemos usar los métodos de arriba GETSessionId y SETSessionId
  createSessionId(requestToken : string ) : Observable<SessionIDResponse> {

    let request = `${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`
                                        //SE LE PASA--> PETICION + BODY + HEADER
    return this.http.post<SessionIDResponse>(request, requestToken)


  } 


}
