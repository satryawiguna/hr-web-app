import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalPhoneComponent } from './international-phone.component';

describe('InternationalPhoneComponent', () => {
  let component: InternationalPhoneComponent;
  let fixture: ComponentFixture<InternationalPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
