import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPositionMutationComponent } from './add-position-mutation.component';

describe('AddPositionMutationComponent', () => {
  let component: AddPositionMutationComponent;
  let fixture: ComponentFixture<AddPositionMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPositionMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPositionMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
