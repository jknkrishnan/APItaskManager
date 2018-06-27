import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import {Task} from '../task';
import {Parent} from '../parent';
import { TaskserviceService } from '../taskservice.service';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  item : Task;
  itemparent : Parent;  
  visible : boolean = false;
  @HostListener('mouseover') mouseover(eventdata : Event)
  {
    this.visible = this.setVisibility();
  }
  @HostListener('mouseleave') mouseleave(eventdata : Event)
  {
    this.visible = this.setVisibility();
  }
 
  constructor(private _task : TaskserviceService) {
    this.item = new Task();
    this.itemparent = new Parent();
    this.item.priority = 20;
  }
 
  ngOnInit() {
  }

  submit()
  {       
    this._task.Postparent(this.itemparent).subscribe((obj) => {
      console.log(obj);             
      this.item.Parent_Id = obj[0].Parent_Id;
      this._task.PostTask(this.item).subscribe((obj) => {
      console.log(obj);        
      });          
    });     
  } 

  reset()
  {
    this.itemparent.Parent_Id = null;
    this.itemparent.Parent_Task = null;
    this.item.Task_Id=null;
    this.item.Parent_Id=null;
    this.item.TaskDesc = null;
    this.item.strDate = null;
    this.item.endDate = null;
    this.item.Task_Id = null;
    this.item.priority = 20;

  }

  setVisibility() : boolean
  {
    return ((this.item.TaskDesc != null) && (this.item.strDate != null) 
    && (this.item.endDate != null) && (this.item.priority != null) && 
    (this.itemparent.Parent_Task != null))
  }
}
