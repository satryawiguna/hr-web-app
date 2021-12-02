import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNonFormalEducationHistoryComponent } from './edit-non-formal-education-history.component';

describe('EditNonFormalEducationHistoryComponent', () => {
  let component: EditNonFormalEducationHistoryComponent;
  let fixture: ComponentFixture<EditNonFormalEducationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNonFormalEducationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNonFormalEducationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
