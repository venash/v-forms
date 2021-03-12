import {Component, Input, Optional, Self} from '@angular/core';
import {VBaseComponent} from '../v-base.component';
import {VInputControls} from '../v-input-controls';
import {NgControl} from "@angular/forms";

@Component({
  selector: 'v-forms-number',
  templateUrl: './v-number.component.html',
  styleUrls: ['./v-number.component.scss'],
  providers: [
    {
      provide: VInputControls, useExisting: VNumberComponent
    }
  ],
})
export class VNumberComponent extends VBaseComponent {

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super(ngControl);
  }
  @Input()
  suffix: string;

  @Input()
  prefix: string;

  @Input()
  minFractionDigits: number;

  @Input()
  maxFractionDigits: number;

  @Input()
  mode: 'decimal' | 'currency';

  @Input()
  currency: string;

}
