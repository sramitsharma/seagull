import {TestBed} from '@angular/core/testing';

import {PortfolioEffect} from './portfolio-effect.service';

describe('PortfolioEffectService', () => {
  let service: PortfolioEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioEffect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
