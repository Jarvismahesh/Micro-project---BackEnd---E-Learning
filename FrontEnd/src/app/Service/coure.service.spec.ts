import { TestBed } from '@angular/core/testing';

import { CoureService } from './coure.service';

describe('CoureService', () => {
  let service: CoureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
