import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkCompetenceComponent } from './edit-work-competence.component';

describe('EditWorkCompetenceComponent', () => {
  let component: EditWorkCompetenceComponent;
  let fixture: ComponentFixture<EditWorkCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
