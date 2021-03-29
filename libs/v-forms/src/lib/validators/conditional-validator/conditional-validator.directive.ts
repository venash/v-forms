import {Directive, forwardRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {conditionalValidator} from './conditional-validator.factory';
import {ConditionalValidator,} from './conditional-validator.models';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[conditional][ngModel]' +
    ',[conditional][formControl]' +
    ',[conditional][formControlName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ConditionalValidatorDirective),
      multi: true
    }
  ]
})
export class ConditionalValidatorDirective implements Validator, OnChanges {

  @Input()
  conditionalValidatorFn: () => ConditionalValidator;

  private _onChange: () => void;

  validate(c: FormControl): ValidationErrors | null {
    const cValidator: ConditionalValidator = this.conditionalValidatorFn();
    return conditionalValidator(cValidator)(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('conditionalValidator' in changes) {
      if (this._onChange) this._onChange();
    }
  }

}
