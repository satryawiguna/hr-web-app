import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectMutationComponent } from './add-project-mutation.component';

describe('AddProjectMutationComponent', () => {
  let component: AddProjectMutationComponent;
  let fixture: ComponentFixture<AddProjectMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
