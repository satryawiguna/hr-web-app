import { TestBed } from '@angular/core/testing';

import { OtherEquipmentService } from './other-equipment.service';

describe('OtherEquipmentService', () => {
  let service: OtherEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
