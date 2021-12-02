import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNumberScaleComponent } from './employee-number-scale.component';

describe('EmployeeNumberScaleComponent', () => {
  let component: EmployeeNumberScaleComponent;
  let fixture: ComponentFixture<EmployeeNumberScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNumberScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNumberScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
