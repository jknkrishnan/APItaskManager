import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';

import { TaskserviceService } from './taskservice.service';
import { Parent } from 'src/app/parent';
import { environment } from 'src/environments/environment';

describe('TaskserviceService', () => {
  
  let service: TaskserviceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskserviceService],
      imports:[HttpClientTestingModule]
    });

    // inject the service
    service = TestBed.get(TaskserviceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([TaskserviceService], (service: TaskserviceService) => {
    expect(service).toBeTruthy();
  }));

  it('should get the parent data successful', () => { 
       service.getParentTasks().subscribe((obj) => {                
        expect(obj.length).toBeGreaterThan(0);
      })  
      const req = httpMock.expectOne(environment.url+"Parent", 'get all parents');
      expect(req.request.method).toBe('GET'); 
      httpMock.verify();
  }); 

  it('should get the task data successful', () => { 
    service.GetTasks().subscribe((obj) => {                
     expect(obj.length).toBeGreaterThan(0);
    })  
    const req = httpMock.expectOne(environment.url+"Task", 'get all tasks');
    expect(req.request.method).toBe('GET');    
    httpMock.verify();
  });

  it('should get the parent data by id successful', () => { 
      service.getParentTasksByID(1).subscribe((obj) => {                
       expect(obj.length).toBeGreaterThan(0);
    })  
    const req = httpMock.expectOne(environment.url+"Parent/1", 'get selected tasks');
    expect(req.request.method).toBe('GET'); 
    httpMock.verify();
  });

  it('should get the task data by id successful', () => { 
      service.GetTasksById(1).subscribe((obj) => {                
      expect(obj.length).toBeGreaterThan(0);
   })  
    const req = httpMock.expectOne(environment.url+"Task/1", 'get selected tasks');
    expect(req.request.method).toBe('GET'); 
    httpMock.verify();
  });

  it('should post correct data to parent table', () => {  
    
  });

  it('should post correct data to task table', () => {     
  });

  it('should put correct data to task table', () => {     
  });

});
