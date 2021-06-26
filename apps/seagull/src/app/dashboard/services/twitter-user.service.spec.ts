import { TestBed } from '@angular/core/testing';

import { TwitterUserService } from './twitter-user.service';

describe('TwitterUserService', () => {
  let service: TwitterUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwitterUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
