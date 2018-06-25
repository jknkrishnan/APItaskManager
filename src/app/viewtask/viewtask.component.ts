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
  }

  ngOnInit() {
  }

  GetAlltasks()
  {
    this._task.GetTasks().subscribe((obj) => {
    console.log(obj);
    })
  }

}
