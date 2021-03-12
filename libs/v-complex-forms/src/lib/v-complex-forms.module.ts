import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPercentageComponent } from './components/country-percentage/country-percentage.component';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CountryPercentageComponent,
    AddressComponent,
  ],
  exports: [
    AddressComponent,
  ]
})
export class VComplexFormsModule {}
