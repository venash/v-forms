import {NG_VALIDATORS} from '@angular/forms';
import {Directive} from '@angular/core';
import {startWithCZ} from './start-with-cz-validator.factory';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[startWithCz][ngModel]' +
    ',[startWithCz][formControl]' +
    ',[startWithCz][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: startWithCZ,
      multi: true
    }
  ]
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class StartWithCzValidatorDirective {
}
