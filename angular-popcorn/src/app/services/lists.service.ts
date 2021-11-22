import { AddListResponse } from './../models/interfaces/lists.interface';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List, ListResponse } from '../models/interfaces/lists.interface';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};




@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http : HttpClient, private authService : AuthService) { }


  createNewList(nameList : string, descriptionList : string) : Observable<AddListResponse>{

    let request = `${environment.apiBaseUrl}/list?api_key=${environment.apiKey}&session_id=${this.authService.getSessionId()}`

   return this.http.post<AddListResponse>(request, {name : nameList, description : descriptionList}, DEFAULT_HEADERS)

  }


  getLists() : Observable<ListResponse>{

    return this.http.get<ListResponse>(`${environment.apiBaseUrl}/account/{account_id}/lists?api_key=${environment.apiKey}&language=${environment.defaultLang}&page=1&session_id=${this.authService.getSessionId()}`);

  }

  addMovieToList(movieId : number, listId : number) : Observable<AddListResponse>{
    let request = `${environment.apiBaseUrl}/list/${listId}/add_item?api_key=${environment.apiKey}&session_id=${this.authService.getSessionId()}`
    return this.http.post<AddListResponse>(request, {media_id : movieId})

  }


}
