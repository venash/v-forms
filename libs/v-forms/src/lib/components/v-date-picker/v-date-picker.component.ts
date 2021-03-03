import {Component, Optional, Self} from '@angular/core';
import {NgControl} from '@angular/forms';
import {VBaseComponent} from '../v-base.component';
import {VInputControls} from '../v-input-controls';

@Component({
  selector: 'v-forms-date-picker',
  templateUrl: './v-date-picker.component.html',
  styleUrls: ['./v-date-picker.component.scss'],
  providers: [
    {
      provide: VInputControls, useExisting: VDatePickerComponent
    }
  ],
})
export class VDatePickerComponent extends VBaseComponent {

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super(ngControl);
  }

}
