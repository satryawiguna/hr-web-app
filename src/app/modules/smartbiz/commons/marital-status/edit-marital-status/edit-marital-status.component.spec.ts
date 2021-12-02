import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaritalStatusComponent } from './edit-marital-status.component';

describe('EditMaritalStatusComponent', () => {
  let component: EditMaritalStatusComponent;
  let fixture: ComponentFixture<EditMaritalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMaritalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaritalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
