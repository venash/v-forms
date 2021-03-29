import {ValidatorFn, Validators} from '@angular/forms';
import {ConditionalValidator} from './conditional-validator.models';

export function conditionalValidator(conditionalValidator: ConditionalValidator): ValidatorFn {
  return (formControl => {
      if (!formControl.parent) {
        return null;
      }
      if (conditionalValidator.predicate()) {
        const v = getValidators(conditionalValidator.validators);
        return v(formControl);
      }
      return null;
    }
  )
}

function getValidators(validators: ValidatorFn | ValidatorFn[]) {
  if (!validators) {
    return null;
  }
  if (!Array.isArray(validators)) {
    return validators;
  } else {
    return Validators.compose(validators);
  }
}
