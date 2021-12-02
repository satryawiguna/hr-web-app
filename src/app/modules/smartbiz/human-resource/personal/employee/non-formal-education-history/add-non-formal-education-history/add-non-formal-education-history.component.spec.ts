import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNonFormalEducationHistoryComponent } from './add-non-formal-education-history.component';

describe('AddNonFormalEducationHistoryComponent', () => {
  let component: AddNonFormalEducationHistoryComponent;
  let fixture: ComponentFixture<AddNonFormalEducationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNonFormalEducationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNonFormalEducationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
