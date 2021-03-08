import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {Directive, forwardRef, Input, OnChanges, SimpleChanges} from '@angular/core';
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
export class StartWithValidatorDirective implements Validator, OnChanges {

  @Input()
  prefix: string;

  private _onChange: () => void;

  validate(c: FormControl): ValidationErrors | null {
    return startWith(this.prefix)(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('prefix' in changes) {
      if (this._onChange) this._onChange();
    }
  }

}
