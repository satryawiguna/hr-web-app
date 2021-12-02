import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeNumberScaleComponent } from './edit-employee-number-scale.component';

describe('EditEmployeeNumberScaleComponent', () => {
  let component: EditEmployeeNumberScaleComponent;
  let fixture: ComponentFixture<EditEmployeeNumberScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeNumberScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeNumberScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
