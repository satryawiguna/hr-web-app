import { TestBed } from '@angular/core/testing';

import { WorkCompetenceService } from './work-competence.service';

describe('WorkCompetenceService', () => {
  let service: WorkCompetenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkCompetenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
