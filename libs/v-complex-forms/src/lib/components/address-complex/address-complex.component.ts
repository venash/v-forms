import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {Country} from '@venash-forms/country';
import {FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {VBaseFormComponent} from '@venash-forms/v-forms';

@Component({
  selector: 'venash-forms-address-complex',
  templateUrl: './address-complex.component.html',
  styleUrls: ['./address-complex.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComplexComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComplexComponent),
      multi: true
    }
  ]
})
export class AddressComplexComponent extends VBaseFormComponent implements OnInit, OnDestroy {

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

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
