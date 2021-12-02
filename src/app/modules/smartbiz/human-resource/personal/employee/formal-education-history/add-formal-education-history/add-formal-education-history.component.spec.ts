import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormalEducationHistoryComponent } from './add-formal-education-history.component';

describe('AddFormalEducationHistoryComponent', () => {
  let component: AddFormalEducationHistoryComponent;
  let fixture: ComponentFixture<AddFormalEducationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormalEducationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormalEducationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
