import { TestBed } from '@angular/core/testing';

import { NonFormalEducationHistoryService } from './non-formal-education-history.service';

describe('NonFormalEducationHistoryService', () => {
  let service: NonFormalEducationHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonFormalEducationHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
