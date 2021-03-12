import {Component, Input} from '@angular/core';
import {VBaseComponent} from '../v-base.component';
import {VInputControls} from '../v-input-controls';

@Component({
  selector: 'v-forms-select',
  templateUrl: './v-select.component.html',
  styleUrls: ['./v-select.component.scss'],
  providers: [
    {
      provide: VInputControls, useExisting: VSelectComponent
    }
  ],
})
export class VSelectComponent extends VBaseComponent {

  @Input()
  multiple = false;

  @Input()
  items: any[];

  @Input()
  bindLabel: string;



}
