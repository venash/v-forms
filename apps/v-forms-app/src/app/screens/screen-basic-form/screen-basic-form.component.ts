import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country, CountryFacade} from '@venash-forms/country';


@Component({
  selector: 'venash-forms-screen-basic-form',
  templateUrl: './screen-basic-form.component.html',
  styleUrls: ['./screen-basic-form.component.scss']
})
export class ScreenBasicFormComponent implements OnInit{

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

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private countryFacade: CountryFacade,
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      text: ['FOO', [Validators.required]],
      date: [],
      select: [],
      amount: []
    })
  }


}
