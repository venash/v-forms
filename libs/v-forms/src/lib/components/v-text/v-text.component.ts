import {ChangeDetectionStrategy, Component, Optional, Self, ViewEncapsulation} from '@angular/core';
import {VBaseComponent} from './../v-base.component';
import {NgControl} from '@angular/forms';
import {VInputControls} from '../v-input-controls';

@Component({
  selector: 'v-forms-text',
  templateUrl: './v-text.component.html',
  styleUrls: ['./v-text.component.scss'],
  providers: [
    {
      provide: VInputControls, useExisting: VTextComponent
    }
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VTextComponent extends VBaseComponent {

    constructor(@Optional() @Self() public ngControl: NgControl) {
      super(ngControl);
    }

}
