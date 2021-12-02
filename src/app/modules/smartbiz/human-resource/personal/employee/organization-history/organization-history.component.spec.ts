import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationHistoryComponent } from './organization-history.component';

describe('OrganizationHistoryComponent', () => {
  let component: OrganizationHistoryComponent;
  let fixture: ComponentFixture<OrganizationHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
