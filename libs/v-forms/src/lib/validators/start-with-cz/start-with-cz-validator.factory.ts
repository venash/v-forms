import {AbstractControl, ValidationErrors} from '@angular/forms';

export function startWithCZ(formControl: AbstractControl): ValidationErrors {
  const value = formControl.value;
  if (value && !value.startsWith('CZ')) {
    return {
      startsWithCZ: {
        valid: false
      }
    }
  }
  return null;
}
