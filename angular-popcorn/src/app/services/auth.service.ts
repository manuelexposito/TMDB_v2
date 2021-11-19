import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenResponse } from '../models/interfaces/token-interface';
import { SessionIDResponse } from '../models/interfaces/session-id.interface';


const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  // GETTER SETTER DE SESSION ID
  getSessionId() {

    return localStorage.getItem('session_id')

  }

  setSessionId(sessionId : string) {

    localStorage.setItem('session_id', sessionId)

  }

  // GETTER SETTER DE REQUEST TOKEN
  getLocalRequestToken(){

    return localStorage.getItem('request_token')

  }

  setLocalRequestToken(requestToken : string){

    localStorage.setItem('request_token', requestToken)
  }


  //COMPROBACION LOGGEADO
  isLoggedIn() : boolean {

    return localStorage.getItem('session_id') != null;


  }


///MÉTODOS CONTROLLER
  //PASO 1
  getRequestToken() : Observable<TokenResponse>{

  return this.http.get<TokenResponse>(`${environment.apiBaseUrl}/authentication/token/new?api_key=${environment.apiKey}`)
  }

  //(PASO 2) --> DESDE LA APLICACION TMDB

  //PASO 3 --> DEVOLVER SESSION ID
    //no hace falta pasarlo por parametro, debemos usar los métodos de arriba GETSessionId y SETSessionId
  createSessionId() : Observable<SessionIDResponse> {

    let request = `${environment.apiBaseUrl}/authentication/session/new?api_key=${environment.apiKey}`
                                        //SE LE PASA--> PETICION + BODY + HEADER
    return this.http.post<SessionIDResponse>(request, {request_token : this.getLocalRequestToken()})


  } 


}
