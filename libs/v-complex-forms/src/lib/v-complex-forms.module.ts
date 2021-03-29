import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPercentageComponent } from './components/country-percentage/country-percentage.component';
import { AddressComponent } from './components/address/address.component';
import {VFormsModule} from '@venash-forms/v-forms';
import {ReactiveFormsModule} from '@angular/forms';
import {VDebugToolsModule} from '@venash-forms/v-debug-tools';
import { AddressComplexComponent } from './components/address-complex/address-complex.component';

@NgModule({
  imports: [
    CommonModule,
    VFormsModule,
    VDebugToolsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CountryPercentageComponent,
    AddressComponent,
    AddressComplexComponent,
  ],
  exports: [
    AddressComponent,
    AddressComplexComponent,
  ]
})
export class VComplexFormsModule {}
