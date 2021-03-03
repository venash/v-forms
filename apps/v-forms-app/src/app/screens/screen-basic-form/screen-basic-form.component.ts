import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'venash-forms-screen-basic-form',
  templateUrl: './screen-basic-form.component.html',
  styleUrls: ['./screen-basic-form.component.scss']
})
export class ScreenBasicFormComponent {

  constructor(private formBuilder: FormBuilder) {
  }

  formGroup: FormGroup = this.formBuilder.group({
    text: ['EEE', [Validators.required]],
    date: []
  })

}
