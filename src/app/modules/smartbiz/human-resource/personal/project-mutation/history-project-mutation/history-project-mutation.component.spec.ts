import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryProjectMutationComponent } from './history-project-mutation.component';

describe('HistoryProjectMutationComponent', () => {
  let component: HistoryProjectMutationComponent;
  let fixture: ComponentFixture<HistoryProjectMutationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryProjectMutationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryProjectMutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
