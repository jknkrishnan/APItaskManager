import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Task } from '../task';
import { Parent } from '../parent';
import { fakeService, Interceptor } from '../app.interceptor';



import { UpdatetaskComponent } from './updatetask.component';

describe('UpdatetaskComponent', () => {
  let component: UpdatetaskComponent;
  let fixture: ComponentFixture<UpdatetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetaskComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetaskComponent);
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
      expect(component._obj.TaskDesc).toEqual("t1");      
    }, 5000);
  });

  it('should submit when parent is not present', () => {     
    component.submit();  
    setTimeout(() => {     
      expect(component._obj.Task_Id).toBeGreaterThan(0);      
      expect(component._obj.Parent_Id).toBeGreaterThan(0);  
      expect(component._obj.TaskDesc).toEqual("t1");                
    }, 5000);
  });

});
