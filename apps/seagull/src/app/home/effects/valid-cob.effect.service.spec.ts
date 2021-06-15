import {TestBed} from '@angular/core/testing';

import {ValidCobEffect} from './valid-cob.effect.service';

describe('ValidCob.EffectService', () => {
  let service: ValidCobEffect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidCobEffect);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
