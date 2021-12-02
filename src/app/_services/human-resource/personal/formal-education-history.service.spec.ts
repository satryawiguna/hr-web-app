import { TestBed } from '@angular/core/testing';

import { FormalEducationHistoryService } from './formal-education-history.service';

describe('FormalEducationHistoryService', () => {
  let service: FormalEducationHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormalEducationHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
