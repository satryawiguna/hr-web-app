import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryWorkUnitMutationComponent } from './history-work-unit-mutation.component';

describe('HistoryWorkUnitMutationComponent', () => {
  let component: HistoryWorkUnitMutationComponent;
  let fixture: ComponentFixture<HistoryWorkUnitMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryWorkUnitMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryWorkUnitMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
