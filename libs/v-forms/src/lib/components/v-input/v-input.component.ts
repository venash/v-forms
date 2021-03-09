import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {getFirstErrorFromControl} from './v-input.models';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {NgControl} from '@angular/forms';
import {VInputControls} from '../v-input-controls';

// TODO: v-form-control
@UntilDestroy()
@Component({
  selector: 'v-forms-input',
  templateUrl: './v-input.component.html',
  styleUrls: ['./v-input.component.scss'],
})
export class VInputComponent implements AfterContentInit, OnChanges {

  uid: string;

  @Input()
  label: string;

  firstError: string;

  @ContentChild(VInputControls) child: VInputControls<any>;

  ngAfterContentInit(): void {
    this.setup();
    this.handleErrors(this.child.ngControl);
  }

  private handleErrors(control: NgControl) {
    if (!control) {
      throw Error('NgControl is null!');
    }

    if (control && control.valueChanges) {
      this.firstError = getFirstErrorFromControl(control)?.key;
      control.valueChanges.pipe(untilDestroyed(this)).subscribe(() => {
        this.firstError = getFirstErrorFromControl(control)?.key;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes', changes);
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
