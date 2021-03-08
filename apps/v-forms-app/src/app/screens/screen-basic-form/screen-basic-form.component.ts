import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'venash-forms-screen-basic-form',
  templateUrl: './screen-basic-form.component.html',
  styleUrls: ['./screen-basic-form.component.scss']
})
export class ScreenBasicFormComponent implements OnInit{

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      text: ['FOO', [Validators.required]],
      date: []
    })
  }


}
