import {ControlValueAccessor, NgControl} from '@angular/forms';
import {Directive, Input} from '@angular/core';
import {VInputControls} from './v-input-controls';
import {RandomUtils} from '@venash-forms/v-utils';

const noop = () => {};

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class VBaseComponent
  implements VInputControls<any>, ControlValueAccessor {

  readonly ngControl: NgControl | null;

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    if (this.value !== value) {
      this._value = value;
      this.notifyNgModel();
    }
  }

  private _value: any;

  constructor(private readonly control: NgControl) {
    this.ngControl = control;
    this.ngControl.valueAccessor = this;
  }

  @Input()
  required: boolean;

  @Input()
  readonly: boolean;

  @Input()
  disabled: boolean;

  readonly uid: string = RandomUtils.randomId();

  onChange: any = noop;

  onTouch: any = noop;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    this._value = value;
  }

  protected notifyNgModel() {
    if (this.onChange != null) {
      this.onChange(this._value);
    }
  }

}
