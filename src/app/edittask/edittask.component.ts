import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {Parenttask} from '../parenttask';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  item : Task;
  itemparent : Parenttask;
  constructor() {
    this.item = new Task();
    this.itemparent = new Parenttask();
  }

  ngOnInit() {
  }

}
