import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'venash-forms-screen-address-complex',
  templateUrl: './screen-address-complex.component.html',
  styleUrls: ['./screen-address-complex.component.scss']
})
export class ScreenAddressComplexComponent implements OnInit {

  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      address: new FormControl()
    })
  }


}
