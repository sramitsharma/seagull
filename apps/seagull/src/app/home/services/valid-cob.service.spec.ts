import { TestBed } from '@angular/core/testing';

import { ValidCobService } from './valid-cob.service';

describe('ValidCobService', () => {
  let service: ValidCobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidCobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
