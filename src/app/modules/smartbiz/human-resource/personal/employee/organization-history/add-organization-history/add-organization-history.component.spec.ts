import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationHistoryComponent } from './add-organization-history.component';

describe('AddOrganizationHistoryComponent', () => {
  let component: AddOrganizationHistoryComponent;
  let fixture: ComponentFixture<AddOrganizationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganizationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
