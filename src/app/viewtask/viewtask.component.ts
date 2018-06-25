import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  constructor(private _task : TaskserviceService) { 
    this.GetAlltasks();
    this.GetTaskById(2);
    this.GetAllParenttasks();
    this.GetParentTaskById(1);
  }

  ngOnInit() {
  }

  GetAlltasks()
  {
    this._task.GetTasks().subscribe((obj) => {
    console.log(obj);
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
    })
  }

  GetParentTaskById(id:number)
  {
    this._task.getParentTasksByID(id).subscribe((obj) => {
      console.log(obj);
      })
  }

}
