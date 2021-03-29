import {CountryDataService} from '../data/country-data.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Country} from '../domain/country';

@Injectable({
  providedIn: 'root'
})
export class CountryFacade {

  constructor(private readonly countryDataService: CountryDataService) {
  }

  getAllCountries(): Observable<Country[]> {
    return this.countryDataService.getAllCountries();
  }

}
