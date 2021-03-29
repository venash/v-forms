import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'venash-forms-screen-address',
  templateUrl: './screen-address.component.html',
  styleUrls: ['./screen-address.component.scss']
})
export class ScreenAddressComponent implements OnInit {

  formGroup: FormGroup;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      address: new FormControl()
    })
  }


}
