import { TestBed } from '@angular/core/testing';

import { ActivityNotifierService } from './activity-notifier.service';

describe('ActivityNotifierService', () => {
  let service: ActivityNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
