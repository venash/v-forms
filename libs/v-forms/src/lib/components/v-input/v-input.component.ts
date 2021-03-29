import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {VInputControls} from '../v-input-controls';

@Component({
  selector: 'v-forms-input',
  templateUrl: './v-input.component.html',
  styleUrls: ['./v-input.component.scss'],
})
export class VInputComponent implements AfterContentInit {

  uid: string;

  @Input()
  label: string;

  firstError: string;

  @ContentChild(VInputControls) child: VInputControls<any>;

  ngAfterContentInit(): void {
    if (!this.child) {
      throw new Error(`${this.constructor.name}: Child component is missing!`);
    } else {
      this.setup();
    }
  }

  isRequired() {
    if (this.child) {
      return this.child.required;
    }
    return false;
  }

  private setup() {
    this.uid = this.child.uid;
  }
}
