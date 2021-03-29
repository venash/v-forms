import { ValidatorFn } from '@angular/forms';

export interface ConditionalValidator {
  predicate: () => boolean;
  validators: ValidatorFn | ValidatorFn[];
}

export type ConditionalValidatorFn = () => ConditionalValidator
