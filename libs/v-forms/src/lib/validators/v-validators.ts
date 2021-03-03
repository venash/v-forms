import {startWithCZ} from './start-with-cz/start-with-cz-validator.factory';
import {startWith} from './start-with/start-with-validator.factory';
import {AbstractControl} from '@angular/forms';
import {ValidatorWithoutArguments} from './validator';


export class VValidators {

  static startWithCZ(formControl: AbstractControl): ValidatorWithoutArguments {
    return startWithCZ(formControl);
  }

  static startWith(prefix: string) {
    return startWith(prefix);
  }

}
