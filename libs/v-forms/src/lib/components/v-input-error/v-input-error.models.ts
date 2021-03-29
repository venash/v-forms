import {NgControl, ValidationErrors} from '@angular/forms';

export function getFirstErrorFromControl(control: NgControl): { key, value } {
  if (!control && !control.errors) {
    return null;
  }
  const errors = control.errors ?? false
  if (errors) {
    const key = Object.keys(control.errors)[0];
    const value = control.errors[key];
    return { key, value };
  }
  return null;
}

export function getFirstError(errors: ValidationErrors): { key, value } {
  if (errors) {
    const key = Object.keys(errors)[0];
    const value = errors[key];
    return { key, value };
  }
  return null;
}
