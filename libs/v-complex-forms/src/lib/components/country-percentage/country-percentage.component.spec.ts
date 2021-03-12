import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPercentageComponent } from './country-percentage.component';

describe('CountryPercentageComponent', () => {
  let component: CountryPercentageComponent;
  let fixture: ComponentFixture<CountryPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryPercentageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
