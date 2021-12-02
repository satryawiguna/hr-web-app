import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPositionMutationComponent } from './history-position-mutation.component';

describe('HistoryPositionMutationComponent', () => {
  let component: HistoryPositionMutationComponent;
  let fixture: ComponentFixture<HistoryPositionMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryPositionMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPositionMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
