import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getSessionId() {

    return localStorage.getItem('session_id')
    
  }

  setSessionId(sessionId : string) {

    localStorage.setItem('session_id', sessionId)

  }


  isLoggedIn() : boolean {

    return localStorage.getItem('session_id') != null;


  }


}
