import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VValidators} from '@venash-forms/v-forms';

@Component({
  selector: 'venash-forms-screen-testing-validators',
  templateUrl: './screen-testing-validators.component.html',
  styleUrls: ['./screen-testing-validators.component.scss']
})
export class ScreenTestingValidatorsComponent implements OnInit {

  formGroup: FormGroup;
  formGroup2: FormGroup;

  templateDrivenText: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      text: ['EEE', [Validators.required, VValidators.startWithCZ]],
    })

    this.formGroup2 = this.formBuilder.group({
      text: ['E', [Validators.required]],
    })

  }

}
