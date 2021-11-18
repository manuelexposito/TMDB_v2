import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { List, ListResponse } from '../models/interfaces/lists.interface';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http : HttpClient) { }

  /*
  createNewList() : Observable<ListResponse>{



  }*/


  getLists() : Observable<ListResponse>{
                                                                                                                                                                 //AQUÍ NECESITAMOS LA SESSION_ID
    return this.http.get<ListResponse>(`${environment.apiBaseUrl}/account/{account_id}/lists?api_key=${environment.apiKey}&language=${environment.defaultLang}&page=1&session_id={{session_id}}`);

  }


}
