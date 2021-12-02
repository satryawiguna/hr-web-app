import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFormalEducationHistoryComponent } from './non-formal-education-history.component';

describe('NonFormalEducationHistoryComponent', () => {
  let component: NonFormalEducationHistoryComponent;
  let fixture: ComponentFixture<NonFormalEducationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonFormalEducationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonFormalEducationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
