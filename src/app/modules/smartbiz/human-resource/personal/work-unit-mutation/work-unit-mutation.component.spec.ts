import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkUnitMutationComponent } from './work-unit-mutation.component';

describe('WorkUnitMutationComponent', () => {
  let component: WorkUnitMutationComponent;
  let fixture: ComponentFixture<WorkUnitMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkUnitMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkUnitMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
