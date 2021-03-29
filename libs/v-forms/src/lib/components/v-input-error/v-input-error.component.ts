import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ValidationErrors} from '@angular/forms';
import {getFirstError} from './v-input-error.models';

@Component({
  selector: 'v-forms-input-error',
  templateUrl: './v-input-error.component.html',
  styleUrls: ['./v-input-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VInputErrorComponent implements OnChanges {

  @Input()
  errors: ValidationErrors | null;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.errors && !changes.firstChange) {
      this.changeDetectorRef.markForCheck();
    }
  }

  getFirstError(errors: ValidationErrors) {
    return getFirstError(errors);
  }
}
