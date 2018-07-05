import { async, ComponentFixture, TestBed, tick, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Task } from '../task';
import { fakeService, Interceptor } from '../app.interceptor';
import { AddtaskComponent } from './addtask.component';
import { Parent } from 'src/app/parent';

describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;
  //let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtaskComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule        
      ],
      providers: [
        /*  {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true 
      }  */
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

 it('On Submitting add task form when parent already exists',fakeAsync (() => {    
    
  })); 

  it('On Submitting add task form when parent does not exists',async() => {   
  }); 
});
