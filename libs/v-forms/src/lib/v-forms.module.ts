import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VInputComponent} from './components/v-input/v-input.component';
import {VTextComponent} from './components/v-text/v-text.component';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {VDatePickerComponent} from './components/v-date-picker/v-date-picker.component';
import {CalendarModule} from 'primeng/calendar';
import {StartWithCzValidatorDirective} from './validators/start-with-cz/start-with-cz-validator.directive';
import {StartWithValidatorDirective} from './validators/start-with/start-with-validator.directive';
import { VSelectComponent } from './components/v-select/v-select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
  ],
  declarations: [
    VInputComponent,
    VTextComponent,
    VDatePickerComponent,
    StartWithCzValidatorDirective,
    StartWithValidatorDirective,
    VSelectComponent,
  ],
  exports: [
    VInputComponent,
    VTextComponent,
    VDatePickerComponent,
    StartWithCzValidatorDirective,
    StartWithValidatorDirective,
  ],
})
export class VFormsModule {
}
