import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from 'src/app/task';
@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  parents : Observable<any[]>;
  tasks : Observable<Task[]>;
  constructor(private _task : TaskserviceService) { 
    this.GetAlltasks();
    this.GetAllParenttasks();    
  }

  ngOnInit() {
  }

  GetAlltasks()
  {
    this._task.GetTasks().subscribe((obj) => {
    console.log(obj);
    this.tasks = obj;
    })
  }

  GetTaskById(id:number)
  {
    this._task.GetTasksById(id).subscribe((obj) => {
      console.log(obj);
      })
  }

  GetAllParenttasks()
  {
    this._task.getParentTasks().subscribe((obj) => {
      console.log(obj);
      this.parents = obj;
    })
  }

  GetParentTaskById(id:number)
  {
    this._task.getParentTasksByID(id).subscribe((obj) => {
      console.log(obj);
      })
  }

}
