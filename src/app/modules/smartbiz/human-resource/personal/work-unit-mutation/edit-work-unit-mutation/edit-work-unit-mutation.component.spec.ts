import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkUnitMutationComponent } from './edit-work-unit-mutation.component';

describe('EditWorkUnitMutationComponent', () => {
  let component: EditWorkUnitMutationComponent;
  let fixture: ComponentFixture<EditWorkUnitMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkUnitMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkUnitMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
