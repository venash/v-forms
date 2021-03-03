import {NgControl} from '@angular/forms';

export abstract class VInputControls<T> {

  value: T | null;

  readonly ngControl: NgControl | null;

  readonly required: boolean;

  readonly disabled: boolean;

  readonly uid: string;

}
