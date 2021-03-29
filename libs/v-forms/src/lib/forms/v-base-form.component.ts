import {AbstractControl, ControlValueAccessor, FormGroup, ValidationErrors, Validator} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Directive, OnDestroy, OnInit} from '@angular/core';

const noop = () => { };

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class VBaseFormComponent<T = any>
  implements ControlValueAccessor, Validator, OnInit, OnDestroy {

  formGroup: FormGroup;
  value: T;

  onTouch: any = noop;

  registerOnChangeSubscription: Subscription;
  registerOnValidatorChangeSubscription: Subscription;


  ngOnInit(): void {
    this.formGroup = this.createFormGroup();
  }

  ngOnDestroy(): void {
    if (this.registerOnChangeSubscription) {
      this.registerOnChangeSubscription.unsubscribe();
    }
    if (this.registerOnValidatorChangeSubscription) {
      this.registerOnValidatorChangeSubscription.unsubscribe();
    }
  }

  abstract createFormGroup(): FormGroup;

  /*
   * CVA
   */
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

  /*
   * VALIDATOR
   */
  registerOnValidatorChange(fn: () => void): void {
    this.registerOnValidatorChangeSubscription
      = this.formGroup.valueChanges.subscribe(fn);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.formGroup.valid ? null : { vBaseForm: {
        valid: false
      }
    };
  }

}
