import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkCompetenceComponent } from './add-work-competence.component';

describe('AddWorkCompetenceComponent', () => {
  let component: AddWorkCompetenceComponent;
  let fixture: ComponentFixture<AddWorkCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkCompetenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
