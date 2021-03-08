import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VValidators} from '@venash-forms/v-forms';

@Component({
  selector: 'venash-forms-screen-testing-validators-with-arguments',
  templateUrl: './screen-testing-validators-with-arguments.component.html',
  styleUrls: ['./screen-testing-validators-with-arguments.component.scss']
})
export class ScreenTestingValidatorsWithArgumentsComponent implements OnInit {

  formGroup: FormGroup;
  formGroup2: FormGroup;

  templateDrivenText: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      text: ['FOO', [Validators.required, VValidators.startWith('EN')]],
    })

    this.formGroup2 = this.formBuilder.group({
      text: ['FOO', [Validators.required]],
    })
  }

}
