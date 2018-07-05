import { Component, OnInit, HostListener } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from 'src/app/task';
import { Parent } from 'src/app/parent';
import { forEach } from '@angular/router/src/utils/collection';
import { Location } from '@angular/common';
import {Router,NavigationEnd} from  '@angular/router';


@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  parents : Observable<Parent[]>;
  tasks : Task[];
  str : string;
  item : Task;
  _def : Task[];  
  itemparent : Parent; 

 
  constructor(private _task : TaskserviceService,private location: Location,private router : Router) { 
    this.item = new Task(); 
    this.itemparent  = new Parent();  
   }

  ngOnInit() {
    this.GetAlltasks();
    this.GetAllParenttasks();     
  }

  ngOnChanges()
  {
    //
  }

  GetAlltasks()
  {    
    this._task.GetTasks().subscribe((obj) => {   
      this.tasks = obj;          
      this.tasks.forEach(element => {                       
        this._task.getParentTasksByID(element.Parent_Id ).subscribe((parent) => {           
          element.parent_name = parent[0].Parent_Task;      
        })  
      });  
    })
  }

  GetAllParenttasks()
  {
    this._task.getParentTasks().subscribe((obj) => {})
  }

  GetParentTaskById(id:number)
  {
    this._task.getParentTasksByID(id).subscribe((obj) => {})
  } 
  
 end(id : number)
 {  
  this.delTaskinfo(id);  
  this.router.navigate([this.router.url]);
 }

async delTaskinfo(task_id : number) 
 {
     await this._task.GetTasksById(task_id).subscribe((obj) => {      
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
        this.item.strDate =  this._def[0].strDate;           
        this.item.endDate = this._def[0].endDate;         
        this.item.delete_flag = 1;
        this._task.PostTaskById(this.item).subscribe((taskobj) => {  });                     
     });       
     return this.item;        
 }  

 
}
