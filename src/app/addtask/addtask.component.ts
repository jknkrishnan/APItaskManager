import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {Parenttask} from '../parenttask';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  item : Task;
  itemparent : Parenttask;
  constructor() {
    this.item = new Task();
    this.itemparent = new Parenttask();
  }

  ngOnInit() {
  }

}
