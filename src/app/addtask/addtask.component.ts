import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {Parent} from '../parent';
import { TaskserviceService } from '../taskservice.service'
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  item : Task;
  itemparent : Parent;  
  constructor(private _task : TaskserviceService) {
    this.item = new Task();
    this.itemparent = new Parent();
  }

  ngOnInit() {
  }

  Submit()
  {       
    this._task.Postparent(this.itemparent).subscribe((obj) => {
      console.log(obj); 
      this.item.Parent_Id = obj.parent_id;
      this._task.PostTask(this.item).subscribe((obj) => {
        console.log(obj);        
      });          
    });     
  } 
}
