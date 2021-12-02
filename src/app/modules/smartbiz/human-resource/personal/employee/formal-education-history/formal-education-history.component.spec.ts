import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalEducationHistoryComponent } from './formal-education-history.component';

describe('FormalEducationHistoryComponent', () => {
  let component: FormalEducationHistoryComponent;
  let fixture: ComponentFixture<FormalEducationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalEducationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalEducationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
