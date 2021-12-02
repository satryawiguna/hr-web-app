import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCompetenceComponent } from './work-competence.component';

describe('WorkCompetenceComponent', () => {
  let component: WorkCompetenceComponent;
  let fixture: ComponentFixture<WorkCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
