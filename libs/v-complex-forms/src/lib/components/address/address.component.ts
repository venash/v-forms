import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {Country} from '@venash-forms/country';
import {FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {VBaseFormComponent} from '@venash-forms/v-forms';

@Component({
  selector: 'venash-forms-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    }
  ]
})
export class AddressComponent extends VBaseFormComponent {

  countries: Country[] = [
    {
      name: 'Czech Republic',
      code: 'CZ'
    },
    {
      name: 'Slovakia',
      code: 'SK'
    }
  ]

  validatorsRequired = Validators.required;

  createFormGroup(): FormGroup {
    return new FormGroup({
      country: new FormControl(null, Validators.required),
      phone: new FormControl(null)
    });
  }

}
