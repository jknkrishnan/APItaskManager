import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor(private _http : HttpClient) { }

  GetTasks() : Observable<any>
  {
    return this._http.get<any>(environment.url+"Task");     
  }

  GetTasksById(id:number) : Observable<any>
  {
    return this._http.get<any>(environment.url+"Task/"+id);  
  }

  getParentTasks(): Observable<any>
  {
    return this._http.get<any>(environment.url+"Parent");  
  }

  getParentTasksByID(id:number) : Observable<any>
  {
    return this._http.get<any>(environment.url+"Parent/"+id);  
  }


}
