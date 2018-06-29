import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from 'src/app/task';
import { Parent } from 'src/app/parent';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  parents : Observable<Parent[]>;
  tasks : Task[];
  str : string;
    
  constructor(private _task : TaskserviceService) { 
        
  }

  ngOnInit() {
    this.GetAlltasks();
    this.GetAllParenttasks();  
  }

  GetAlltasks()
  {
    this._task.GetTasks().subscribe((obj) => {
      this.tasks = obj;          
      this.tasks.forEach(element => {        
        element.newstrDate = new Date(element.strDate).toISOString().slice(0,10);        
        element.newendDate = new Date(element.endDate).toISOString().slice(0,10);
        this._task.getParentTasksByID(element.Parent_Id ).subscribe((parent) => {           
          element.parent_name = parent[0].Parent_Task;      
        })  
      });    
    })
  }

  GetTaskById(id:number)
  {
    this._task.GetTasksById(id).subscribe((obj) => {})
  }

  GetAllParenttasks()
  {
    this._task.getParentTasks().subscribe((obj) => {})
  }

  GetParentTaskById(id:number)
  {
    this._task.getParentTasksByID(id).subscribe((obj) => {})
  } 
  
  test(dt:Date): string
  {
    return 'me';
  }

}
