import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrganizationHistoryComponent } from './edit-organization-history.component';

describe('EditOrganizationHistoryComponent', () => {
  let component: EditOrganizationHistoryComponent;
  let fixture: ComponentFixture<EditOrganizationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrganizationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrganizationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
