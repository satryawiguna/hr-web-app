import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkUnitMutationComponent } from './add-work-unit-mutation.component';

describe('AddWorkUnitMutationComponent', () => {
  let component: AddWorkUnitMutationComponent;
  let fixture: ComponentFixture<AddWorkUnitMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWorkUnitMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkUnitMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
