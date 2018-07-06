import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import {Task} from '../task';
import {Parent} from '../parent';
import { TaskserviceService } from '../taskservice.service';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  item : Task;  
  itemparent : Parent;  
  visible : boolean = false;
  error : boolean = false;
  msg : string;
  priority : number = 20; 
  parent_id : number; 
  task_id : number;  
  _obj : Task;

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
    this.item.priority = this.priority;
  }
 
  ngOnInit() {
  }

  submit() 
  {   
    if (this.item.strDate > this.item.endDate)
    {
      this.msg = "Start date is greater than End date";      
    }
    else
    {
      this.msg = "";
      this._task.getParentTasks().subscribe((obj) => {                
        if (obj != null)
        {
          for (let i in obj)
          {
              if (obj[i].Parent_Task == this.itemparent.Parent_Task)
              {
                this.parent_id = obj[i].Parent_Id;              
                break;
              }
          } 
        }         
        if (this.parent_id > 0)
        {          
          this.item.Parent_Id = this.parent_id; 
          this._task.PostTask(this.item).subscribe((taskobj) => {     
            this._obj = taskobj[0];
            /* this.someMethod(taskobj);
              this._obj = taskobj;
              this._obj.forEach(element => {
                alert(element.Task_Id);
              }); */  
          });          
         }
         else
         {
          //post parent and task
          this._task.Postparent(this.itemparent).subscribe((parentobj) => {                                            
            this.item.Parent_Id = parentobj[0].Parent_Id;
            this._task.PostTask(this.item).subscribe((taskobj) => {   
              this._obj = taskobj[0];
              /* this.someMethod(taskobj);
               this._obj = taskobj;
              this._obj.forEach(element => {
                alert(element.Task_Id);
              });  */               
            });          
          });
         }
      })  
      this.msg = "Tasks sucessfully added";          
    }

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
    this.item.priority = this.priority;
    this.msg = "";
  }

  setVisibility() : boolean
  {
    return ((this.item.TaskDesc != null) && (this.item.strDate != null) 
    && (this.item.endDate != null) && (this.item.priority != null) && 
    (this.itemparent.Parent_Task != null))
  }

  someMethod(taskobj) {
    console.log(taskobj);
  }
}
