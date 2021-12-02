import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPositionMutationComponent } from './edit-position-mutation.component';

describe('EditPositionMutationComponent', () => {
  let component: EditPositionMutationComponent;
  let fixture: ComponentFixture<EditPositionMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPositionMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPositionMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
