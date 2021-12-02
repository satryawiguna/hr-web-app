import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherEquipmentComponent } from './add-other-equipment.component';

describe('AddOtherEquipmentComponent', () => {
  let component: AddOtherEquipmentComponent;
  let fixture: ComponentFixture<AddOtherEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOtherEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOtherEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
