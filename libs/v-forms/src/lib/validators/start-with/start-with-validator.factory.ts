import {FormControl, ValidatorFn} from '@angular/forms';

export function startWith(prefix: string): ValidatorFn {
  return (formControl: FormControl) => {
    if (!prefix) {
      throw new Error('startWith validator: missing prefix')
    }
    const value = formControl.value;
    if (value && !value.startsWith(prefix)) {
      return {
        startWith: {
          valid: false,
          requiredPrefix: prefix,
        }
      }
    }
    return null;
  };
}
