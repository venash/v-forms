import {Country} from '../domain/country';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

const MOCK_COUNTRIES = [
  {
    name: 'Czech Republic',
    code: 'CZ'
  },
  {
    name: 'Slovakia',
    code: 'SK'
  }
];

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  getAllCountries(): Observable<Country[]> {
    return of(MOCK_COUNTRIES)
  }

}
