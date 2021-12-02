import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReligionComponent } from './edit-religion.component';

describe('EditReligionComponent', () => {
  let component: EditReligionComponent;
  let fixture: ComponentFixture<EditReligionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReligionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReligionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
