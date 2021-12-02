import { TestBed } from '@angular/core/testing';

import { OrganizationHistoryService } from './organization-history.service';

describe('OrganizationHistoryService', () => {
  let service: OrganizationHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
