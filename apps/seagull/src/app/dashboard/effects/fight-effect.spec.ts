import { TestBed } from '@angular/core/testing';

import { FightEffect } from './fight-effect';

describe('FightEffectService', () => {
  let service: FightEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FightEffect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
