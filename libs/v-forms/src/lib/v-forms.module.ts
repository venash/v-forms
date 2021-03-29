import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VInputComponent} from './components/v-input/v-input.component';
import {VTextComponent} from './components/v-text/v-text.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {VDatePickerComponent} from './components/v-date-picker/v-date-picker.component';
import {CalendarModule} from 'primeng/calendar';
import {StartWithCzValidatorDirective} from './validators/start-with-cz/start-with-cz-validator.directive';
import {StartWithValidatorDirective} from './validators/start-with/start-with-validator.directive';
import {VSelectComponent} from './components/v-select/v-select.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {VNumberComponent} from './components/v-number/v-number.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {VInputErrorComponent} from './components/v-input-error/v-input-error.component';
import {ConditionalValidatorDirective} from './validators/conditional-validator/conditional-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    NgSelectModule,
    InputNumberModule,
  ],
  declarations: [
    VInputComponent,
    VTextComponent,
    VDatePickerComponent,
    VSelectComponent,
    VNumberComponent,
    StartWithCzValidatorDirective,
    StartWithValidatorDirective,
    ConditionalValidatorDirective,
    VInputErrorComponent,
  ],
  exports: [
    VInputComponent,
    VTextComponent,
    VDatePickerComponent,
    VSelectComponent,
    VNumberComponent,
    StartWithCzValidatorDirective,
    StartWithValidatorDirective,
    ConditionalValidatorDirective,
  ],
})
export class VFormsModule {
}
