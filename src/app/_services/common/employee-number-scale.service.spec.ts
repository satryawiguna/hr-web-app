import { TestBed } from '@angular/core/testing';

import { EmployeeNumberScaleService } from './employee-number-scale.service';

describe('EmployeeNumberScaleService', () => {
  let service: EmployeeNumberScaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeNumberScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
