import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMutationComponent } from './project-mutation.component';

describe('ProjectMutationComponent', () => {
  let component: ProjectMutationComponent;
  let fixture: ComponentFixture<ProjectMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
