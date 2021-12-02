import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectMutationComponent } from './edit-project-mutation.component';

describe('EditProjectMutationComponent', () => {
  let component: EditProjectMutationComponent;
  let fixture: ComponentFixture<EditProjectMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
