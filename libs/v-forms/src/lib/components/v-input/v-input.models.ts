import {NgControl} from '@angular/forms';

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
