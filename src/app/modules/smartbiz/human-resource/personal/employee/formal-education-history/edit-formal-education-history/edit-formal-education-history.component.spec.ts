import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormalEducationHistoryComponent } from './edit-formal-education-history.component';

describe('EditFormalEducationHistoryComponent', () => {
  let component: EditFormalEducationHistoryComponent;
  let fixture: ComponentFixture<EditFormalEducationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormalEducationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormalEducationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
