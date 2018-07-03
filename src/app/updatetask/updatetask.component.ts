import { Component, OnInit, HostListener, HostBinding } from '@angular/core';
import {Task} from '../task';
import {Parent} from '../parent';
import { TaskserviceService } from '../taskservice.service';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {
  item : Task;
  _def : Task[];
  visible : boolean = false;  
  itemparent : Parent;    
  error : boolean = false;
  msg : string;
  priority : number = 20; 
  parent_id : number; 
  _task_id : number;
  //newstartDate : string;
  //newendDate: string;
  

  @HostListener('mouseover') mouseover(eventdata : Event)
  {
    this.visible = this.setVisibility();
  }
  @HostListener('mouseleave') mouseleave(eventdata : Event)
  {
    this.visible = this.setVisibility();
  }
 
  constructor(private _task : TaskserviceService, private route : ActivatedRoute, private _router : Router) {
    this.item = new Task(); 
    this.itemparent  = new Parent();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
        this._task_id  = params['id'];
      }
    )
    this.getTaskinfo(this._task_id)  
  }

  submit()
  {   
    
    //this.item.strDate = new Date(this.newstartDate);
    //this.item.endDate = new Date(this.newendDate);    
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
              if (obj[i].Parent_Task == this.item.parent_name)
              {
                this.parent_id = obj[i].Parent_Id;              
                break;
              }
          } 
        }         
        if (this.parent_id > 0)
        {          
          this.item.Parent_Id = this.parent_id; 
           this._task.PostTaskById(this.item).subscribe((taskobj) => {                  
          });  
         }
         else
         {
          //post parent and task
          this.itemparent.Parent_Task = this.item.parent_name;
          this._task.Postparent(this.itemparent).subscribe((parentobj) => {                                            
            this.item.Parent_Id = parentobj[0].Parent_Id;
            this._task.PostTaskById(this.item).subscribe((taskobj) => {                      
            });           
          });
         }
      })         
    }  
    this._router.navigate(['/viewtask'])
  }

  setVisibility() : boolean
  {
    return ((this.item.TaskDesc != null) && (this.item.endDate != null) 
       && (this.item.strDate != null) && (this.item.priority != null) && 
       (this.item.parent_name != null))
  }

  getTaskinfo(task_id : number)
  {
      this._task.GetTasksById(task_id).subscribe((obj) => {       
      this._def = obj;          
      this._def.forEach(element => {
        this._task.getParentTasksByID(element.Parent_Id ).subscribe((parent) => {                     
          element.parent_name = parent[0].Parent_Task;      
          this.item.parent_name = element.parent_name; 
        })  
      }); 
      this.item.Task_Id = this._def[0].Task_Id;
      this.item.Parent_Id = this._def[0].Parent_Id;
      this.item.TaskDesc = this._def[0].TaskDesc;
      this.item.priority = this._def[0].priority;
      //this.newstartDate = new Date(this._def[0].strDate).toISOString().slice(0,10); 
      this.item.strDate =  this._def[0].strDate;           
      this.item.endDate = this._def[0].endDate; 
      //this.newendDate = new Date(this._def[0].endDate).toISOString().slice(0,10); 
      });          
  }
}
