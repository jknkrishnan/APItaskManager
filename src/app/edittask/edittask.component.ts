import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import {Parent} from '../parent';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  item : Task;
  itemparent : Parent;
  constructor() {
    this.item = new Task();
    this.itemparent = new Parent();
  }

  ngOnInit() {
  }

}
