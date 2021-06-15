import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class ValidCobEffect {

  constructor(private action$: Actions) {
  }
}
