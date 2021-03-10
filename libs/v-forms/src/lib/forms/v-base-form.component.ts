import {ControlValueAccessor, FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Directive, OnDestroy} from '@angular/core';

const noop = () => {};

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class VBaseFormComponent<T = any> implements ControlValueAccessor, OnDestroy {

  formGroup: FormGroup;
  value: T;

  onTouch: any = noop;

  registerOnChangeSubscription: Subscription;

  registerOnChange(fn: any): void {
    this.registerOnChangeSubscription
      = this.formGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(disabled: boolean): void {
    disabled ? this.formGroup.disable(): this.formGroup.enable();
  }

  writeValue(val: any): void {
    val && this.formGroup.setValue(val, { emitEvent: false });
  }

  ngOnDestroy(): void {
    if (this.registerOnChangeSubscription) {
      this.registerOnChangeSubscription.unsubscribe();
    }
  }

}
