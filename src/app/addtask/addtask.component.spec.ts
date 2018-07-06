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
          {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true 
      } 
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

  it('should submit when parent is present', () => {        
    component.submit();  
    setTimeout(() => {     
      expect(component._obj.Task_Id).toBeGreaterThan(0);      
      expect(component._obj.Parent_Id).toBeGreaterThan(0);            
    }, 5000);
  });

  it('should submit when parent is not present', () => {     
    component.submit();  
    setTimeout(() => {     
      expect(component._obj.Task_Id).toBeGreaterThan(0);      
      expect(component._obj.Parent_Id).toBeGreaterThan(0);                            
    }, 5000);
  }); 
});
