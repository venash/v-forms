import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';
import {Directive, forwardRef, Input} from '@angular/core';
import {startWith} from './start-with-validator.factory';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[startWith][ngModel]' +
    ',[startWith][formControl]' +
    ',[startWith][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => StartWithValidatorDirective),
      multi: true
    }
  ]
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class StartWithValidatorDirective implements Validator {

  @Input()
  prefix: string;

  validate(c: FormControl) {
    return startWith(this.prefix)(c);
  }

}
