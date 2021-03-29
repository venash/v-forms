import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {VValidators} from '@venash-forms/v-forms';

@Component({
  selector: 'venash-forms-screen-testing-validators-args-change',
  templateUrl: './screen-testing-validators-args-change.component.html',
  styleUrls: ['./screen-testing-validators-args-change.component.scss']
})
export class ScreenTestingValidatorsArgsChangeComponent implements OnInit {

  formGroup: FormGroup;
  formGroup2: FormGroup;

  templateDrivenText: string;

  prefix = 'EN';

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      text: ['EN', [Validators.required, VValidators.startWith('EN')]],
    });

    this.formGroup2 = this.formBuilder.group({
      text: ['EN', [Validators.required]],
    });

    this.templateDrivenText = 'EN';

    this.changePrefixLater('EG');
  }

  changePrefixLater(newPrefix: string) {
    setTimeout(() => {
      this.formGroup.get('text').setValidators(
        [Validators.required, VValidators.startWith(newPrefix)]
      );
      this.formGroup.get('text').updateValueAndValidity();

      this.prefix = newPrefix;
    }, 1500);
  }

}
