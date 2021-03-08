import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'venash-forms-screen-disabled-controls',
  templateUrl: './screen-disabled-controls.component.html',
  styleUrls: ['./screen-disabled-controls.component.scss']
})
export class ScreenDisabledControlsComponent implements OnInit {

  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      text: new FormControl('FOO', [
        Validators.maxLength(2),
        Validators.required,
        Validators.max(2)
      ]),
      disabled: new FormControl('dis value from dis control', [])
    });
    this.formGroup.get('disabled').disable();
  }
}
