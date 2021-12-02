import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionMutationComponent } from './position-mutation.component';

describe('PositionMutationComponent', () => {
  let component: PositionMutationComponent;
  let fixture: ComponentFixture<PositionMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
