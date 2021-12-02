import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeNumberScaleComponent } from './add-employee-number-scale.component';

describe('AddEmployeeNumberScaleComponent', () => {
  let component: AddEmployeeNumberScaleComponent;
  let fixture: ComponentFixture<AddEmployeeNumberScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeNumberScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeNumberScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
