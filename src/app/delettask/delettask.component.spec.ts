import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelettaskComponent } from './delettask.component';

describe('DelettaskComponent', () => {
  let component: DelettaskComponent;
  let fixture: ComponentFixture<DelettaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelettaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelettaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
