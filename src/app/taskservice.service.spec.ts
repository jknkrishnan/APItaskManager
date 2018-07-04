import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { TaskserviceService } from './taskservice.service';

describe('TaskserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskserviceService],
      imports:[HttpClientModule]
    });
  });

  it('should be created', inject([TaskserviceService], (service: TaskserviceService) => {
    expect(service).toBeTruthy();
  }));
});
