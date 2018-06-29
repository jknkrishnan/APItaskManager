import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import {Task} from './task';
import {Parent} from './parent';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  httpOption = {headers : new HttpHeaders({'Content-Type':'application/json'})}
  //Observa;
  constructor(private _http : HttpClient) { }

  GetTasks() : Observable<Task[]>
  {
    return this._http.get<any>(environment.url+"Task");     
  }

  GetTasksById(id:number) : Observable<Task[]>
  {
    return this._http.get<any>(environment.url+"Task/"+id);  
  }

  getParentTasks(): Observable<Parent[]>
  {
    return this._http.get<any>(environment.url+"Parent");  
  }

  getParentTasksByID(id:number) : Observable<Parent[]>
  {
    return this._http.get<any>(environment.url+"Parent/"+id);  
  }

  Postparent(item : Parent) : Observable<Parent>
  {    
    return this._http.post<any>(environment.url+"Parent",JSON.stringify(item),this.httpOption);        
  }

  PostTask(item : Task) : Observable<Task>
  {
    return this._http.post<any>(environment.url+"Task",JSON.stringify(item),this.httpOption);        
  } 

  PostTaskById(item : Task) : Observable<Task>
  {
    return this._http.put<any>(environment.url+"Task",JSON.stringify(item),this.httpOption);        
  } 
}
