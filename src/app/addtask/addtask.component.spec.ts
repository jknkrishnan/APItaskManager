import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Task } from '../task';

import { AddtaskComponent } from './addtask.component';
import { Parent } from 'src/app/parent';

describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtaskComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 /*  it('On Submitting add task form when parent already exists', () => {
    component.item = new Task();
 component.itemparent = new Parent();
    component.item.TaskDesc = 'test5';
    component.item.priority = 1;
    component.item.strDate = new Date("2018-07-05");
    component.item.endDate = new Date("2018-07-06");
    component.itemparent.Parent_Task = "1223";    
    component.submit();
    expect(component.submitResult); 
  }); */
});
