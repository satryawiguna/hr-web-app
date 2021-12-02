import { TestBed } from '@angular/core/testing';

import { PositionMutationService } from './position-mutation.service';

describe('PositionMutationService', () => {
  let service: PositionMutationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositionMutationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
